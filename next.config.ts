import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML in out/, served by Cloudflare as plain assets.
  output: "export",
  images: {
    // The default loader needs a server; a static export serves images as-is.
    unoptimized: true,
  },
  experimental: {
    // Cloudflare's build cache can restore .next/cache half-way, and Turbopack
    // then panics reading its own database. The build takes seconds, so skip it.
    turbopackFileSystemCacheForBuild: false,
  },
};

export default nextConfig;
