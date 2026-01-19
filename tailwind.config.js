/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700", // Gold - main brand color
        secondary: "#D4AF37", // Darker gold variant
        main: "#000000", // Black - main dark color
      },
      fontFamily: {
        title: ["Schoolbook Web", "serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
