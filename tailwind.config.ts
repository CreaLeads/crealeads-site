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
        bg: "#FAFAF8",
        ink: "#1A1A1A",
        emerald: "#00C896",
        "ink-60": "rgba(26, 26, 26, 0.6)",
        "ink-40": "rgba(26, 26, 26, 0.4)",
        "ink-20": "rgba(26, 26, 26, 0.2)",
        "ink-10": "rgba(26, 26, 26, 0.1)",
        "ink-05": "rgba(26, 26, 26, 0.05)",
        "emerald-dark": "#00A87E",
        "emerald-light": "#33D5AC",
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
        "marquee": "marquee 35s linear infinite",
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
