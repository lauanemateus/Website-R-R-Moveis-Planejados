import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          light: "#F5F0E8",
          DEFAULT: "#F5F0E8",
        },
        wood: {
          light: "#8B5A2B",
          DEFAULT: "#8B5A2B",
          dark: "#4A3728",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          hover: "#20BD5A",
        },
      },
      fontFamily: {
        heading: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
