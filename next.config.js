/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable strict mode for better development experience
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  
  // Performance optimizations
  swcMinify: true,
  
  // Experimental features for better performance
  experimental: {
    // Removed optimizeCss - causing build issues
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

module.exports = nextConfig