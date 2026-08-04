export const impactStats = [
  { value: "15+", label: "years building and leading software" },
  { value: "500+", label: "microservices in the platform I help guide" },
  { value: "4", label: "engineers on my current team" },
  { value: "10", label: "tenants migrated across payment providers" },
];

export const caseStudies = [
  {
    eyebrow: "Embedded analytics",
    number: "01",
    title: "Turning an integration into a multi-tenant product capability",
    summary:
      "I led the architecture and hands-on delivery of a secure Omni BI platform designed for a platform-wide paid add-on—not a one-off dashboard embed.",
    challenge:
      "Product teams needed flexible analytics without weakening tenant isolation or granting broad builder and AI access.",
    approach: [
      "Streamed data from hundreds of DynamoDB tables into a relational analytics layer",
      "Created user, tenant, and application-level configuration patterns",
      "Separated viewer, builder, and AI capabilities with server-enforced authorization",
      "Established reusable integration patterns across services and Angular applications",
    ],
    outcome:
      "A governed analytics foundation ready to scale across products while keeping elevated capabilities explicit and auditable.",
    tags: ["Omni BI", "AWS", "Multi-tenant SaaS", "Angular", "Platform strategy"],
  },
  {
    eyebrow: "Fintech migration",
    number: "02",
    title: "Making a high-risk token migration previewable, resumable, and safe",
    summary:
      "I designed and automated a cross-system Stripe and Payrix migration that moved thousands of payment tokens across 10 tenants with effectively zero customer-visible downtime.",
    challenge:
      "Fragmented customer mappings and manual reconciliation created meaningful payment, data-integrity, and operational risk.",
    approach: [
      "Built preview-first plans, backups, reconciliation, monitoring, and resumable execution",
      "Used Step Functions to orchestrate phased workflows and expose progress",
      "Added stale-write protection and human review for ambiguous customer matches",
      "Enforced consistency between approved customer mappings and token updates",
    ],
    outcome:
      "A controlled migration system that replaced fragile manual work with traceable decisions and explicit safety gates.",
    tags: ["Stripe", "Payrix", "Step Functions", "Reconciliation", "Risk reduction"],
  },
  {
    eyebrow: "Platform reliability",
    number: "03",
    title: "Modernizing shared AWS foundations without forcing service rewrites",
    summary:
      "I led the move from AWS SDK v2 to v3 behind a shared internal layer, protecting consuming services while improving the platform’s failure behavior.",
    challenge:
      "A widely shared dependency had inconsistent retry and error-handling behavior across a large distributed system.",
    approach: [
      "Designed a compatible wrapper architecture for incremental adoption",
      "Standardized exponential backoff, throttling behavior, and error handling",
      "Coordinated rollout across teams and environments",
      "Preserved downstream contracts to reduce migration risk",
    ],
    outcome:
      "A more maintainable shared foundation with predictable behavior under transient AWS failures and rate limits.",
    tags: ["AWS SDK v3", "Node.js", "Distributed systems", "Reliability", "Modernization"],
  },
];

export const experience = [
  {
    company: "Rhythm Software",
    role: "Engineering Manager",
    dates: "2025 — Present",
    description:
      "Lead a four-engineer team across delivery, coaching, performance, technical direction, and cross-functional planning in a 500+ microservice AWS SaaS environment.",
  },
  {
    company: "Rhythm Software",
    role: "Senior Software Engineer",
    dates: "2021 — 2025",
    description:
      "Designed and delivered platform applications, APIs, and reusable TypeScript libraries across Angular, Node.js, and AWS.",
  },
  {
    company: "BBVA",
    role: "Senior Software Engineer / Technical Lead",
    dates: "2019 — 2021",
    description:
      "Led enterprise initiatives from planning through delivery, including infrastructure automation, high-volume data pipelines, and complex production support.",
  },
  {
    company: "Dealership Performance CRM",
    role: "Director of Development",
    dates: "2015 — 2019",
    description:
      "Led an organization of up to 10 across engineering, QA, and product while owning roadmap, architecture, delivery, hiring, and budget decisions.",
  },
  {
    company: "Dealer Spike",
    role: "Team Lead",
    dates: "2011 — 2015",
    description:
      "Managed a senior support team and coordinated cross-functional technical work across engineering, launch, SEO, and client operations.",
  },
];

export const focusAreas = [
  {
    title: "People & delivery",
    text: "Coaching, hiring, performance, roadmap sequencing, stakeholder alignment, and teams that can own outcomes—not just tickets.",
    signal: "Leadership",
  },
  {
    title: "Platforms at scale",
    text: "Multi-tenant SaaS, event-driven systems, shared foundations, API design, and architecture that stays operable as complexity grows.",
    signal: "Systems",
  },
  {
    title: "Business-critical change",
    text: "Payments, migrations, embedded analytics, compliance-sensitive workflows, and deliberate rollouts where failure has real consequences.",
    signal: "Execution",
  },
  {
    title: "Cloud operations",
    text: "AWS serverless architecture, Infrastructure as Code, CI/CD, observability, reliability, and cost-aware technical decisions.",
    signal: "Operations",
  },
];

export const ventures = [
  {
    name: "Alottle",
    category: "Consumer AI · Mobile",
    description:
      "An AI kitchen companion that turns what is already on hand into practical recipes, guided cooking, and a calmer household inventory.",
    href: "https://alottle.rudaworks.com",
    color: "lime",
  },
  {
    name: "Long Rest",
    category: "Generative AI · Games",
    description:
      "A persistent AI game master and shared campaign home designed to remember characters, consequences, places, and the moments between sessions.",
    href: "https://rudaworks.com/ventures/long-rest",
    color: "violet",
  },
  {
    name: "CivicPort",
    category: "GovTech · Enterprise",
    description:
      "A configurable municipal platform that gives residents one understandable front door and staff clearer workflows behind it.",
    href: "https://rudaworks.com/ventures/civicport",
    color: "coral",
  },
  {
    name: "Time Tales",
    category: "EdTech · Generative AI",
    description:
      "A full-stack AI storytelling product with branching narratives, cited generation, image and audio workflows, family roles, billing, and release operations.",
    href: "https://timetales.ai",
    color: "blue",
  },
];
