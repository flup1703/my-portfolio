import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp'],
    domains: ["avatars.githubusercontent.com"],
  },

  ...(process.env.NODE_ENV === 'production' && {
       output: 'export',
       basePath: '/my-portfolio',
       assetPrefix: '/my-portfolio/',
  })
};

export default nextConfig;
