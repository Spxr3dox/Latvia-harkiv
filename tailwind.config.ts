import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Diplomatic blue palette — white + blue, per client preference.
        brand: {
          50: "#f0f6ff",
          100: "#dfeaff",
          200: "#c1d7ff",
          300: "#9bbcf7",
          400: "#7aa4ef",
          500: "#5b8ce4",
          600: "#3a72c7",
          700: "#2a5aa0",
          800: "#1f4680",
          900: "#173562",
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
