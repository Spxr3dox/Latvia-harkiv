import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Diplomatic blue palette — white + blue, per client preference.
        brand: {
          50: "#f2f8ff",
          100: "#e2f0ff",
          200: "#c6e0ff",
          300: "#9ecaf8",
          400: "#7bb5ef",
          500: "#4fa1e6",
          600: "#4a90d9",
          700: "#3a7fc0",
          800: "#2e6aa1",
          900: "#245683",
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
