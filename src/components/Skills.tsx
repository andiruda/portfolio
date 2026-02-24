"use client";

import { motion } from "framer-motion";

const focusAreas = [
  { title: "Platform Engineering", items: ["500+ microservice ecosystems", "Multi-tenant SaaS", "Event-driven architecture"] },
  { title: "Distributed Systems", items: ["Lambda", "SNS/SQS", "Step Functions", "Reliability engineering"] },
  { title: "Fintech Infrastructure", items: ["Stripe", "Payrix", "Payment orchestration", "Compliance"] },
  { title: "Cloud & Infrastructure", items: ["AWS Serverless", "CloudFormation", "CDK", "Cost optimization"] },
  { title: "Operational Excellence", items: ["CI/CD ownership", "SOC2", "Infrastructure automation"] },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-[#e2e8f0] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 
          className="text-xs font-medium tracking-widest uppercase text-[#1e40af] mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Strategic Focus Areas
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              className="border border-[#e2e8f0] bg-white p-6 shadow-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <h4 className="font-semibold text-[#0f172a] mb-3 text-sm">
                {area.title}
              </h4>
              <div className="space-y-1">
                {area.items.map((item) => (
                  <div key={item} className="text-sm text-[#64748b]">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
