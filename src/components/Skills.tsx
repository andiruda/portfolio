"use client";

import { motion } from "framer-motion";
import { focusAreas } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className="section section--soft" aria-labelledby="focus-title">
      <div className="shell">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">How I operate</p>
            <h2 id="focus-title">Built for the messy middle.</h2>
          </div>
          <p>
            I bridge strategy and implementation: translating high-stakes business needs
            into systems teams can ship, operate, and improve.
          </p>
        </div>

        <div className="focus-grid">
          {focusAreas.map((area, index) => (
            <motion.article
              key={area.title}
              className="focus-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.05 }}
            >
              <p className="focus-card__signal">{area.signal}</p>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <span className="focus-card__index">0{index + 1}</span>
            </motion.article>
          ))}
        </div>

        <div className="toolkit" aria-label="Technical toolkit">
          <span>AWS Lambda</span>
          <span>DynamoDB</span>
          <span>SNS / SQS</span>
          <span>Step Functions</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>Angular</span>
          <span>React</span>
          <span>CloudFormation</span>
          <span>CDK</span>
          <span>Stripe</span>
          <span>Payrix</span>
        </div>
      </div>
    </section>
  );
}
