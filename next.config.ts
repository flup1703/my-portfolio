import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
       // For Next.js 13+ (app directory) or if using remotePatterns, you can use this instead:
       // remotePatterns: [
       //   {
       //     protocol: 'https',
       //     hostname: 'avatars.githubusercontent.com',
       //     port: '',
       //     pathname: '/**',
       //   },
       // ],
       // Simpler option for most cases (works in Next.js 12+):
      domains: ['avatars.githubusercontent.com'],
  },
};

export default nextConfig;
