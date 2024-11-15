import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        rainbow: "var(--rainbow)",
        bookCard: '#18181b',
        rainbowShadow: "var(--rainbow-shadow)"
      },

      backgroundImage: {
        'night-sky': 'linear-gradient(to top, black 0%, black 90%, transparent 100%)',
        'night-sky-border': 'linear-gradient(to bottom, #415a77, #778da9)',
        'rainbow': "var(--rainbow)",
        'rainbow-hover': "var(--rainbow-hover)",

      },

      boxShadow: {
        'bookCardShadow': '0 4px 6px rgba(255, 255, 255, 0.5)',
      }
    },
  },
  plugins: [nextui()],
};
export default config;
