import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F8FA",
        paper: "#FDFDFC",
        navy: {
          950: "#050D1C",
          900: "#0B1E3D",
          800: "#122A52",
          700: "#1B3A6B",
        },
        sapphire: {
          50: "#EAF1FB",
          100: "#CFE0F5",
          400: "#2E76C9",
          500: "#1560B3",
          600: "#0B4F9E",
          700: "#083E7D",
        },
        vitals: {
          400: "#2BB3AC",
          500: "#14919B",
          600: "#0F7A82",
        },
        gold: {
          300: "#E0C368",
          400: "#C9A227",
          500: "#AD8A1E",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jbmono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        soft: "0 2px 8px rgba(11, 30, 61, 0.06)",
        card: "0 12px 40px -12px rgba(11, 30, 61, 0.18)",
        glass: "0 8px 32px 0 rgba(11, 30, 61, 0.1)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "draw-line": "draw-line 2.4s ease-out forwards",
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
