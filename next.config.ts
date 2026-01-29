import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Vercel handles deployment automatically */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
