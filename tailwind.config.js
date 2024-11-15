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
          light: '#9333EA',
          DEFAULT: '#7C3AED',
          dark: '#6D28D9',
        },
        secondary: {
          light: '#F472B6',
          DEFAULT: '#EC4899',
          dark: '#DB2777',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}