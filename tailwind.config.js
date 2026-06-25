/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080d0f",
        panel: "#0f181b",
        panel2: "#16242a",
        edge: "#22413c",
        portal: "#97ce4c",
        portalGlow: "#b6f36a",
        aqua: "#3fd9c4",
        sky: "#5bbfe0",
        plum: "#d68fce",
        mist: "#e9f4ee",
        haze: "#8ba39c",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(0.85)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        pulseDot: "pulseDot 1.8s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        spinSlow: "spinSlow 14s linear infinite",
      },
    },
  },
  plugins: [],
};
