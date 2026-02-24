# IAM User Setup for GitHub Actions

Create an IAM user with minimal permissions for deploying to ECS via GitHub Actions.

## Step 1: Create the IAM User

1. Go to **AWS Console** → **IAM** → **Users** → **Create user**
2. **User name:** `github-actions-andiruda-deploy` (or any name you prefer)
3. **Access type:** Select **Programmatic access** (Access key - for CLI, SDK, API)
4. Click **Next: Permissions**

## Step 2: Attach the Policy

1. Choose **Attach existing policies directly**
2. Click **Create policy** (opens new tab)
3. Switch to the **JSON** tab
4. Paste the policy below
5. Click **Next**
6. **Policy name:** `GitHubActionsECSDeploy`
7. Click **Create policy**
8. Return to the user creation tab, refresh the policy list, search for `GitHubActionsECSDeploy`, and attach it
9. Click **Next** through the remaining steps
10. Click **Create user**
11. **Save the Access Key ID and Secret Access Key** — you won't see the secret again

## IAM Policy (JSON)

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ECRLogin",
      "Effect": "Allow",
      "Action": [
        "ecr:GetAuthorizationToken"
      ],
      "Resource": "*"
    },
    {
      "Sid": "ECRPush",
      "Effect": "Allow",
      "Action": [
        "ecr:BatchCheckLayerAvailability",
        "ecr:GetDownloadUrlForLayer",
        "ecr:BatchGetImage",
        "ecr:PutImage",
        "ecr:InitiateLayerUpload",
        "ecr:UploadLayerPart",
        "ecr:CompleteLayerUpload"
      ],
      "Resource": "arn:aws:ecr:us-east-1:940421708730:repository/andiruda-portfolio"
    },
    {
      "Sid": "ECRDescribe",
      "Effect": "Allow",
      "Action": [
        "ecr:DescribeRepositories",
        "ecr:DescribeImages"
      ],
      "Resource": "arn:aws:ecr:us-east-1:940421708730:repository/andiruda-portfolio"
    },
    {
      "Sid": "ECSTaskDefinition",
      "Effect": "Allow",
      "Action": [
        "ecs:DescribeTaskDefinition",
        "ecs:RegisterTaskDefinition"
      ],
      "Resource": "*"
    },
    {
      "Sid": "ECSService",
      "Effect": "Allow",
      "Action": [
        "ecs:UpdateService",
        "ecs:DescribeServices"
      ],
      "Resource": "arn:aws:ecs:us-east-1:940421708730:service/andiruda-portfolio-cluster/andiruda-portfolio"
    },
    {
      "Sid": "IAMPassRole",
      "Effect": "Allow",
      "Action": "iam:PassRole",
      "Resource": "arn:aws:iam::940421708730:role/andiruda-portfolio-ecs-execution",
      "Condition": {
        "StringLike": {
          "iam:PassedToService": "ecs-tasks.amazonaws.com"
        }
      }
    }
  ]
}
```

**Note:** The policy uses account ID `940421708730`. If your account differs, replace it in all ARNs.

## Step 3: Add Secrets to GitHub

Go to your repo → **Settings** → **Secrets and variables** → **Actions** and add:

| Secret Name | Value |
|-------------|-------|
| `AWS_ACCESS_KEY_ID` | From Step 1 |
| `AWS_SECRET_ACCESS_KEY` | From Step 1 |
| `AWS_REGION` | `us-east-1` |
| `ECR_REPOSITORY` | `andiruda-portfolio` |
| `ECS_CLUSTER` | `andiruda-portfolio-cluster` |
| `ECS_SERVICE` | `andiruda-portfolio` |

## Quick Reference

Your account ID (`940421708730`) is already in the policy above.
