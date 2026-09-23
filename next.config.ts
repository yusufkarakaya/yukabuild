import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML in out/, served by Cloudflare as plain assets.
  output: "export",
  images: {
    // The default loader needs a server; a static export serves images as-is.
    unoptimized: true,
    remotePatterns: [
      // Placeholder photography. Seeds are descriptive so each slot is
      // traceable back to the section it fills.
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
    ],
  },
};

export default nextConfig;
