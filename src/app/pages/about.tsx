"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <motion.section 
      id="about-section"
      className="relative z-10 w-full max-w-6xl xl:max-w-7xl mx-auto px-4 py-16 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight text-white">About Me</h2>
      
      {/* Profile Image */}
      <motion.div 
        className="mt-10 md:mt-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-full overflow-hidden ring-1 ring-white/15"
          whileHover={{ scale: 1.04, rotate: 1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
        >
          <Image
            src="/xai.jpeg"
            alt="Xai Bandala"
            width={144}
            height={144}
            priority
            sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 144px"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* About Me Text */}
      <motion.div
        className="w-full max-w-5xl mx-auto text-left mt-10 md:mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        whileHover={{ translateY: -2 }}
      >
        <div className="text-white/80 leading-7 md:leading-8 text-[15px] sm:text-base md:text-[19px] space-y-5 md:space-y-6">
          <p>
            I'm a developer passionate about crafting performant, delightful web experiences. I enjoy working across the stack—from building
            accessible, animated interfaces to designing robust APIs and data layers. I focus on clean architecture, thoughtful UX, and smooth
            motion to make products feel alive and intuitive.
          </p>
          <p>
            Recently I've been exploring interactive canvases, micro-animations, and edge deployments. When I'm not coding, I'm learning new
            design patterns, contributing to side projects, or experimenting with web graphics.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
