"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerBg = useTransform(scrollYProgress, [0, 0.1], ["rgba(13, 17, 23, 0)", "rgba(13, 17, 23, 0.9)"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-xl"
        style={{ backgroundColor: headerBg }}
      >
        <motion.div 
          className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-emerald-500 origin-left"
          style={{ width: progressWidth }}
        />
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold text-[#e6edf3] hover:text-amber-400 transition-colors font-[family-name:var(--font-display)]">
            Andi Ruda
          </a>

          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#8b949e] transition-colors hover:text-[#e6edf3] relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-[#0d1117]"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(245, 158, 11, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              Resume
            </motion.a>
          </div>

          <button
            className="md:hidden p-2 text-[#8b949e] hover:text-[#e6edf3]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-white/5 bg-[#0d1117]/95 backdrop-blur-xl px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#8b949e] hover:text-[#e6edf3] py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-amber-500 px-4 py-2 text-center text-sm font-medium text-[#0d1117]"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </motion.header>
    </>
  );
}
