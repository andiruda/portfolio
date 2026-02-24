"use client";

import { motion } from "framer-motion";

const projects = [
  { title: "Multi-Region AWS Infrastructure", description: "Terraform modules for production-grade AWS architecture with VPC, EKS, RDS, and cross-region failover. Includes CI/CD pipeline for infrastructure deployment.", tags: ["Terraform", "AWS", "EKS", "GitHub Actions"], github: "#" },
  { title: "Kubernetes GitOps Platform", description: "ArgoCD-driven Kubernetes deployment with Helm charts. Automated sync, drift detection, and multi-environment support (dev/staging/prod).", tags: ["Kubernetes", "ArgoCD", "Helm", "GitOps"], github: "#" },
  { title: "CI/CD Pipeline Library", description: "Reusable GitHub Actions workflows for build, test, and deploy. Supports Docker, Terraform, and serverless deployments with security scanning.", tags: ["GitHub Actions", "Docker", "Security"], github: "#" },
  { title: "Observability Stack", description: "Prometheus + Grafana + Loki monitoring stack deployed via Terraform. Custom dashboards for infrastructure and application metrics.", tags: ["Prometheus", "Grafana", "Terraform"], github: "#" },
  { title: "Serverless API Infrastructure", description: "AWS Lambda + API Gateway + DynamoDB architecture with Terraform. Auto-scaling, cost-optimized, with IaC for complete reproducibility.", tags: ["AWS Lambda", "Terraform", "Serverless"], github: "#" },
  { title: "This Portfolio", description: "Next.js portfolio with Vercel deploy and GitHub Actions CI. Built to showcase my work—and to practice what I preach about modern deployment.", tags: ["Next.js", "Vercel", "GitHub Actions"], github: "#" },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-amber-400/90 text-sm font-medium tracking-widest uppercase mb-2">
            Projects
          </h2>
          <h3 className="text-3xl font-bold text-[#e6edf3] sm:text-4xl">
            Things I&apos;ve built
          </h3>
          <p className="mt-4 max-w-2xl text-[#8b949e]">
            Infrastructure and DevOps projects. Add your real work and links here.
          </p>
        </motion.div>
        <motion.div 
          className="mt-12 grid gap-6 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={card}
              className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6"
              whileHover={{ 
                borderColor: "rgba(245, 158, 11, 0.3)", 
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                y: -6,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-lg font-semibold text-[#e6edf3] group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h4>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8b949e] hover:text-amber-400 transition-colors shrink-0"
                  aria-label="GitHub"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <p className="mt-3 text-sm text-[#8b949e] leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-amber-400/80">#{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
