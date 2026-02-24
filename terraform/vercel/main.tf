# Vercel Project - IaC Portfolio Deployment
# Demonstrates Terraform-managed Vercel infrastructure
# Add VERCEL_API_TOKEN to your environment or use a .tfvars file

terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 1.0"
    }
  }
}

variable "vercel_team_id" {
  description = "Vercel team ID (optional for personal accounts)"
  type        = string
  default     = null
}

variable "project_name" {
  description = "Name of the Vercel project"
  type        = string
  default     = "andiruda-portfolio"
}

variable "framework" {
  description = "Frontend framework"
  type        = string
  default     = "nextjs"
}

resource "vercel_project" "portfolio" {
  name      = var.project_name
  framework = var.framework

  git_repository {
    type = "github"
    repo = "your-username/andiruda.com-v2" # Update with your GitHub repo
  }

  build_command    = "npm run build"
  install_command  = "npm install"

  # Environment variables (add sensitive ones in Vercel dashboard)
  # environment {
  #   key    = "NODE_ENV"
  #   value  = "production"
  #   target = ["production"]
  # }
}

output "project_id" {
  value       = vercel_project.portfolio.id
  description = "Vercel project ID for CI/CD"
}

output "project_url" {
  value       = "https://${vercel_project.portfolio.name}.vercel.app"
  description = "Deployed portfolio URL"
}
