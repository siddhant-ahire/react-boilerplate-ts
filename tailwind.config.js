/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#D9D9D9',
          DEFAULT: '#2C2C2C', // Default shade
          dark: '#000000',
        },
      },
    },
  },
  plugins: [],
}
