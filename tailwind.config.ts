import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        image: "5px 5px 25px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        section:
          "linear-gradient(180deg, rgba(9,68,36,1) 0%, rgba(10,80,42,1) 25%, rgba(12,87,46,1) 50%, rgba(10,80,42,1) 75%, rgba(9,68,36,1) 100%)",
      },
      colors: {
        dark: {
          transparent: {
            15: "rgba(51, 51,51,.15)",
            20: "rgba(51, 51,51,.20)",
            25: "rgba(51, 51,51,.25)",
            30: "rgba(51, 51,51,.30)",
            35: "rgba(51, 51,51,.35)",
            40: "rgba(51, 51,51,.40)",
            45: "rgba(51, 51,51,.45)",
            50: "rgba(51, 51,51,.50)",
            75: "rgba(51, 51,51,.75)",
          },
          333: "#333",
        },
        green: {
          1: "#052A16",
          2: "#0B6032",
          3: "#0B6836",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 100s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
