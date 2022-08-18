/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,

  // 实验性配置
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig