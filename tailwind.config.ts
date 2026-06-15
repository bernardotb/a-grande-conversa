import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: "#fbf8ef",
          100: "#f4ecd8",
          200: "#e6d4ad",
          300: "#d3b77a"
        },
        ink: "#201d18",
        library: {
          700: "#234437",
          800: "#19362c",
          900: "#10261f",
          950: "#0a1814"
        },
        wine: {
          700: "#702f37",
          800: "#54232a",
          900: "#3a171d"
        },
        antique: {
          400: "#b9954f",
          500: "#9b7837",
          600: "#785923"
        },
        editorial: {
          bg: "#FAF7F2",
          text: "#2C2C2C",
          muted: "#6B6B6B",
          accent: "#B8973A",
          blue: "#1E3A5F",
          wine: "#5C1A2E",
          border: "#DDD5C8"
        }
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-source-sans)", "Arial", "sans-serif"]
      },
      boxShadow: {
        card: "0 14px 40px rgba(42, 31, 18, 0.12)",
        insetline: "inset 0 0 0 1px rgba(155, 120, 55, 0.28)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(155,120,55,.08) 0 1px, transparent 1px)"
      }
    }
  },
  plugins: []
} satisfies Config;
