provider "aws" {
  region  = var.aws_region
  profile = var.aws_profile
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

resource "aws_s3_bucket" "site_bucket" {
  bucket = var.site_domain
}

resource "aws_s3_bucket_public_access_block" "site_public_access" {
  bucket = aws_s3_bucket.site_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_website_configuration" "site_bucket_website_config" {
  bucket = aws_s3_bucket.site_bucket.id

  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_bucket_ownership_controls" "site_bucket_ownership_controls" {
  bucket = aws_s3_bucket.site_bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_acl" "site_bucket_acl" {
  bucket = aws_s3_bucket.site_bucket.id

  acl = "public-read"
  depends_on = [
    aws_s3_bucket_ownership_controls.site_bucket_ownership_controls,
    aws_s3_bucket_public_access_block.site_public_access
  ]
}

resource "aws_s3_bucket_policy" "site_bucket_policy" {
  bucket = aws_s3_bucket.site_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource = [
          aws_s3_bucket.site_bucket.arn,
          "${aws_s3_bucket.site_bucket.arn}/*",
        ]
      },
    ]
  })

  depends_on = [
    aws_s3_bucket_public_access_block.site_public_access
  ]
}

data "cloudflare_zones" "domain" {
  filter {
    name = var.site_domain
  }
}


resource "cloudflare_record" "site_cname" {
  zone_id = data.cloudflare_zones.domain.zones[0].id
  name    = var.site_domain
  value   = aws_s3_bucket_website_configuration.site_bucket_website_config.website_endpoint
  type    = "CNAME"

  ttl     = 1
  proxied = true
}

resource "cloudflare_record" "www_a_record" {
  zone_id = data.cloudflare_zones.domain.zones[0].id # Replace with your Cloudflare Zone ID
  name    = "www"                                    # Subdomain to configure
  type    = "A"                                      # A record
  value   = "192.0.2.1"                              # Use a placeholder IP address (not used for content delivery)
  proxied = true                                     # Cloudflare proxy must be enabled for the page rule to work
}

resource "cloudflare_page_rule" "www_redirect" {
  zone_id = data.cloudflare_zones.domain.zones[0].id
  target  = "www.${var.site_domain}/*"
  actions {
    forwarding_url {
      status_code = 301
      url         = "https://${var.site_domain}"
    }
  }
}