variable "aws_region" {
  description = "Region for S3 and most resources. ACM for CloudFront is always created in us-east-1."
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Short name for resource naming (e.g. andiruda-portfolio)"
  type        = string
  default     = "andiruda-portfolio"
}

variable "domain_name" {
  description = "Apex domain (e.g. andiruda.com). Also adds www.<domain> to the certificate and CloudFront aliases."
  type        = string
  default     = "andiruda.com"
}

variable "route53_zone_id" {
  description = "Route 53 hosted zone ID. If null, looks up a public zone matching domain_name."
  type        = string
  default     = null
}

variable "create_dns_records" {
  description = "Create ACM DNS validation records and A/AAAA alias records in Route 53. Set false if DNS is managed elsewhere (use outputs to wire records manually)."
  type        = bool
  default     = true
}

variable "create_apex_alias" {
  description = "Create A/AAAA alias for the apex domain to CloudFront."
  type        = bool
  default     = true
}

variable "create_www_alias" {
  description = "Create A/AAAA alias for www.<domain> to CloudFront."
  type        = bool
  default     = true
}

variable "s3_bucket_name" {
  description = "S3 bucket name (globally unique). If null, uses <sanitized-domain>-site-<account-id>."
  type        = string
  default     = null
}

variable "acm_certificate_arn" {
  description = "Optional. Existing ACM certificate ARN in us-east-1 covering apex and www. When set, Terraform will not create or validate a new certificate (use when DNS is outside Route 53)."
  type        = string
  default     = null
}

variable "cloudfront_price_class" {
  description = "Use PriceClass_100 for lowest cost (US/EU/IL). PriceClass_200 adds more regions; PriceClass_All is global."
  type        = string
  default     = "PriceClass_100"

  validation {
    condition = contains([
      "PriceClass_100",
      "PriceClass_200",
      "PriceClass_All",
    ], var.cloudfront_price_class)
    error_message = "cloudfront_price_class must be PriceClass_100, PriceClass_200, or PriceClass_All."
  }
}
