import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pages/main/home',
        permanent: true, // Set to true if this is a permanent redirect
      },
    ];
  },
};

export default nextConfig;
