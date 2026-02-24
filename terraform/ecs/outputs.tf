output "ecr_repository_url" {
  value       = aws_ecr_repository.portfolio.repository_url
  description = "ECR repository URL for pushing Docker images"
}

output "alb_dns_name" {
  value       = aws_lb.main.dns_name
  description = "ALB DNS name"
}

output "portfolio_url" {
  value       = "https://${var.domain_name}"
  description = "Your portfolio URL (HTTPS)"
}
