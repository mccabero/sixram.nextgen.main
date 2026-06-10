import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        lg: "2rem",
        xl: "2.5rem"
      }
    },
    extend: {
      colors: {
        brand: {
          ink: "#0f172a",
          panel: "#ffffff",
          panel2: "#f7fbff",
          line: "rgba(15, 23, 42, 0.12)",
          blue: "#2563eb",
          cyan: "#0891b2",
          violet: "#5b5bd6",
          gold: "#b7791f",
          mint: "#047857"
        }
      },
      boxShadow: {
        glow: "0 18px 45px rgba(37, 99, 235, 0.14)",
        "gold-glow": "0 18px 36px rgba(180, 83, 9, 0.12)"
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(37, 99, 235, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.09) 1px, transparent 1px)",
        "brand-radial":
          "linear-gradient(135deg, rgba(248, 252, 255, 0.96), rgba(237, 245, 255, 0.9) 48%, rgba(255, 255, 255, 0.98))"
      }
    }
  },
  plugins: [forms]
};

export default config;
