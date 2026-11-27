/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        ink: "var(--ink)",
        found: "var(--found)",
        lost: "var(--lost)",
        claim: "var(--claim)",
        warn: "var(--warn)",
        stamp: "var(--stamp)",
        desk: {
          badge: "var(--desk-badge)",
          surface: "var(--desk-surface)",
          on: "var(--on-desk-surface)",
        },
      },
      boxShadow: {
        hard1: "var(--shadow-1)",
        hard2: "var(--shadow-2)",
        press: "var(--shadow-press)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
      },
    },
  },
  plugins: [],
};
