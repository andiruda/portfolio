"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 500], [0, 80]);
  const photoScale = useTransform(scrollY, [0, 500], [1, 0.92]);
  const textOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="relative mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <motion.div 
          className="flex-shrink-0"
          style={{ y: photoY, scale: photoScale }}
        >
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div 
              className="absolute -inset-1 bg-gradient-to-r from-amber-400/30 to-emerald-400/30 rounded-full blur-xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <Image
              src="/andi.png"
              alt="Andi Ruda"
              width={220}
              height={220}
              className="relative rounded-full object-cover ring-2 ring-white/10 ring-offset-4 ring-offset-[#0d1117] w-[180px] h-[180px] sm:w-[220px] sm:h-[220px]"
              priority
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="text-center md:text-left"
          style={{ opacity: textOpacity }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.p 
            className="text-amber-400/90 text-sm font-medium tracking-widest uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Infrastructure Engineer
          </motion.p>
          <motion.h1 
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl [font-family:var(--font-display),system-ui,sans-serif]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-[#e6edf3]">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-emerald-400 bg-clip-text text-transparent animate-gradient">
              Andi Ruda
            </span>
          </motion.h1>
          <motion.p 
            className="mt-5 max-w-xl text-lg text-[#8b949e] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            I build cloud infrastructure that scales—Terraform, AWS, Kubernetes, and CI/CD pipelines. 
            Automating the boring stuff so teams can ship faster.
          </motion.p>
          <motion.div 
            className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="rounded-full bg-amber-500 px-6 py-3 text-sm font-medium text-[#0d1117]"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(245, 158, 11, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-[#e6edf3]"
              whileHover={{ borderColor: "rgba(245, 158, 11, 0.5)", color: "#f59e0b" }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
