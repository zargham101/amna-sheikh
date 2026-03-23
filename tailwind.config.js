/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0A0A0A',
          secondary: '#111111',
          tertiary: '#1A1A1A',
        },
        accent: {
          primary: '#E63946',
          secondary: '#F4A261',
        },
        text: {
          primary: '#F5F5F5',
          secondary: '#A0A0A0',
          muted: '#555555',
        },
        border: '#2A2A2A',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        accent: ['Caveat', 'cursive'],
      },
      fontSize: {
        'hero': ['clamp(4rem, 10vw, 9rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'section-title': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1', letterSpacing: '0.05em' }],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0A0A0A 0%, #1a0a0a 50%, #0A0A0A 100%)',
      },
      boxShadow: {
        'glow-red': '0 0 40px rgba(230, 57, 70, 0.15)',
      }
    },
  },
  plugins: [],
}
