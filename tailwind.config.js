/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        agri: {
          50: '#f4fbf6',
          100: '#e2f7ea',
          200: '#c5eed5',
          300: '#96e0b5',
          400: '#5fc98e',
          500: '#2eac69',
          600: '#1f8c52',
          700: '#1b6f43',
          800: '#195837',
          900: '#16482f',
          950: '#0b281b',
        },
        amberGold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
