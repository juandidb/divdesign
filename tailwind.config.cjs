/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', '"Helvetica Neue"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0a0d14',
        stone: '#0f172a',
        mist: '#e8ecf4',
        accent: '#7c3aed',
        glow: '#a78bfa',
        muted: '#5a6478',
      },
      boxShadow: {
        glow: '0 10px 60px -25px rgba(124,58,237,0.35)',
        card: '0 25px 80px -40px rgba(0,0,0,0.45)',
      },
    },
  },
  plugins: [],
};
