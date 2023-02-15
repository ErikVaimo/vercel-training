# Define terraform requirements
terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 0.3"
    }
  }
	
  # providers control how declarations are acted upon
}
resource "vercel_project" "example" {
  name      = "terraform-test-project"
  git_repository = {
    type = "github"
    repo = "ErikVaimo/vercel-training"
  }
}
provider "vercel" {
  # Variables and values that we want to provide to the provider
  api_token        = var.api_token
}
