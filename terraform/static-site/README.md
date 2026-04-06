# Static site (S3 + CloudFront)

Provisions:

- Private **S3** bucket (no public ACLs; **origin access control** for CloudFront only)
- **CloudFront** distribution (`PriceClass_100` by default)
- **ACM** certificate in **us-east-1** (required for CloudFront) with DNS validation in Route 53
- **Route 53** `A` / `AAAA` alias records for apex and `www`

## Apply

```bash
cd terraform/static-site
cp terraform.tfvars.example terraform.tfvars
terraform init
terraform apply
```

After apply, note outputs `s3_bucket_name` and `cloudfront_distribution_id` for CI.

## GitHub Actions deploy user (IAM)

Attach a policy similar to:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "UploadStaticSite",
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::YOUR_BUCKET_NAME",
        "arn:aws:s3:::YOUR_BUCKET_NAME/*"
      ]
    },
    {
      "Sid": "InvalidateCloudFront",
      "Effect": "Allow",
      "Action": "cloudfront:CreateInvalidation",
      "Resource": "arn:aws:cloudfront::YOUR_ACCOUNT_ID:distribution/YOUR_DISTRIBUTION_ID"
    }
  ]
}
```

Replace bucket name, account ID, and distribution ID with values from `terraform apply` outputs.

## DNS outside Route 53

Set `create_dns_records = false` and `acm_certificate_arn` to an **already validated** ACM cert in `us-east-1` covering apex and `www`. Create ACM DNS validation and alias records at your DNS provider using Terraform outputs (`cloudfront_domain_name`, certificate validation CNAMEs from the ACM console if the cert was created manually).
