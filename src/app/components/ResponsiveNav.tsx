"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export type NavItem = { label: string; href: string };

type ResponsiveNavProps = {
  items: NavItem[];
  initialActiveIndex?: number;
  className?: string;
};

export default function ResponsiveNav({ items, initialActiveIndex = 0, className = "" }: ResponsiveNavProps) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const scrollToSection = (href: string): void => {
    // If it's a path to another page, use Next.js router
    if (href.startsWith('/')) {
      // Close mobile menu if open
      setOpen(false);
      router.push(href);
      return;
    }
    
    // Handle section scrolling for the home page
    if (window.location.pathname === '/') {
      // Extract section ID from href (e.g., "about" -> "about-section")
      const sectionMap: Record<string, string> = {
        'about': 'about-section',
        'projects': 'projects-section', 
        'certificates': 'certificates-section',
        'contact': 'contact-section'
      };

      const targetId = sectionMap[href] || href;
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        // Close mobile menu if open
        setOpen(false);
      }
    }
  };

  // Prefetch all routes on mount for snappier transitions
  useEffect(() => {
    items.forEach((it) => {
      try {
        router.prefetch(it.href);
      } catch {}
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Close on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  // ESC to close
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);


  return (
    <div className={`absolute top-4 right-4 z-20 ${className}`}>
      {/* Mobile hamburger (sm:hidden) */}
      <div className="sm:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/20 bg-black/40 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
        {open && (
          <div
            id="mobile-nav-panel"
            ref={panelRef}
            className="absolute right-0 mt-3 w-56 rounded-lg border border-white/15 bg-black/90 shadow-xl backdrop-blur-sm"
            role="menu"
          >
            <nav className="py-2">
              {items.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 cursor-pointer"
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    
                    // Handle Home navigation normally, others scroll to sections
                    if (it.href === '/') {
                      router.push('/');
                    } else {
                      scrollToSection(it.href);
                    }
                  }}
                >
                  {it.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Desktop Navigation (hidden on small screens) */}
      <div className="hidden sm:block">
        <nav className="flex items-center space-x-6">
          {items.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors px-3 py-2 rounded-md"
              onClick={(e) => {
                e.preventDefault();
                if (item.href.startsWith('/')) {
                  router.push(item.href);
                } else {
                  scrollToSection(item.href);
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
