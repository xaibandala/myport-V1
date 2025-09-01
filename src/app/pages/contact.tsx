"use client";
import SplitText from "../components/SplitText";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div id="contact-section" className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      <div className="relative z-10 flex flex-col items-center px-4 text-center pt-24 md:pt-28 pb-16 md:pb-20">
        <div>
          <SplitText
            text="Get In Touch"
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            delay={120}
            duration={1.25}
            ease="power2.out"
            splitType="chars"
            from={{ opacity: 0, y: 24 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            useScrollTrigger={false}
          />
        </div>
        {/* Content grid */}
        <div className="mx-auto w-full max-w-6xl text-left grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-10 md:mt-16">
          {/* Left: Contact information */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 shadow-[0_8px_30px_rgba(255,255,255,0.05)] backdrop-blur-sm transition-colors hover:border-white/20">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white/90">Contact Information</h2>
                <div className="mt-4 flex items-center gap-3 text-white/80">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-white/10">📧</span>
                  <a href="mailto:xaiglennbandala@gmail.com" className="hover:text-white transition-colors">
                    xaiglennbandala@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white/90">Connect with Me</h2>
                <div className="mt-4 flex items-center gap-5 text-white">
                  <motion.a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-white/5 to-white/[0.03] hover:from-cyan-500/20 hover:to-cyan-600/20 ring-1 ring-white/10 hover:ring-cyan-500/40 transition-all duration-300 overflow-hidden"
                    aria-label="GitHub"
                    title="GitHub"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-600/0 group-hover:from-cyan-500/20 group-hover:to-cyan-600/20 transition-all duration-300"></div>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.486 2 12.02c0 4.427 2.865 8.18 6.839 9.504.5.094.682-.217.682-.483 0-.238-.009-.868-.014-1.704-2.782.605-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.949 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.851.004 1.707.115 2.507.337 1.909-1.295 2.748-1.026 2.748-1.026.545 1.378.202 2.397.1 2.65.64.7 1.027 1.595 1.027 2.688 0 3.846-2.339 4.694-4.566 4.943.359.31.679.92.679 1.855 0 1.339-.012 2.419-.012 2.75 0 .269.18.58.688.481A10.02 10.02 0 0 0 22 12.02C22 6.486 17.523 2 12 2Z" clipRule="evenodd"/></svg>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-white/5 to-white/[0.03] hover:from-blue-500/20 hover:to-blue-600/20 ring-1 ring-white/10 hover:ring-blue-500/40 transition-all duration-300 overflow-hidden"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/20 group-hover:to-blue-600/20 transition-all duration-300"></div>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.83v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.67c0-1.59-.03-3.63-2.21-3.63-2.22 0-2.56 1.73-2.56 3.52V23h-4V8z"/></svg>
                  </motion.a>
                  <motion.a
                    href="https://medium.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-white/5 to-white/[0.03] hover:from-green-500/20 hover:to-green-600/20 ring-1 ring-white/10 hover:ring-green-500/40 transition-all duration-300 overflow-hidden"
                    aria-label="Medium"
                    title="Medium"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-600/0 group-hover:from-green-500/20 group-hover:to-green-600/20 transition-all duration-300"></div>
                    <svg viewBox="0 0 1043.63 592.71" fill="currentColor" className="h-5 w-5"><path d="M588.67 296.35c0 163.7-131.54 296.35-293.84 296.35S1 460.05 1 296.35 132.54 0 294.83 0s293.84 132.64 293.84 296.35ZM712.02 296.35c0 154.45-65.76 279.73-146.86 279.73S418.3 450.8 418.3 296.35 484.06 16.62 565.16 16.62s146.86 125.28 146.86 279.73Zm329.61 0c0 143.14-29.43 259.13-65.73 259.13s-65.73-116-65.73-259.13S939.61 37.22 975.9 37.22s65.73 116 65.73 259.13Z"/></svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Contact form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 shadow-[0_8px_30px_rgba(255,255,255,0.05)] backdrop-blur-sm transition-colors hover:border-white/20">
            <h2 className="text-xl md:text-2xl font-extrabold text-white/90">Send a Message</h2>
            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-1" htmlFor="name">Name</label>
                <div className="relative">
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 shadow-sm"
                    placeholder="Your name"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1" htmlFor="email">Email</label>
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 shadow-sm"
                    placeholder="your@email.com"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1" htmlFor="subject">Subject</label>
                <div className="relative">
                  <input
                    id="subject"
                    type="text"
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 shadow-sm"
                    placeholder="How can I help?"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1" htmlFor="message">Message</label>
                <div className="relative">
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 shadow-sm resize-y"
                    placeholder="Tell me a bit about your project..."
                  />
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="pt-2">
                <motion.button
                  type="submit"
                  className="group relative w-full md:w-auto inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 active:scale-[0.99] transition-all px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 overflow-hidden"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center">
                    <span className="mr-2">💬</span>
                    <span>Send Message</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-300/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
