const axios = require('axios');

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"]
  },
  // 实验性配置
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig