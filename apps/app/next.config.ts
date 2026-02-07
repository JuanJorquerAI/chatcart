import type { NextConfig } from 'next'

const repo = 'chatcart'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/${repo}/app`,
  assetPrefix: `/${repo}/app`,
}

export default nextConfig
