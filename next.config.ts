import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [],
  },
  env: {
    NEXT_PUBLIC_REGION: process.env.NEXT_PUBLIC_REGION ?? process.env.REGION ?? 'global',
    NEXT_PUBLIC_ENABLE_GOOGLE_ANALYTICS:
      process.env.NEXT_PUBLIC_ENABLE_GOOGLE_ANALYTICS ?? process.env.ENABLE_GOOGLE_ANALYTICS ?? '',
    NEXT_PUBLIC_ENABLE_GOOGLE_MAPS: process.env.NEXT_PUBLIC_ENABLE_GOOGLE_MAPS ?? process.env.ENABLE_GOOGLE_MAPS ?? '',
    NEXT_PUBLIC_ENABLE_VIDEO_EMBEDS:
      process.env.NEXT_PUBLIC_ENABLE_VIDEO_EMBEDS ?? process.env.ENABLE_VIDEO_EMBEDS ?? '',
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? process.env.GA_MEASUREMENT_ID ?? '',
  },
};

export default nextConfig;
