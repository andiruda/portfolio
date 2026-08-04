"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/data/portfolio";

export default function CaseStudies() {
  return (
    <section id="impact" className="section case-studies">
      <div className="shell">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Selected impact</p>
            <h2>Proof, not adjectives.</h2>
          </div>
          <p>
            Three examples of how I approach platform work: understand the real risk,
            create leverage, and leave the system stronger than I found it.
          </p>
        </div>

        <div className="case-list">
          {caseStudies.map((study) => (
            <motion.article
              key={study.number}
              className="case"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
            >
              <div className="case__rail">
                <span>{study.number}</span>
                <div />
                <p>{study.eyebrow}</p>
              </div>
              <div className="case__body">
                <h3>{study.title}</h3>
                <p className="case__summary">{study.summary}</p>
                <div className="case__details">
                  <div>
                    <p className="case__label">The challenge</p>
                    <p>{study.challenge}</p>
                    <p className="case__label case__label--outcome">The outcome</p>
                    <p>{study.outcome}</p>
                  </div>
                  <div>
                    <p className="case__label">The approach</p>
                    <ul>
                      {study.approach.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="tag-row">
                  {study.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
