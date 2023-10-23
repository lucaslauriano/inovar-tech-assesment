/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    REACT_APP_SERVICE_BASE_URL:
      'https://run.mocky.io/v3/f05cd6b6-bf97-47fc-920b-be9726496c21',
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
