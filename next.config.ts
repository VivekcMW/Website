import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static export for GitHub Pages */
  output: 'export',
  trailingSlash: true,
  
  // For GitHub Pages project site deployment
  basePath: '/Website',
  assetPrefix: '/Website/',
  
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Note: Custom headers don't work with static export
  // They need to be configured at the server/CDN level
};

export default nextConfig;
