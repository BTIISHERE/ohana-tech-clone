import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    extend: {
      colors: {
        ohana: {
          50: "#fdf6f3",
          100: "#faeae3",
          200: "#f3d2c4",
          300: "#ebb9a4",
          400: "#e0a488",
          500: "#d4967d",
          600: "#c07a5e",
          700: "#a15f47",
          800: "#7d4936",
          900: "#5c3628",
          950: "#3a2118",
        },
        ink: {
          50: "#f4f5f5",
          100: "#e6e8e8",
          200: "#c8cccc",
          300: "#a3aaaa",
          400: "#767f7f",
          500: "#4f5757",
          600: "#3a4040",
          700: "#303636",
          800: "#232828",
          900: "#171b1b",
          950: "#0b0d0d",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "ohana-gradient": "linear-gradient(135deg, #171b1b 0%, #303636 55%, #7d4936 130%)",
        "ohana-radial": "radial-gradient(circle at top right, rgba(212,150,125,0.25), transparent 60%)",
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3.5s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(212,150,125,0.15), 0 20px 60px -15px rgba(212,150,125,0.35)",
        card: "0 4px 24px rgba(11,13,13,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
