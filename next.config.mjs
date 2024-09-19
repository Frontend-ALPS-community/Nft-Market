/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001', // 사용 중인 포트 번호
        pathname: '/api/**', // 필요한 경로를 지정
      },
    ],
  },
  output: 'standalone',
};

export default nextConfig;

// https://port-0-opensea-backend-m13r0eofac7a017f.sel4.cloudtype.app
