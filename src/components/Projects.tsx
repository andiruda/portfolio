"use client";

import { motion } from "framer-motion";

const projects = [
  { 
    title: "Multi-Tenant SaaS Platform Architecture", 
    description: "Led engineering across a 500+ microservice architecture supporting multiple tenant environments. Secure isolation, event-driven communication patterns, and operational stability in SOC2-compliant environments. Focus on scale, reliability, and system design.", 
    tags: ["AWS", "Microservices", "Multi-tenant", "SOC2"], 
    url: "https://www.rhythmsoftware.com" 
  },
  { 
    title: "Fintech Payment Integration & Token Migration", 
    description: "Designed and led fintech integrations including token migrations, payment orchestration, and reconciliation across Stripe and Payrix systems. Risk mitigation, transaction orchestration, and compliance-aware infrastructure.", 
    tags: ["Stripe", "Payrix", "Fintech", "Compliance"], 
    url: null 
  },
  { 
    title: "Distributed Systems Optimization & Retry Framework Design", 
    description: "Refactored AWS SDK usage patterns, improved retry strategies, optimized concurrency, and enhanced reliability across large-scale Lambda-based systems. Reliability engineering and concurrency control.", 
    tags: ["Lambda", "AWS SDK", "Reliability Engineering"], 
    url: null 
  },
  { 
    title: "TimeTales — AI-Driven Educational Platform", 
    description: "Founder and Technical Architect of an AI-driven educational platform built on AWS serverless infrastructure. Designed a scalable story-generation engine leveraging generative AI, event-driven backend systems, and structured user-progress orchestration. Demonstrates expertise in AI orchestration within distributed systems, scalable serverless backend architecture, multi-user data modeling and state management, and performance-aware cloud-native design.", 
    tags: ["AWS Serverless", "Generative AI", "Event-Driven"], 
    url: "https://timetales.ai" 
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-t border-[#e2e8f0] py-24 bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-xs font-medium tracking-widest uppercase text-[#1e40af] mb-2">
            Selected Platform & Architecture Work
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="border border-[#e2e8f0] bg-white p-6 shadow-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-base font-semibold text-[#0f172a]">
                  {project.title}
                </h4>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#64748b] hover:text-[#1e40af] transition-colors shrink-0"
                    aria-label={`Visit ${project.title}`}
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
              <p className="mt-3 text-sm text-[#64748b] leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded border border-[#e2e8f0] bg-[#fafafa] px-2.5 py-0.5 text-xs text-[#64748b]">
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
