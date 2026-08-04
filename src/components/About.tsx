"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

export default function About() {
  return (
    <section id="experience" className="section section--ink">
      <div className="shell">
        <div className="section-heading section-heading--light">
          <p className="eyebrow">Leadership built in the work</p>
          <h2>Executive judgment. Engineering depth. Product instinct.</h2>
          <p>
            My best work happens where the architecture is consequential, the path is
            ambiguous, and the team needs both clear direction and a leader willing to
            get close to the implementation.
          </p>
        </div>

        <div className="experience-grid">
          <motion.div
            className="leadership-note"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="quote-mark" aria-hidden="true">“</p>
            <blockquote>
              I build teams that can reason about the whole system—customer value,
              operational risk, delivery pressure, and the code that connects them.
            </blockquote>
            <div className="leadership-principles">
              <span>Make risk visible</span>
              <span>Design for ownership</span>
              <span>Protect the long game</span>
            </div>
          </motion.div>

          <div className="timeline" aria-label="Professional experience">
            {experience.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.role}`}
                className="timeline__item"
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.04 }}
              >
                <div className="timeline__marker" aria-hidden="true" />
                <p className="timeline__dates">{item.dates}</p>
                <h3>{item.role}</h3>
                <p className="timeline__company">{item.company}</p>
                <p className="timeline__description">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
