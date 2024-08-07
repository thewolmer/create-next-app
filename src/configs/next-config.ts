export const nextJsConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wolmer.me",
        pathname: "/images/**/*",
      },
    ],
  },
};

export default nextConfig;`;
