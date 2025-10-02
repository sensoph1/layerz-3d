// next.config.js (ESLint Configuration) - v1.1
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Allow production builds to successfully complete even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Allow production builds to successfully complete even if there are type errors
    ignoreBuildErrors: true,
  },
  images: {
    // Disable image optimization warnings
    unoptimized: true,
  },
}

module.exports = nextConfig