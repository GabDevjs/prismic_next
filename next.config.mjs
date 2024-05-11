
/* const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
}) */

/** @type {import('next').NextConfig} */
const nextConfig = () => {
  return {
    reactStrictMode: true,
    excludeDefaultMomentLocales: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.prismic.io",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          pathname: "/photo-**",
        },
      ],
    },
  };
};

export default nextConfig