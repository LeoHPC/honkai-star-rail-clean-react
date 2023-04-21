/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'loading-background': "url('../img/loading-background.webp')",
        'home-background': "url('../img/home-background.webp')",
        'characters-background': "url('../img/characters-background.webp')"
      },
      fontFamily: {
        monda: ['Monda', 'sans-serif'],
        audio: ['Audiowide', 'cursive']
      },
      colors: {
        glass: 'rgba(255, 255, 255, 0.2)'
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0, 0, 0, 0.1)'
      },
      backdropBlur: {
        glass: '1.7px'
      }
    }
  },
  plugins: []
}
