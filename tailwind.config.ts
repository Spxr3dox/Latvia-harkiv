import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Latvian state red — Pantone 201C, official carmine of the Latvian flag,
        // as used across mfa.gov.lv and other .gov.lv properties.
        brand: {
          50: "#fbf3f4",
          100: "#f5e0e2",
          200: "#e8b6bb",
          300: "#d78893",
          400: "#c25c6b",
          500: "#a83848",
          600: "#9e3039",
          700: "#7a1f27", // deep hover / accents
          800: "#5c161d",
          900: "#3d0f13",
        },
        ink: {
          DEFAULT: "#1a1a1a",
          soft: "#3a3a3a",
          muted: "#6b6b6b",
        },
        surface: {
          DEFAULT: "#ffffff",
          alt: "#faf7f5",
          border: "#e7e2df",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
