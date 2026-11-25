import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Warna kustom yang sama dengan tailwind.config di versi HTML
      colors: {
        g9: "#0B5D2E",
        g6: "#16A34A",
        mint: "#EAF7EE",
        dk: "#064E27",
        navy: "#0F2537",
      },
    },
  },
  plugins: [],
};

export default config;
