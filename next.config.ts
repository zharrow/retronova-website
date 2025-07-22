import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Configuration minimale - Turbopack gère le reste
  images: {
    formats: ['image/webp', 'image/avif'],
  },

  // Configuration pour Docker
  output: 'standalone',

};

export default nextConfig;