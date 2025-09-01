import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";

export type LogoItem =
  | {
      node: React.ReactNode;
      href?: string;
      title?: string;
      ariaLabel?: string;
    }
  | {
      src: string;
      alt?: string;
      href?: string;
      title?: string;
      srcSet?: string;
      sizes?: string;
      width?: number;
      height?: number;
    };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right";
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
} as const;

const toCssLength = (value?: number | string): string | undefined =>
  typeof value === "number" ? `${value}px` : (value ?? undefined);

const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

const useResizeObserver = (
  callback: () => void,
  elements: Array<React.RefObject<Element | null>>,
  dependencies: React.DependencyList = []
) => {
  useEffect(() => {
    const resizeObserver = new ResizeObserver(callback);
    elements.forEach((ref) => {
      if (ref.current) {
        resizeObserver.observe(ref.current);
      }
    });

    return () => {
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback, ...dependencies, elements]);
};

const useImageLoader = (
  seqRef: React.RefObject<HTMLUListElement | null>,
  onLoad: () => void,
  dependencies: React.DependencyList = []
) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll("img");
    if (!images || images.length === 0) {
      onLoad();
      return;
    }

    let loadedCount = 0;
    const totalImages = images.length;

    const handleLoad = () => {
      loadedCount++;
      if (loadedCount >= totalImages) {
        onLoad();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        handleLoad();
      } else {
        img.addEventListener("load", handleLoad);
        img.addEventListener("error", handleLoad);
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleLoad);
        img.removeEventListener("error", handleLoad);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seqRef, onLoad, ...dependencies]);
};

const useAnimationLoop = (
  trackRef: React.RefObject<HTMLDivElement | null>,
  targetVelocity: number,
  seqWidth: number,
  isHovered: boolean,
  pauseOnHover: boolean
) => {
  const rafRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const positionRef = useRef<number>(0);

  const animate = useCallback(
    (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;

      if (trackRef.current) {
        if (!isHovered || !pauseOnHover) {
          positionRef.current +=
            (targetVelocity * deltaTime) / 1000;
        }

        // Reset position when it exceeds sequence width to create infinite loop
        if (Math.abs(positionRef.current) >= seqWidth) {
          positionRef.current = 0;
        }

        trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    },
    [targetVelocity, seqWidth, isHovered, pauseOnHover, trackRef]
  );

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null;
    };
  }, [animate]);
};

