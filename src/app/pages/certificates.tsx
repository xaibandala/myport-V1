"use client";
import Image from "next/image";
import ClickSpark from "../components/ClickSpark";
import SplitText from "../components/SplitText";
import { motion } from "framer-motion";


// Certificates catalog (replace placeholders with real data)
const certificates = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera / Google",
    year: "2024",
    image: "/xai.jpeg",
    alt: "Certificate preview for Google Data Analytics",
    url: "#",
    accent: "from-emerald-500/30 via-teal-500/20 to-cyan-500/20",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Coursera / Meta",
    year: "2023",
    image: "/next.svg",
    alt: "Certificate preview for Meta Front-End",
    url: "#",
    accent: "from-violet-500/30 via-fuchsia-500/20 to-cyan-500/20",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2022",
    image: "/globe.svg",
    alt: "Certificate preview for AWS Cloud Practitioner",
    url: "#",
    accent: "from-indigo-500/30 via-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Scrum Master Certified (SMC)",
    issuer: "ScrumStudy",
    year: "2021",
    image: "/file.svg",
    alt: "Certificate preview for Scrum Master",
    url: "#",
    accent: "from-amber-500/30 via-rose-500/20 to-violet-500/20",
  },
];

export default function CertificatesPage() {
  return (
    <motion.div 
      id="certificates-section"
      className="relative isolate min-h-screen w-full overflow-x-hidden bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
<ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
        <motion.div 
          className="relative z-10 flex flex-col items-center px-4 text-center pt-24 md:pt-28 pb-16 md:pb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <SplitText
            text="My Certificates"
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            delay={150}
            duration={1.2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            useScrollTrigger={false}
          />
          {/* Subtitle under title */}
          <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-white/70 text-sm md:text-base leading-6 md:leading-7">
            Certifications and achievements that reflect continuous learning and impact.
          </p>
            {/* Certificates content section */}
          <motion.section 
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left mt-10 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {certificates.map((c, i) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <motion.div
                      className="group relative h-full flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_50px_-12px_rgba(0,0,0,0.7)]"
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        transition: { 
                          duration: 0.6, 
                          delay: 0.5 + (i * 0.1),
                          ease: [0.6, -0.05, 0.01, 0.99]
                        }
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                      whileHover={{ 
                        y: -8,
                        boxShadow: "0 15px 50px -12px rgba(0,0,0,0.5)",
                        transition: { 
                          type: "spring",
                          stiffness: 300,
                          damping: 15
                        }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Glow gradient */}
                      <motion.div
                        className={`pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br ${c.accent} opacity-0 blur-xl`}
                        aria-hidden="true"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileHover={{ 
                          opacity: 1, 
                          scale: 1.02,
                          transition: { 
                            duration: 0.5,
                            ease: "easeOut"
                          }
                        }}
                      />
                      {/* Thumbnail */}
                      <motion.div 
                        className="relative aspect-[16/9] w-full overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <motion.div
                          initial={{ opacity: 0.8, scale: 1.05 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full w-full"
                        >
                          <Image
                            src={c.image}
                            alt={c.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 ease-out"
                            priority={i === 0}
                          />
                        </motion.div>
                        <motion.div 
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 0.5 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                      {/* Content */}
                      <div className="flex-1 p-6 md:p-7 flex flex-col">
                        <motion.h3 
                          className="text-white/95 font-semibold text-lg md:text-xl"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                        >
                          {c.title}
                        </motion.h3>
                        <motion.p 
                          className="text-white/65 text-sm md:text-base mt-1"
                          initial={{ opacity: 0, y: 5 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 }}
                        >
                          {c.issuer} • {c.year}
                        </motion.p>
                        <div className="mt-5">
                          <motion.a
                            href={c.url}
                            target={c.url?.startsWith("http") ? "_blank" : undefined}
                            rel={c.url?.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="group/button inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/90 transition-colors hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                            aria-label={`View or verify certificate: ${c.title}`}
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
                            whileHover={{ 
                              y: -2,
                              backgroundColor: 'rgba(255, 255, 255, 0.08)',
                              boxShadow: '0 5px 15px -3px rgba(0, 0, 0, 0.2)',
                              transition: { 
                                type: "spring",
                                stiffness: 300,
                                damping: 15
                              }
                            }}
                            whileTap={{ scale: 0.96 }}
                          >
                            <motion.svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              className="h-4 w-4 opacity-80"
                              initial={{ scale: 1 }}
                              whileHover={{ 
                                scale: 1.2,
                                rotate: [0, -10, 10, -5, 0],
                                transition: { 
                                  rotate: { 
                                    repeat: 1, 
                                    duration: 0.6,
                                    ease: "easeInOut"
                                  }
                                }
                              }}
                            >
                              <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="12" cy="12" r="9" />
                            </motion.svg>
                            <span>Verify</span>
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
        </motion.div>
      </ClickSpark>
    </motion.div>
  );
}
