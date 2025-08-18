/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7E57C2", // purple
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
