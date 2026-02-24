"use client";

import { motion } from "framer-motion";

const skillCategories = [
  { title: "Infrastructure as Code", skills: ["Terraform", "Pulumi", "CloudFormation", "Ansible", "Terragrunt"] },
  { title: "Cloud Platforms", skills: ["AWS", "GCP", "Azure", "DigitalOcean", "Vercel"] },
  { title: "Containers & Orchestration", skills: ["Kubernetes", "Docker", "Helm", "EKS", "ECS"] },
  { title: "CI/CD & DevOps", skills: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD", "Flux"] },
  { title: "Observability", skills: ["Prometheus", "Grafana", "Datadog", "CloudWatch", "ELK"] },
  { title: "Scripting & Languages", skills: ["Python", "Bash", "Go", "TypeScript", "HCL"] },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-amber-400/90 text-sm font-medium tracking-widest uppercase mb-2">
            Skills
          </h2>
          <h3 className="text-3xl font-bold text-[#e6edf3] sm:text-4xl">
            What I work with
          </h3>
          <p className="mt-4 max-w-2xl text-[#8b949e]">
            Tools and technologies I use day to day.
          </p>
        </motion.div>
        <motion.div 
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6"
              whileHover={{ 
                borderColor: "rgba(245, 158, 11, 0.25)", 
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                y: -4,
                transition: { duration: 0.2 }
              }}
            >
              <h4 className="font-medium text-[#e6edf3] mb-4">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-white/5 px-3 py-1 text-sm text-[#8b949e]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
