import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Règle 60/30/10
        bg: "#FAFAF8",           // 60% - Fond blanc cassé
        ink: "#1A1A1A",          // 30% - Texte anthracite
        emerald: "#00C896",      // 10% - Accent emerald (signature CreaLeads)
        // Nuances utilitaires (variations de l'anthracite, pas nouvelles couleurs)
        "ink-60": "rgba(26, 26, 26, 0.6)",
        "ink-40": "rgba(26, 26, 26, 0.4)",
        "ink-20": "rgba(26, 26, 26, 0.2)",
        "ink-10": "rgba(26, 26, 26, 0.1)",
        "ink-05": "rgba(26, 26, 26, 0.05)",
        // Variante emerald
        "emerald-dark": "#00A87E",
        "emerald-light": "#33D5AC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "800" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "800" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "700" }],
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.8s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
