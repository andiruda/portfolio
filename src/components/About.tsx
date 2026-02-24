"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-amber-400/90 text-sm font-medium tracking-widest uppercase mb-2">
            About
          </h2>
          <h3 className="text-3xl font-bold text-[#e6edf3] sm:text-4xl">
            A bit about me
          </h3>
        </motion.div>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <motion.div 
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Image
              src="/andi.png"
              alt="Andi Ruda"
              width={280}
              height={280}
              className="rounded-2xl object-cover ring-1 ring-white/10 w-full max-w-[280px] aspect-square shadow-2xl shadow-black/50"
            />
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#8b949e] leading-relaxed text-lg">
              I&apos;m Andi—an infrastructure engineer who gets excited about turning 
              complex cloud setups into reliable, repeatable code. I specialize in 
              Infrastructure as Code (IaC) and love helping teams ship faster without 
              the chaos.
            </p>
            <p className="text-[#8b949e] leading-relaxed">
              From multi-region AWS architectures to GitOps-driven Kubernetes deployments, 
              I&apos;ve built systems that scale. I care about security, cost, and making 
              infrastructure feel like a product—not a fire drill.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Cloud & IaC", "Terraform", "Kubernetes", "CI/CD", "Cost optimization"].map((tag, i) => (
                <motion.span
                  key={tag}
                  className="rounded-full bg-white/5 px-4 py-1.5 text-sm text-[#8b949e] border border-white/5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  whileHover={{ 
                    borderColor: "rgba(245, 158, 11, 0.3)", 
                    color: "#e6edf3",
                    scale: 1.05 
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
