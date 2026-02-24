"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer 
      className="border-t border-white/5 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-[#8b949e]">
            © {year} Andi Ruda
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/andiruda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b949e] hover:text-amber-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-[#8b949e] hover:text-amber-400 transition-colors"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
