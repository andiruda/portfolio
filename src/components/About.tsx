"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="border-t border-[#e2e8f0] py-24 bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2 
          className="text-xs font-medium tracking-widest uppercase text-[#1e40af] mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Leadership & Platform Strategy
        </motion.h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <motion.div 
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src="/andi.png"
              alt="Andi Ruda"
              width={260}
              height={260}
              className="rounded-lg object-cover w-full max-w-[260px] aspect-square ring-1 ring-[#e2e8f0]"
            />
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="text-[#64748b] leading-relaxed">
              Andi Ruda is a Senior Engineering Leader specializing in large-scale AWS serverless 
              architecture and distributed systems. As Manager of Software Engineering at Rhythm 
              Software, he leads teams responsible for a 500+ microservice multi-tenant SaaS 
              ecosystem operating in event-driven cloud environments.
            </p>
            <p className="text-[#64748b] leading-relaxed">
              He architects and oversees infrastructure built on AWS Lambda, DynamoDB, SNS/SQS, 
              Step Functions, API Gateway, and Infrastructure as Code. His leadership spans 
              fintech integrations (Stripe, Payrix), CI/CD platform ownership, operational 
              reliability, and compliance-sensitive SaaS systems.
            </p>
            <p className="text-[#64748b] leading-relaxed">
              His focus is building engineering teams that deliver scalable systems with 
              long-term architectural integrity, cost discipline, and operational excellence.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {["Platform Engineering", "Distributed Systems", "Fintech Infrastructure", "Cloud Cost Optimization", "Infrastructure as Code", "Operational Excellence"].map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-[#e2e8f0] bg-white px-3 py-1 text-xs text-[#64748b]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
