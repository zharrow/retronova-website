import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Configuration minimale - Turbopack gère le reste
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;