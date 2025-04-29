import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "www.zarla.com",
      },
      {
        hostname: "www.techkareer.com",
      },
    ],
  },
};

export default nextConfig;
