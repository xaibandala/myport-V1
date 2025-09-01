"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ClickSpark from "../components/ClickSpark";

const education = [
  {
    institution: "University of Technology",
    degree: "Bachelor of Science in Computer Science",
    year: "2020 - 2024",
    description: "Specialized in Web Development and Human-Computer Interaction. Graduated with honors."
  },
  {
    institution: "Coding Bootcamp",
    degree: "Full Stack Web Development",
    year: "2019",
    description: "Immersive program focusing on modern web technologies and best practices in software development."
  }
];

export default function EducationPage() {
  return (
    <motion.section
      id="education-section"
      className="relative z-10 w-full max-w-6xl xl:max-w-7xl mx-auto px-4 py-16 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight text-white">Education</h2>
      <motion.p 
        className="mt-3 md:mt-4 max-w-2xl mx-auto text-white/70 text-sm md:text-base leading-6 md:leading-7 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        A concise journey through my academic background.
      </motion.p>

      <div className="relative mt-10 md:mt-16">
        {/* Vertical timeline lines */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-cyan-500/25 md:hidden" aria-hidden="true" />
        <div className="absolute left-4 top-0 bottom-0 w-[6px] bg-cyan-500/5 blur-md md:hidden" aria-hidden="true" />

        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-cyan-500/25" aria-hidden="true" />
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[8px] bg-cyan-500/5 -translate-x-1/2 blur-md" aria-hidden="true" />

        <div className="space-y-8 md:space-y-12">
          {education.map((item, index) => (
            <motion.div
              key={item.institution + index}
              className={`relative group pl-12 md:pl-0 md:flex md:items-center md:gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              {/* Timeline marker */}
              <span
                className="absolute left-4 md:left-1/2 top-3 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-transform duration-300 will-change-transform group-hover:scale-110"
                aria-hidden="true"
              />

              {/* Left/Right: Year */}
              <div className="md:w-1/2">
                <div className="flex md:justify-end h-full items-start">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span className="text-xs md:text-sm font-medium tracking-wide text-white/70">{item.year}</span>
                  </div>
                </div>
              </div>

              {/* Left/Right: Card */}
              <div className="md:w-1/2 mt-2 md:mt-0">
                <ClickSpark className="w-full h-full">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_50px_-12px_rgba(0,0,0,0.7)] cursor-pointer">
                    {/* Glow on hover */}
                    <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-teal-500/10 to-blue-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />

                    <div className="relative">
                      <h3 className="text-white font-semibold text-base md:text-lg leading-tight">{item.institution}</h3>
                      <p className="text-white/80 text-sm md:text-[15px] mt-0.5">{item.degree}</p>
                      <p className="text-white/65 text-sm md:text-[15px] leading-6 mt-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ClickSpark>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}