import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* Static export for GitHub Pages */
  output: 'export',
  trailingSlash: true,
  
  // For GitHub Pages deployment (uncomment if using project site)
  // basePath: isProd ? '/Website' : '',
  // assetPrefix: isProd ? '/Website/' : '',
  
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
