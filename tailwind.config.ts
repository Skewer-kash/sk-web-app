import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "finance-gradient": "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
        "hero-gradient": "linear-gradient(125deg,rgb(40, 91, 133) 0%,rgb(101, 48, 192) 100%)",
        "accent-gradient": "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      },
      colors: {
        "navy": "#0b253c",
        "violet-bright": "#7c3aed",
        "gold-finance": "#f59e0b",
        "purple-soft": "#6366f1",
        "gray-bg": "#f8fafc",
        "gray-text": "#334155",
        "gray-light": "#64748b",
        "green-success": "#10b981",
        "red-error": "#ef4444",
      },
    },
  },
  plugins: [],
};
export default config;
