/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.protmundi.com.br",
        port: "80",
      },
    ],
  },
  output: "export",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
