"use client";

import { motion } from "framer-motion";
import { ventures } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="ventures" className="section ventures-section">
      <div className="shell">
        <div className="founder-intro">
          <div>
            <p className="eyebrow">Founder & product builder</p>
            <h2>I build outside the org chart, too.</h2>
          </div>
          <div>
            <p>
              Through <a href="https://rudaworks.com" target="_blank" rel="noopener noreferrer">Ruda Works</a>,
              I take products from an empty page to a working system—product thesis,
              interaction design, architecture, implementation, billing, and operations.
            </p>
            <a
              href="https://rudaworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Visit the venture studio <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="venture-grid">
          {ventures.map((venture, index) => (
            <motion.a
              key={venture.name}
              href={venture.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`venture-card venture-card--${venture.color}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.04 }}
            >
              <div className="venture-card__top">
                <p>{venture.category}</p>
                <span aria-hidden="true">↗</span>
              </div>
              <h3>{venture.name}</h3>
              <p>{venture.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
