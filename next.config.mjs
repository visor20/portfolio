/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    images: {
      unoptimized: true, // Required because GitHub Pages does not support Next.js image optimization
    },
    trailingSlash: true, // Ensures proper paths for GitHub Pages
    assetPrefix: '/assets',
  };

export default nextConfig;
