import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is fully static, so `next build` emits plain HTML/CSS/JS into
  // `out/`. Cloudflare serves that directory straight from its asset store —
  // no Node server, no adapter.
  output: "export",
};

export default nextConfig;
