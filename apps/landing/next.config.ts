import type { NextConfig } from 'next'

const repo = 'chatcart'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}`,
}

export default nextConfig
