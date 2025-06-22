import "dotenv/config";

import type { NextConfig } from "next";

function getAssetPrefix() {
  const prefix = process.env.PORT || process.env.LOGIN;
  const debug = process.env.DEBUG_MODE === "true";

  if (debug) {
    return undefined;
  }

  return `/${prefix}`;
}

const nextConfig: NextConfig = {
  experimental: {
    nodeMiddleware: true,
  },
  serverExternalPackages: ["pdfkit"],
  output: "standalone",
  assetPrefix: getAssetPrefix(),
};

export default nextConfig;
