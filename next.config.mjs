/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/api/:path*", // Proxy any request matching /api/*
          destination: "https://api.dev.loopeats.com/:path*", // Redirect to the external API
        },
      ];
    },
  };
  export default nextConfig;