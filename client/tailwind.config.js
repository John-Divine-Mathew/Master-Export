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
          50: '#EBF3FC',
          100: '#D5E6F9',
          200: '#BCD8F8',
          300: '#8FBDF3',
          400: '#4D96EB',
          500: '#1D78E2',
          600: '#004EAB', // Exact logo "EXPORT" blue
          700: '#003E8A',
          800: '#002E68',
          900: '#001848', // Exact logo "MASTER" navy
          950: '#061325',
          blue: '#004EAB',
          'blue-hover': '#003E8A',
          'blue-light': '#EBF3FC',
          'blue-border': '#BCD8F8',
          navy: '#001848',
          'navy-dark': '#061325',
          primary: '#004EAB',
          accent: '#004EAB'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
