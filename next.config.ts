import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML in out/, served by Cloudflare as plain assets.
  output: "export",
  images: {
    // The default loader needs a server; a static export serves images as-is.
    unoptimized: true,
  },
};

export default nextConfig;
