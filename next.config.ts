import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` menghasilkan folder `out/` (HTML/CSS/JS) yang bisa diunggah ke hosting statis mana pun.
  output: "export",
  // /jajaran-direksi -> /jajaran-direksi/index.html agar berjalan di semua hosting statis
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
