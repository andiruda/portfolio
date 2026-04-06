output "s3_bucket_name" {
  description = "Upload static export here: aws s3 sync out/ s3://<this> --delete"
  value       = aws_s3_bucket.site.id
}

output "cloudfront_distribution_id" {
  description = "Use for cache invalidation after deploy."
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain_name" {
  description = "Default CloudFront hostname (*.cloudfront.net) if you need a smoke test before DNS cuts over."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "site_urls" {
  description = "HTTPS URLs once DNS resolves."
  value = {
    apex = "https://${var.domain_name}"
    www  = "https://${local.www}"
  }
}

output "acm_certificate_arn" {
  description = "ACM certificate ARN in us-east-1 (attached to CloudFront)."
  value       = local.certificate_arn
}
