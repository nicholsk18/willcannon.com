import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      dropShadow: {
        image: "5px 5px 25px rgba(0, 0, 0, 0.25)",
        elegant: "0 10px 40px rgba(0, 0, 0, 0.15)",
      },
      backgroundImage: {
        section:
          "linear-gradient(180deg, rgba(11,85,40,1) 0%, rgba(13,95,45,1) 50%, rgba(11,85,40,1) 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grass-gradient": "linear-gradient(180deg, rgba(232, 235, 226, 1) 0%, rgba(240, 242, 236, 1) 50%, rgba(232, 235, 226, 1) 100%)",
        "grass-light": "linear-gradient(135deg, rgba(220, 228, 214, 0.5) 0%, rgba(232, 237, 225, 0.3) 100%)",
      },
      colors: {
        accent: {
          gold: "#c9a961",
          "gold-light": "#d4b876",
          "gold-dark": "#b39450",
        },
        primary: {
          green: "#0b5528",
          "green-light": "#0d6630",
          "green-dark": "#094420",
        },
        sage: {
          50: "#f7f8f6",
          100: "#eef1ec",
          200: "#dce4d6",
          300: "#c5d4bc",
          400: "#a8bf9d",
          500: "#8ba67e",
          600: "#6f8a64",
          700: "#5a6f51",
          800: "#4a5b44",
          900: "#3d4c39",
        },
        cream: {
          50: "#fdfdfb",
          100: "#faf9f5",
          200: "#f5f3eb",
          300: "#ede9dc",
          400: "#e3dbc8",
          500: "#d6cab0",
          600: "#c4b299",
          700: "#a8947d",
          800: "#8a7967",
          900: "#716354",
        },
        dark: {
          transparent: {
            15: "rgba(0, 0, 0, 0.15)",
            20: "rgba(0, 0, 0, 0.20)",
            30: "rgba(0, 0, 0, 0.30)",
            40: "rgba(0, 0, 0, 0.40)",
            50: "rgba(0, 0, 0, 0.50)",
            60: "rgba(0, 0, 0, 0.60)",
            75: "rgba(0, 0, 0, 0.75)",
            85: "rgba(0, 0, 0, 0.85)",
          },
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 100s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
