"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Modernizing a Shared AWS SDK Layer Across a Distributed Microservice Ecosystem",
    subtitle: "Refactoring a shared AWS SDK layer to AWS SDK v3 while preserving backwards compatibility across many microservices and improving reliability under rate limits.",
    description: "Modernized a shared internal services proxy layer that wrapped AWS SDK v2 across a large, distributed microservice ecosystem. The existing implementation made it hard to reason about retries, error handling, and long-term maintainability as the platform scaled.\n\nI designed and led the refactor to AWS SDK v3 while ensuring downstream microservices did not need to be rewritten. This included introducing a cleaner wrapper architecture, standardizing retry behavior with exponential backoff, and tightening error handling patterns so services behaved consistently under partial failure or rate-limited conditions.\n\nThe migration was rolled out incrementally to avoid production disruption, with careful coordination across teams and environments.",
    bullets: [
      "Refactored shared AWS SDK layer from v2 to v3 without requiring changes in consuming services",
      "Standardized retry and error-handling patterns across many microservices",
      "Improved reliability under throttling and transient AWS service failures",
      "Reduced long-term maintenance burden and enabled better observability and future enhancements",
    ],
    tags: ["AWS", "Serverless", "Distributed Systems", "SDK Modernization", "Reliability"],
  },
  {
    title: "Leading a Cross-System Fintech Token Migration & Reconciliation Initiative",
    subtitle: "Orchestrated a payment token migration across Stripe and Payrix with automated reconciliation and zero customer-visible downtime.",
    description: "Led a mission-critical initiative to migrate payment tokens across integrated fintech providers (Stripe and Payrix) while preserving transactional integrity and avoiding customer impact.\n\nThe existing token landscape was fragmented and carried real risk: failed payments, inconsistent data across systems, and painful manual reconciliation. I worked across engineering and product stakeholders to design a migration plan, define phases, and ensure auditability and rollback were built in from day one.\n\nI helped shape and oversee the implementation of automated reconciliation tooling, event-driven processes to track token and payment state, and monitoring to surface edge cases early. Throughout the rollout, I coordinated teams, validated results, and ensured we kept customer-facing impact at effectively zero.",
    bullets: [
      "Successfully completed payment token migration across Stripe and Payrix with no customer-visible downtime",
      "Reduced manual reconciliation workload by introducing automated checks and reporting",
      "Increased confidence in payment system integrity and traceability",
      "Strengthened compliance posture around payment data handling and migrations",
    ],
    tags: ["Fintech", "Stripe", "Payrix", "Payments", "Data Migration", "Reconciliation"],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="border-t border-[#e2e8f0] py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-xs font-medium tracking-widest uppercase text-[#1e40af] mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Case Studies
        </motion.h2>
        <motion.p
          className="mt-2 text-[#64748b] max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Selected outcomes from platform and fintech leadership work.
        </motion.p>
        <div className="mt-12 space-y-12">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.title}
              className="border border-[#e2e8f0] bg-[#fafafa] p-8 shadow-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                {study.title}
              </h3>
              <p className="text-sm text-[#64748b] mb-4">
                {study.subtitle}
              </p>
              <div className="text-sm text-[#64748b] mb-6 space-y-3 whitespace-pre-line">
                {study.description.split("\n\n").map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
              <ul className="space-y-2 pt-4 border-t border-[#e2e8f0]">
                {study.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-sm text-[#64748b]">
                    <span className="text-[#1e40af] shrink-0">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span key={tag} className="rounded border border-[#e2e8f0] bg-white px-2.5 py-0.5 text-xs text-[#64748b]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
