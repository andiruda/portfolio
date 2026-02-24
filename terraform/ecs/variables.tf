variable "aws_region" {
  description = "AWS region for deployment"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Project/application name"
  type        = string
  default     = "andiruda-portfolio"
}

variable "domain_name" {
  description = "Domain for the portfolio (e.g. andiruda.com)"
  type        = string
  default     = "andiruda.com"
}

variable "acm_certificate_arn" {
  description = "ARN of the ACM certificate for the domain (must be in us-east-1 for ALB)"
  type        = string
}

variable "route53_zone_id" {
  description = "Route 53 hosted zone ID for the domain. If not set, will look up by domain_name."
  type        = string
  default     = null
}

variable "create_root_record" {
  description = "Create A record for root domain. Set to false if you already have an existing record."
  type        = bool
  default     = true
}
