const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }
      },
      fontFamily: {
        'sans': ['Raleway', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        scale: {
          '0%': { transform: 'scale(1, 1)' },
          '50%': { transform: 'scale(1.08, 1.05)' },
          '100%': { transform: 'scale(1, 1)' },
        }
      },
      animation: {
        scale: 'scale 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
