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
              href="/resume.pdf"
              download="Andi-Ruda-Resume.pdf"
              className="inline-block border border-[#e2e8f0] px-5 py-2.5 text-sm font-medium text-[#0f172a] transition-colors hover:border-[#1e40af] hover:text-[#1e40af]"
            >
              Request Resume
            </a>
            <a
              href="mailto:andiruda@gmail.com?subject=Schedule%20a%20Call"
              className="inline-block border border-[#e2e8f0] px-5 py-2.5 text-sm font-medium text-[#0f172a] transition-colors hover:border-[#1e40af] hover:text-[#1e40af]"
            >
              Schedule a Call
            </a>
            <a
              href="https://www.linkedin.com/in/andiruda/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#e2e8f0] px-5 py-2.5 text-sm font-medium text-[#0f172a] transition-colors hover:border-[#1e40af] hover:text-[#1e40af]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
