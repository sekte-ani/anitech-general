import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["82.112.230.106"],
  },
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/structure",
        destination: "https://82.112.230.106:8009/api/structure",
      },
    ];
  },
};

export default nextConfig;
