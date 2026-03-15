/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // This is the most important line for GitHub Pages
  images: {
    unoptimized: true,   // Required for static export
  },
};

export default nextConfig;