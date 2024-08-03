/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "semie.cooking",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
