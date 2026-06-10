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
          ink: "#030712",
          panel: "#071018",
          panel2: "#0a1520",
          line: "rgba(148, 163, 184, 0.18)",
          blue: "#38bdf8",
          cyan: "#22d3ee",
          violet: "#a78bfa",
          gold: "#f5c542",
          mint: "#34d399"
        }
      },
      boxShadow: {
        glow: "0 0 45px rgba(56, 189, 248, 0.14)",
        "gold-glow": "0 0 34px rgba(245, 197, 66, 0.12)"
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.08) 1px, transparent 1px)",
        "brand-radial":
          "radial-gradient(circle at 18% 12%, rgba(34, 211, 238, 0.16), transparent 30%), radial-gradient(circle at 78% 2%, rgba(167, 139, 250, 0.12), transparent 30%), radial-gradient(circle at 55% 92%, rgba(245, 197, 66, 0.08), transparent 32%)"
      }
    }
  },
  plugins: [forms]
};

export default config;
