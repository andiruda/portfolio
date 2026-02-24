"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16">
      <div className="relative mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <motion.div 
          className="flex-shrink-0 flex items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/andi2.png"
            alt="Andi Ruda"
            width={240}
            height={400}
            className="object-contain object-bottom w-[200px] h-[320px] sm:w-[240px] sm:h-[400px]"
            priority
          />
        </motion.div>
        
        <motion.div 
          className="text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-[#1e40af] text-xs font-medium tracking-widest uppercase mb-4">
            Senior Engineering Leader | Platform & Distributed Systems
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl">
            Engineering Leader Building Scalable Cloud Platforms
          </h1>
          <p className="mt-6 max-w-xl text-[#64748b] leading-relaxed">
            Senior Engineering Manager specializing in AWS serverless architecture, 
            distributed systems, and multi-tenant SaaS platforms at scale.
          </p>
          <p className="mt-3 max-w-xl text-[#64748b] leading-relaxed">
            I build and scale high-performing engineering teams that own reliable, 
            secure, and financially optimized cloud-native systems.
          </p>
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="inline-block bg-[#1e40af] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1e3a8a]"
            >
              View Leadership Experience
            </a>
            <a
              href="https://www.linkedin.com/in/andiruda/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#e2e8f0] px-5 py-2.5 text-sm font-medium text-[#0f172a] transition-colors hover:border-[#1e40af] hover:text-[#1e40af]"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
