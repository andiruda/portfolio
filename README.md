# IaC Portfolio

A professional Infrastructure as Code portfolio site built with Next.js. Designed to showcase DevOps, cloud, and IaC expertise for career advancement.

## Features

- **Modern stack**: Next.js 16, TypeScript, Tailwind CSS
- **DevOps aesthetic**: Terminal-inspired design with GitHub-style dark theme
- **Sections**: Hero, About, Skills, Projects, Contact
- **Terraform examples**: IaC configs included in `/terraform`
- **CI/CD**: GitHub Actions for build validation

## Deployment

### Option 1: AWS ECS (IaC showcase)

Deploy to AWS with Terraform—great for demonstrating cloud/infra skills.

```bash
# 1. Provision infrastructure
cd terraform/ecs
terraform init
terraform apply

# 2. Add GitHub secrets (Settings → Secrets → Actions):
#    AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION,
#    ECR_REPOSITORY (andiruda-portfolio), ECS_CLUSTER, ECS_SERVICE

# 3. Push to main → auto-deploys via GitHub Actions
```

See [terraform/ecs/README.md](terraform/ecs/README.md) for details.

### Option 2: Vercel (One-Click)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Click **Deploy** — done

Vercel auto-deploys on every push to `main`.

### Option 3: Terraform-Managed Vercel

```bash
cd terraform/vercel
export VERCEL_API_TOKEN=your_token
terraform init && terraform apply
```

## Local Development

Requires Node.js 20+. Use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) if needed.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

1. **Personal info**: Edit `src/components/` — update About, Contact (email, LinkedIn, GitHub), Projects
2. **Resume**: Add `public/resume.pdf` — linked from header
3. **Projects**: Replace placeholder projects in `src/components/Projects.tsx` with your real work and GitHub links

## Project Structure

```
├── src/
│   ├── app/           # Next.js App Router
│   └── components/   # React components
├── terraform/         # IaC (portfolio pieces)
│   ├── ecs/          # AWS ECS deployment
│   └── vercel/       # Vercel Terraform config
├── .github/workflows/ # CI pipeline
└── vercel.json       # Vercel config
```

## License

MIT
