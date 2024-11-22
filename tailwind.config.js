/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7E57C2',
          DEFAULT: '#5E2BB5',
          dark: '#4C1D95',
        },
        secondary: {
          light: '#FF9F47',
          DEFAULT: '#E76E1D',
          dark: '#B5540D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}