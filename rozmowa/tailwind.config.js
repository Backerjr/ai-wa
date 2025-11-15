export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['system-ui', 'sans-serif'],
      },
      borderRadius: {
        sm: '2px',
      },
      colors: {
        brand: {
          primary: '#000000',
          secondary: '#A855F7',
        }
      }
    },
  },
  plugins: [],
}
