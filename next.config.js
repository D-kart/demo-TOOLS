const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname)
    return config
  },
  experimental: {
    optimizePackageImports: [],
  },
  compiler: {
    jsc: {
      transform: {
        react: {
          throwIfNamespace: false,
        },
      },
    },
  },
}

module.exports = nextConfig
