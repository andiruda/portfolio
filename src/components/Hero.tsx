"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { impactStats } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner shell">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="eyebrow">
            <span className="status-dot" /> Detroit · Open to senior leadership opportunities
          </p>
          <h1>
            I turn complex platforms into <em>durable products.</em>
          </h1>
          <p className="hero__lede">
            I’m Andi Ruda—an engineering leader and technical player-coach building
            business-critical SaaS, payments, analytics, and cloud platforms.
          </p>
          <div className="hero__actions">
            <a href="#impact" className="button button--primary">
              See the work <span aria-hidden="true">↓</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button button--ghost"
            >
              Open résumé <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="hero__role">
            Engineering Manager at Rhythm Software · Founder of Ruda Works
          </p>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
        >
          <div className="hero__halo" />
          <div className="hero__portrait-frame">
            <Image
              src="/andi-cutout.webp"
              alt="Andi Ruda"
              width={527}
              height={1100}
              className="hero__portrait"
              priority
              sizes="(max-width: 800px) 72vw, 420px"
            />
          </div>
          <div className="hero__annotation hero__annotation--top">
            <span>Currently leading</span>
            <strong>4 engineers</strong>
          </div>
          <div className="hero__annotation hero__annotation--bottom">
            <span>Platform scale</span>
            <strong>500+ services</strong>
          </div>
        </motion.div>
      </div>

      <div className="hero__stats shell" aria-label="Career highlights">
        {impactStats.map((stat) => (
          <div key={stat.label} className="stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
