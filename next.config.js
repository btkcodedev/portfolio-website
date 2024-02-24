/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/favicon.ico",
          destination: "/favicon/favicon.ico", // Serve the files from the root
        },
        {
          source: "/apple-touch-icon.png",
          destination: "/apple-touch-icon/", // Serve the files from the root
        },
        {
          source: "/android-chrome/:path*",
          destination: "/android-chrome/:path", // Serve the files from the root
        },
      ];
    },
    distDir: 'build',
};

module.exports = nextConfig;
