variable "aws_region" { default = "us-east-1" }
variable "instance_type" { default = "t3.micro" }
variable "key_name" { default = "notes-app-deploy-key" }
variable "public_key_path" { default = "../deploy_key.pub" } # relative path in repo
variable "app_repo" { description = "git clone repo URL" }
variable "app_branch" { default = "main" }
variable "deploy_user" { default = "ubuntu" }
variable "allowed_ssh_cidr" { default = "0.0.0.0/0" } # change for production
