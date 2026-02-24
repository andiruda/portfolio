"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Multi-Tenant Platform Scale & Cost Optimization",
    context: "Rhythm Software — Platform Engineering",
    challenge: "Legacy architecture was scaling linearly with tenant count, driving unsustainable infrastructure costs.",
    approach: "Led a cross-team initiative to refactor event-driven patterns, implement tenant-aware caching, and consolidate shared services.",
    metrics: [
      { value: "~40%", label: "Infrastructure cost reduction" },
      { value: "99.7%", label: "Uptime over 12 months" },
      { value: "3x", label: "Throughput improvement" },
    ],
  },
  {
    title: "Fintech Payment Reliability & Compliance",
    context: "Rhythm Software — Payment Platform",
    challenge: "Payment orchestration across Stripe and Payrix required higher reliability and audit readiness for SOC2.",
    approach: "Designed and implemented idempotent transaction flows, retry frameworks, and reconciliation pipelines with full audit trails.",
    metrics: [
      { value: "99.99%", label: "Payment success rate" },
      { value: "<2min", label: "Reconciliation latency" },
      { value: "100%", label: "Audit trail coverage" },
    ],
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
              <p className="text-xs font-medium tracking-widest uppercase text-[#1e40af] mb-2">
                {study.context}
              </p>
              <h3 className="text-lg font-semibold text-[#0f172a] mb-4">
                {study.title}
              </h3>
              <p className="text-sm text-[#64748b] mb-2">
                <span className="font-medium text-[#0f172a]">Challenge:</span> {study.challenge}
              </p>
              <p className="text-sm text-[#64748b] mb-6">
                <span className="font-medium text-[#0f172a]">Approach:</span> {study.approach}
              </p>
              <div className="flex flex-wrap gap-8 pt-4 border-t border-[#e2e8f0]">
                {study.metrics.map((m) => (
                  <div key={m.label}>
                    <span className="block text-2xl font-semibold text-[#1e40af]">{m.value}</span>
                    <span className="text-sm text-[#64748b]">{m.label}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
