# Terraform IaC for Portfolio

Example Infrastructure as Code demonstrating deployment patterns. Use these as portfolio pieces or adapt for your own infrastructure.

## Contents

- `vercel/` - Vercel project configuration (Terraform provider)
- `github/` - GitHub repository and Actions setup

## Prerequisites

- Terraform >= 1.0
- Vercel account & API token
- GitHub personal access token (for repo management)

## Usage

```bash
cd terraform/vercel
terraform init
terraform plan
terraform apply
```

## Portfolio Value

These configs demonstrate:
- Terraform module structure
- Provider configuration
- Variable management
- Output values for CI/CD integration
