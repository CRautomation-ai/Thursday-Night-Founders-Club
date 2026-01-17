/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ffc-blue": "#000000", // Black for headers and footer
        "ffc-blue-light": "#FFD700", // Gold for links and accents
        "tnfc-black": "#000000", // Black
        "tnfc-gold": "#FFD700", // Gold
        "tnfc-gold-dark": "#D4AF37", // Darker gold variant
      },
      fontFamily: {
        title: ["Schoolbook Web", "serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
