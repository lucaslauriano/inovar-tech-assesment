/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REACT_APP_SERVICE_BASE_URL:
      'https://run.mocky.io/v3/a94fc67f-71a2-475d-a6a4-ddde5c566f67',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'f001.backblazeb2.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
