/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'loading-background': "url('../img/loading-background.jpeg')"
      },
      fontFamily: {
        monda: ['Monda', 'sans-serif'],
        audio: ['Audiowide', 'cursive']
      }
    }
  },
  plugins: []
}
