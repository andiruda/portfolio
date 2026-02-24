# ECS Deployment

Deploy the portfolio to AWS ECS (Fargate) with Terraform, using your existing ACM certificate and Route 53.

## Prerequisites

- AWS CLI configured
- Terraform >= 1.0
- ACM certificate for your domain (must be in **us-east-1** for ALB)
- Route 53 hosted zone for your domain

## One-time setup

1. Copy the example vars and add your ACM certificate ARN:

```bash
cd terraform/ecs
cp terraform.tfvars.example terraform.tfvars
# Edit terraform.tfvars - add your acm_certificate_arn
```

2. Apply:

```bash
terraform init
terraform plan
terraform apply
```

After apply:
- `andiruda.com` and `www.andiruda.com` will point to your portfolio
- HTTP redirects to HTTPS
- `portfolio_url` outputs your live HTTPS URL

## Configure GitHub Actions

Add these secrets to your GitHub repo (Settings → Secrets → Actions):

| Secret | Value |
|--------|-------|
| `AWS_ACCESS_KEY_ID` | IAM user access key |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret key |
| `AWS_REGION` | e.g. `us-east-1` |
| `ECR_REPOSITORY` | `andiruda-portfolio` (from Terraform output) |
| `ECS_CLUSTER` | `andiruda-portfolio-cluster` |
| `ECS_SERVICE` | `andiruda-portfolio` |

## Deploy on every push

Once configured, pushing to `main` will:
1. Build the Docker image
2. Push to ECR
3. Deploy to ECS

## Manual deploy

```bash
# Build and push
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
docker build -t andiruda-portfolio .
docker tag andiruda-portfolio:latest <ecr-url>:latest
docker push <ecr-url>:latest

# Force new deployment
aws ecs update-service --cluster andiruda-portfolio-cluster --service andiruda-portfolio --force-new-deployment
```
