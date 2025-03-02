/**
 * @type {import('next').NextConfig}
 */
const config = {
  experimental: {
    esmExternals: true,
  },
  typescript: {
    ignoreDevErrors: true,
    ignoreBuildErrors: true,
  },
  compress: true,
  poweredByHeader: false,
  swcMinify: true,
  compiler: {
    removeConsole: true,
    styledComponents: true,
  },
};

module.exports = config;
