/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0b1f44',
          dark: '#0f172a',
          blue: '#0066cc',
          primary: '#0284c7',
          sky: '#e0f2fe',
          ice: '#f0f9ff',
          light: '#38bdf8'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
