terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
  
  backend "s3" {
    bucket = "weekly-k8s-sessions"
    key    = "tfstates/weekly-k8s-sessions.tfstate"
    region = "us-east-1"
  }

  required_version = "~> 1.8"
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
}
