/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ffc-blue': '#1e3a8a', // Dark blue for headers and footer
        'ffc-blue-light': '#3b82f6', // Lighter blue for links
        'cream-red': '#dc2626', // Red for Cream logo
      },
    },
  },
  plugins: [],
}
