import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    nodeMiddleware: true,
  },
  serverExternalPackages: ["pdfkit"],
  output: "standalone",
};

export default nextConfig;
