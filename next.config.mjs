/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APP_FIREBASE_API_KEY: process.env.NEXT_APP_FIREBASE_API_KEY,
    NEXT_APP_FIREBASE_AUTH_DOMAIN: process.env.NEXT_APP_FIREBASE_AUTH_DOMAIN,
    NEXT_APP_FIREBASE_PROJECT_ID: process.env.NEXT_APP_FIREBASE_PROJECT_ID,
    NEXT_APP_FIREBASE_STORAGE_BUCKET:
      process.env.NEXT_APP_FIREBASE_STORAGE_BUCKET,
    NEXT_APP_FIREBASE_MESSAGING_SENDERID:
      process.env.NEXT_APP_FIREBASE_MESSAGING_SENDERID,
    NEXT_APP_FIREBASE_APP_ID: process.env.NEXT_APP_FIREBASE_APP_ID,
    NEXT_APP_FIREBASE_MEASUREMENT_ID:
      process.env.NEXT_APP_FIREBASE_MEASUREMENT_ID,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "semie.cooking",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
