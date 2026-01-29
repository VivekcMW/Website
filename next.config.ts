import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/assets/images/offices/(.*)\\.svg',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/svg+xml',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
