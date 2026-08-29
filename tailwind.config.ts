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
        // ─── Cœur, recalé sur la charte du dashboard CreaLeads ───
        bg: "#f7f8f7", // fond d'app (dashboard: --color-background)
        ink: "#0f1a16", // texte (dashboard: --color-foreground)
        emerald: "#40ce9b", // accent marque (dashboard: brand-400)
        "emerald-dark": "#17936b", // brand-600 — vert texte lisible
        "emerald-light": "#6fddb5", // brand-300 — hover clair
        "ink-60": "rgba(15, 26, 22, 0.6)",
        "ink-40": "rgba(15, 26, 22, 0.4)",
        "ink-20": "rgba(15, 26, 22, 0.2)",
        "ink-10": "rgba(15, 26, 22, 0.1)",
        "ink-05": "rgba(15, 26, 22, 0.05)",

        // ─── Tokens sémantiques du dashboard (composants produit portés) ───
        brand: {
          50: "#ecfbf5",
          100: "#d2f5e7",
          200: "#a6ebd0",
          300: "#6fddb5",
          400: "#40ce9b",
          500: "#22b584",
          600: "#17936b",
          700: "#147553",
          900: "#0b3e2d",
        },
        canvas: "#edeeec", // fond derrière la carte flottante (shell)
        surface: "#ffffff", // cartes
        "surface-alt": "#fbfcfb", // zones secondaires / en-têtes de table
        stroke: "#e8ebe9", // bordure
        "stroke-strong": "#d4dad6",
        foreground: "#0f1a16",
        muted: "#5c6b64", // texte secondaire
        faint: "#8b9891", // texte tertiaire / labels
        primary: "#40ce9b",
        success: "#22b584",
        warning: "#e8a33d",
        danger: "#dc5b4a",
        info: "#3b82c4",
      },
      borderRadius: {
        pill: "999px",
        card: "20px",
      },
      boxShadow: {
        lift: "0 8px 24px rgba(15, 26, 22, 0.08)",
        "ds-sm": "0 1px 2px rgba(15, 26, 22, 0.04)",
        "ds-md": "0 2px 8px rgba(15, 26, 22, 0.06), 0 1px 2px rgba(15, 26, 22, 0.04)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Tailles RÉDUITES pour un rendu plus pro et équilibré
        "display-xl": ["clamp(2.25rem, 5.5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "800" }],
        "display-lg": ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "800" }],
        "display-md": ["clamp(1.65rem, 3.5vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-sm": ["clamp(1.35rem, 2.5vw, 1.875rem)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
      },
      animation: {
        "marquee": "marquee 28s linear infinite",
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
