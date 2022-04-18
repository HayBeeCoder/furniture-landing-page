module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        nuto: ['Noto Serif Display', 'serif'],
      },
      colors: {
        customGreen: "#244D4D",
      }
    },
  },
  plugins: [],
}