import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["avatars.githubusercontent.com"],
  },
  basePath: '',
};

export default nextConfig;
