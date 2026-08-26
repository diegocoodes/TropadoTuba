import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i0.wp.com",
        pathname: "/www.perunning.com.br/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
