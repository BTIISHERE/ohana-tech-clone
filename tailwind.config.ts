import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Extracted from ohanatechinc.com computed styles
        clay: {
          DEFAULT: "#D4967D", // rgb(212,150,125) — hero / accent background
          light: "#E4B7A4",
          dark: "#BE7C60",
        },
        sage: {
          DEFAULT: "#495A58", // rgb(73,90,88) — dark section / footer background
          light: "#5E716E",
          dark: "#37443F",
        },
        charcoal: "#303636", // rgb(48,54,54) — body text
      },
      fontFamily: {
        // Substitutes for Adobe Typekit fonts used on the live site
        heading: ["var(--font-heading)", "Arial", "sans-serif"], // stand-in for pragmatica-extended
        body: ["var(--font-body)", "Helvetica", "sans-serif"], // stand-in for aktiv-grotesk
        mono: ["var(--font-mono)", "monospace"], // stand-in for courier-std
      },
      letterSpacing: {
        widest2: "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
