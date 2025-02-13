/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React files
    "./public/index.html", // Ensure Tailwind scans the HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
