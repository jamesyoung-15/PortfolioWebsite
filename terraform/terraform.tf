terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "> 5.4"
    }
    cloudflare = {
        source = "cloudflare/cloudflare"
        version = ">4.0"
    }
  }
  backend "s3" {
    bucket         = "terraform-state-backend-jyylab" # Change to bucket name
    key            = "prod/portfolio-website"
    region = "us-east-1"
    encrypt = true
  }
}