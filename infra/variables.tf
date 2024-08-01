
variable "cluster_name" {
  type    = string
  default = "weekly-k8s-sessions-clustaaah"
}

variable "cluster_version" {
  type    = string
  default = "1.29"
}

variable "eks_ami_type" {
  type    = string
  default = "AL2_x86_64"
}

variable "eks_instance_type" {
  type    = string
  default = "t3.small"
}

variable "node_group_name" {
  type    = string
  default = "helvador-node-group"
}

variable "node_group_min_size" {
  type    = number
  default = 1
}

variable "node_group_max_size" {
  type    = number
  default = 5
}

variable "node_group_desired_size" {
  type    = number
  default = 3
}

variable "vpc_name" {
  type    = string
  default = "wks-clustaaah-vpc"
}

variable "vpc_cidr" {
  type    = string
  default = "10.0.0.0/16"
}

variable "vpc_private_subnets" {
  type    = list(string)
  default = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
}

variable "vpc_public_subnets" {
  type    = list(string)
  default = ["10.0.4.0/24", "10.0.5.0/24", "10.0.6.0/24"]
}
