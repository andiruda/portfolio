# IaC Portfolio

A professional Infrastructure as Code portfolio site built with Next.js. Designed to showcase DevOps, cloud, and IaC expertise for career advancement.

## Features

- **Modern stack**: Next.js 16, TypeScript, Tailwind CSS
- **DevOps aesthetic**: Terminal-inspired design with GitHub-style dark theme
- **Sections**: Hero, About, Skills, Projects, Contact
- **Terraform examples**: IaC configs included in `/terraform`
- **CI/CD**: GitHub Actions (CI on every push/PR; AWS deploy on `main` when configured)

## Deployment

### Option 1: AWS static site — S3 + CloudFront + Route 53 + ACM (low cost)

Next.js builds as a **static export** (`./out`). Terraform provisions a **private S3 bucket** (CloudFront **OAC**), **ACM** in `us-east-1`, **CloudFront** (`PriceClass_100` by default), and **Route 53** aliases for apex + `www`.

```bash
cd terraform/static-site
cp terraform.tfvars.example terraform.tfvars
# Edit domain_name / region if needed, then:
terraform init
terraform apply
```

Copy Terraform outputs into GitHub **Actions** secrets:

- `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`
- `S3_STATIC_BUCKET` ← output `s3_bucket_name`
- `CLOUDFRONT_DISTRIBUTION_ID` ← output `cloudfront_distribution_id`
- Optional: `AWS_REGION` (default `us-east-1`)

Pushes to `main` run [`.github/workflows/deploy-aws-static.yml`](.github/workflows/deploy-aws-static.yml) (`s3 sync` + CloudFront invalidation).

Details and a minimal IAM policy for deploy credentials: [terraform/static-site/README.md](terraform/static-site/README.md).

If apex/`www` still resolve to the old ALB, run **`terraform destroy`** in `terraform/ecs` (or remove those Route 53 records) **before** applying `static-site`, so Terraform can create the new CloudFront aliases without conflicts. Then destroy the ECS/ALB stack so you stop paying for Fargate, the ALB, and related public IPv4 usage.

### Option 2: Vercel (One-Click)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Click **Deploy** — done

Vercel auto-deploys on every push to `main`.

### Option 3: AWS ECS + ALB (legacy, higher cost)

The `terraform/ecs` stack is **not** updated for the static export workflow (this app no longer uses `output: "standalone"`). Keep it only if you intentionally maintain a separate container deployment. See [terraform/ecs/README.md](terraform/ecs/README.md).

### Option 4: Terraform-Managed Vercel

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
│   ├── static-site/  # S3 + CloudFront + ACM + Route 53
│   ├── ecs/          # Legacy ECS/Fargate + ALB (optional)
│   └── vercel/       # Vercel Terraform config
├── .github/workflows/ # CI pipeline
└── vercel.json       # Vercel config
```

## License

MIT
