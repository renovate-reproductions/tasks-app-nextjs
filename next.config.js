/** @type {import('next/dist/next-server/server/config-shared').NextConfig} */
const config = {
  experimental: {
    esmExternals: true,
  },
  typescript: {
    ignoreDevErrors: true,
    ignoreBuildErrors: true,
  },
  webpack5: true,
  compress: true,
  poweredByHeader: false,
};

module.exports = config;
