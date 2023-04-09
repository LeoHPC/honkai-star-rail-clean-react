/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'loading-background': "url('src/shared/assets/loading-background.png')"
      }
    }
  },
  plugins: []
}
