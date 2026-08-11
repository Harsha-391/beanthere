import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mono: {
          950: "#050505",
          900: "#0A0A0A",
          850: "#121212",
          800: "#171717",
          700: "#262626",
          600: "#404040",
          500: "#737373",
          400: "#A3A3A3",
          300: "#D4D4D4",
          200: "#E5E5E5",
          100: "#F5F5F5",
          50: "#FAFAFA",
          white: "#FFFFFF",
        }
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "Montserrat", "system-ui", "sans-serif"],
        serif: ["var(--font-[#171717])", "Georgia", "serif"],
        monogram: ["Bitstream Vera Serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
