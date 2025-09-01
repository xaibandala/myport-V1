"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

const SplitText = dynamic(() => import('./components/SplitText'), {
  ssr: false
});

// Test div to check if Tailwind is working
const TailwindTest = () => (
  <div className="p-4 bg-blue-500 text-white rounded-lg shadow-lg">
    Tailwind is working! 🎉
  </div>
);
import Image from "next/image";
import ResponsiveNav from "./components/ResponsiveNav";
import LogoLoop from "./components/LogoLoop";
import Threads from "./components/Threads";
import ProjectsPage from "./pages/projects";
import ContactsPage from "./pages/contact";
import CertificatesPage from "./pages/certificates";
import AboutPage from "./pages/about";
import EducationPage from "./pages/education";

const techStack = [
  { name: "TypeScript", desc: "Typed JavaScript at scale", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Next.js", desc: "React framework for production", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "React", desc: "Library for building user interfaces", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Tailwind CSS", desc: "Utility-first CSS framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Framer Motion", desc: "Production-ready motion library", icon: "https://www.framer.com/m/framer/logo.svg" },
  { name: "Node.js", desc: "JavaScript runtime built on Chrome's V8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", desc: "Advanced open source relational database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Prisma", desc: "Next-generation Node.js and TypeScript ORM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  { name: "MongoDB", desc: "Document-based NoSQL database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Express", desc: "Fast, unopinionated web framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "Docker", desc: "Containerization platform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Git", desc: "Version control system", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
];

// Education data will be added here

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Close mobile menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle smooth scrolling to sections
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for fixed header
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div 
      className="relative isolate w-full min-h-0 bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 text-white font-bold text-xl">
              XB
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Home
                </a>
                <a 
                  href="#about-section" 
                  onClick={(e) => scrollToSection(e, 'about-section')}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  About
                </a>
                <a 
                  href="#projects-section" 
                  onClick={(e) => scrollToSection(e, 'projects-section')}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Projects
                </a>
                <a 
                  href="#certificates-section" 
                  onClick={(e) => scrollToSection(e, 'certificates-section')}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Certificates
                </a>
                <a 
                  href="#contact-section" 
                  onClick={(e) => scrollToSection(e, 'contact-section')}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Contact
                </a>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                type="button" 
                className="text-gray-300 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                closeMenu();
              }}
            >
              Home
            </a>
            <a 
              href="#about-section" 
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={(e) => {
                scrollToSection(e, 'about-section');
                closeMenu();
              }}
            >
              About
            </a>
            <a 
              href="#projects-section" 
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={(e) => {
                scrollToSection(e, 'projects-section');
                closeMenu();
              }}
            >
              Projects
            </a>
            <a 
              href="#certificates-section" 
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={(e) => {
                scrollToSection(e, 'certificates-section');
                closeMenu();
              }}
            >
              Certificates
            </a>
            <a 
              href="#contact-section" 
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={(e) => {
                scrollToSection(e, 'contact-section');
                closeMenu();
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-20 pt-16">
          <div>
            {/* Hero section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
              {/* Optimized Threads with reduced work */}
              <div className="absolute inset-0 -z-10">
                <Threads 
                  amplitude={0.8} 
                  distance={0} 
                  enableMouseInteraction={false}
                />
              </div>
              
              <div className="relative z-10 flex flex-col items-center px-4 text-center">
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.3
                  }}
                >
                  Xai Bandala
                </motion.h1>
                <motion.p
                  className="mt-6 md:mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-white/70"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.6
                  }}
                >
                  Crafting performant, delightful web experiences with modern technologies.
                </motion.p>
              </div>
            </section>

            

            {/* Tech Stack section - Optimized */}
            <motion.section 
              className="relative z-10 w-full py-16 md:py-20 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="max-w-6xl xl:max-w-7xl mx-auto px-4">
                <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight text-white mb-12">Tech Stack</h2>
              </div>
              <div className="relative w-full">
                <div className="relative overflow-hidden">
                  <div className="py-4">
                    <motion.div
                      className="flex will-change-transform"
                      animate={{ 
                        x: ['0%', `-${100 / (techStack.length / 2)}%`] 
                      }}
                      transition={{
                        x: {
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: techStack.length * 3,
                          ease: "linear",
                        }
                      }}
                    >
                      {[...techStack, ...techStack].map((tech, index) => (
                        <div
                          key={`${tech.name}-${index}`}
                          className="flex-shrink-0 flex flex-col items-center gap-2 p-3 sm:p-4 w-24 sm:w-28 md:w-32"
                        >
                          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-transform duration-300 hover:scale-110">
                            <Image
                              src={tech.icon}
                              alt={tech.name}
                              width={48}
                              height={48}
                              className="w-full h-full object-contain"
                              loading="lazy"
                            />
                          </div>
                          <span className="text-xs sm:text-sm text-white/70 text-center whitespace-nowrap font-medium">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* About Me Section */}
            <AboutPage />

            {/* Education Section */}
            <EducationPage />

            {/* Projects Section */}
            <ProjectsPage />

            {/* Certificates Section */}
            <CertificatesPage />

            {/* Contact Section */}
            <ContactsPage />

          </div>
      </div>
    </motion.div>
  );
}

