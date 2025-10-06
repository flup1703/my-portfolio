import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: '/my-portfolio',
  assetPrefix: '/my-portfolio/',
  images: {
    unoptimized: true,
    formats: ['image/webp'],
    domains: ["avatars.githubusercontent.com"],
  },
};

export default nextConfig;
