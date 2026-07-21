import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Diplomatic blue palette — white + blue, per client preference.
        brand: {
          50: "#eef3fb",
          100: "#d8e3f4",
          200: "#b3c7e9",
          300: "#89a6db",
          400: "#6187c9",
          500: "#4272bd",
          600: "#1e4d8f",
          700: "#14396b",
          800: "#0e2a4f",
          900: "#0a1f3b",
        },
        ink: {
          DEFAULT: "#0f1c2e",
          soft: "#2b3a52",
          muted: "#5c6b83",
        },
        surface: {
          DEFAULT: "#ffffff",
          alt: "#f4f7fc",
          border: "#dbe4f0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      borderRadius: {
        DEFAULT: "14px",
        sm: "8px",
        md: "12px",
        lg: "18px",
        xl: "22px",
        "2xl": "28px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(20,57,107,.06)",
        DEFAULT: "0 4px 18px -6px rgba(20,57,107,.12)",
        md: "0 4px 18px -6px rgba(20,57,107,.12)",
        lg: "0 20px 40px -20px rgba(20,57,107,.25)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
