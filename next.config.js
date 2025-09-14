/** @type {import('next').NextConfig} */
import path from "path";
import withPWA from "@ducanh2912/next-pwa";

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(process.cwd(), "src");
    config.resolve.symlinks = false;
    return config;
  },
};

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
})(nextConfig);
