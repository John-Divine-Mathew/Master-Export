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
          dark: '#0f0c1b',
          navy: '#18132b',
          deep: '#2e1065',
          purple: '#7c3aed',
          violet: '#8b5cf6',
          primary: '#7c3aed',
          lavender: '#ede9fe',
          lightLavender: '#f5f3ff',
          softLavender: '#ddd6fe',
          mutedLavender: '#c4b5fd',
          accent: '#a855f7'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
