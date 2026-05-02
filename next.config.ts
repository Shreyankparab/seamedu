import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "upload.wikimedia.org" },
      { hostname: "assets.website-files.com" },
      { hostname: "koolg.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "cdn.jsdelivr.net" },
    ],
  },
};

export default nextConfig;