const LogoLoopComponent: React.FC<LogoLoopProps> = ({
  logos,
  speed = 120,
  direction = "left",
  width = "100%",
  logoHeight = 28,
  gap = 32,
  pauseOnHover = true,
  fadeOut = false,
  fadeOutColor,
  scaleOnHover = false,
  ariaLabel = "Partner logos",
  className,
  style,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const seqRef = useRef<HTMLUListElement>(null);
  const [seqWidth, setSeqWidth] = useState<number>(0);
  const [copyCount, setCopyCount] = useState<number>(ANIMATION_CONFIG.MIN_COPIES);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const targetVelocity = useMemo(() => {
    const magnitude = Math.abs(speed);
    const directionMultiplier = direction === "left" ? -1 : 1;
    return magnitude * directionMultiplier;
  }, [speed, direction]);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsHovered(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsHovered(false);
  }, [pauseOnHover]);

  const renderLogoItem = useCallback((item: LogoItem, index: number) => {
    const key = `logo-${index}`;
    const isNodeItem = 'node' in item;

    const content = isNodeItem ? (
      <>{item.node}</>
    ) : (
      <Image
        src={item.src}
        alt={item.alt || ''}
        width={item.width || logoHeight * 2}
        height={logoHeight}
        className="h-full w-auto object-contain"
        style={{
          height: 'var(--logoloop-logoHeight, 28px)',
          width: 'auto',
          objectFit: 'contain',
          marginRight: 'var(--logoloop-gap, 32px)'
        }}
      />
    );

    return item.href ? (
      <a
        key={key}
        href={item.href}
        title={item.title}
        aria-label={('ariaLabel' in item ? item.ariaLabel : 'src' in item ? item.alt : undefined) || 'Logo'}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center"
      >
        {content}
      </a>
    ) : (
      <div key={key} className="inline-flex items-center">
        {content}
      </div>
    );
  }, [logoHeight]);

  const logoLists = useMemo(
    () =>
      Array.from({ length: copyCount }, (_, copyIndex) => (
        <ul
          className="flex items-center"
          key={`copy-${copyIndex}`}
          role="list"
          aria-hidden={copyIndex > 0}
          ref={copyIndex === 0 ? seqRef : undefined}
        >
          {logos.map((item, itemIndex) => (
            <li key={`item-${copyIndex}-${itemIndex}`}>
              {renderLogoItem(item, itemIndex)}
            </li>
          ))}
        </ul>
      )),
    [copyCount, logos, renderLogoItem]
  );

  const cssVariables = useMemo(
    () => ({
      '--logoloop-gap': `${gap}px`,
      '--logoloop-logoHeight': `${logoHeight}px`,
      ...(fadeOutColor ? { '--logoloop-fadeColor': fadeOutColor } : {})
    } as React.CSSProperties),
    [gap, logoHeight, fadeOutColor]
  );

  const containerStyle = useMemo(
    (): React.CSSProperties => ({
      width: toCssLength(width) ?? "100%",
      ...cssVariables,
      ...style,
    }),
    [width, cssVariables, style]
  );

  const rootClasses = useMemo(
    () =>
      cx(
        "relative overflow-x-hidden group",
        "[--logoloop-gap:32px]",
        "[--logoloop-logoHeight:28px]",
        "[--logoloop-fadeColorAuto:#ffffff]",
        "dark:[--logoloop-fadeColorAuto:#0b0b0b]",
        scaleOnHover && "py-[calc(var(--logoloop-logoHeight)*0.1)]",
        className
      ),
    [scaleOnHover, className]
  );

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const sequenceWidth = seqRef.current?.getBoundingClientRect?.()?.width ?? 0;

    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth));
      const copiesNeeded =
        Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
    }
  }, []);

  useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight]);

  useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

  const handleImagesLoaded = useCallback(() => {
    updateDimensions();
  }, [updateDimensions]);

  useImageLoader(seqRef, handleImagesLoaded, [logos]);

  return (
    <div
      ref={containerRef}
      className={rootClasses}
      style={containerStyle}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {fadeOut && (
        <>
          <div
            aria-hidden
            className={cx(
              "pointer-events-none absolute inset-y-0 left-0 z-[1]",
              "w-[clamp(24px,8%,120px)]",
              "bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]"
            )}
          />
          <div
            aria-hidden
            className={cx(
              "pointer-events-none absolute inset-y-0 right-0 z-[1]",
              "w-[clamp(24px,8%,120px)]",
              "bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]"
            )}
          />
        </>
      )}
      <div
        ref={trackRef}
        className="flex items-center will-change-transform"
        style={{
          width: 'fit-content',
          minWidth: '100%',
          transition: 'transform 0.5s ease-out',
        }}
      >
        {logoLists}
      </div>
    </div>
  );
};

export const LogoLoop = React.memo(LogoLoopComponent, (prevProps, nextProps) => {
  return (
    prevProps.logos === nextProps.logos &&
    prevProps.speed === nextProps.speed &&
    prevProps.direction === nextProps.direction &&
    prevProps.width === nextProps.width &&
    prevProps.logoHeight === nextProps.logoHeight &&
    prevProps.gap === nextProps.gap &&
    prevProps.pauseOnHover === nextProps.pauseOnHover &&
    prevProps.fadeOut === nextProps.fadeOut &&
    prevProps.fadeOutColor === nextProps.fadeOutColor &&
    prevProps.scaleOnHover === nextProps.scaleOnHover &&
    prevProps.ariaLabel === nextProps.ariaLabel &&
    prevProps.className === nextProps.className &&
    JSON.stringify(prevProps.style) === JSON.stringify(nextProps.style)
  );
});