import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      // Preserve list endpoint exactly
      {
        source: "/api/new/list",
        destination: "/api/new/list",
      },
      // Map legacy dynamic path /api/new/:path* to new static endpoint
      {
        source: "/api/new/:path*",
        destination: "/api/new/file?p=:path*",
      },
    ]
  },
};

export default nextConfig;
