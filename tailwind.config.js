/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter Variable"',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        apple: {
          blue: '#0060cc',
          'blue-hover': '#0055b8',
          gray: '#f5f5f7',
          'dark-gray': '#1d1d1f',
          'mid-gray': '#6e6e73',
          border: '#d2d2d7',
        },
        dark: {
          bg: '#18181b',      /* zinc-900 — base bg */
          surface: '#27272a', /* zinc-800 — alternate sections */
          elevated: '#3f3f46',/* zinc-700 — cards */
          border: '#52525b',  /* zinc-600 — visible borders */
          text: '#fafafa',    /* zinc-50  — crisp headings */
          muted: '#a1a1aa',   /* zinc-400 — readable body */
          blue: '#3b82f6',    /* blue-500 — richer on dark */
        },
      },
    },
  },
  plugins: [],
}
