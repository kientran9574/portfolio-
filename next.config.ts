import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["media.licdn.com", "cdn-new.topcv.vn"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "secomvn.com",
        pathname: "/images/**", // Cho phép load mọi ảnh trong thư mục /images
      },
    ],
  },
};

export default nextConfig;
