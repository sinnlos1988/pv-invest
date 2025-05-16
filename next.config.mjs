/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimieren Sie die Bilder für bessere Qualität
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Ignorieren Sie Fehler während des Builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Korrigierte assetPrefix-Konfiguration
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
};

export default nextConfig;
