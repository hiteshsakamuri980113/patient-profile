/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#7E57C2",
        secondary: "#4D4482",
        accentOrange: "#F9A825",
        accentBlue: "#1976D2",
        accentPink: "#E1BEE7",
      },
      borderRadius: {
        card: "1rem",
      },
      boxShadow: {
        card: "0 2px 6px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
