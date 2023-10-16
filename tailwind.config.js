/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors:{
        dark_green: '#3A5B22',
        bright_blue: '#0F3DDE',
        line_bg: '#F5F5F5',
        input_color: '#d9d9d9'
      }
    },
  },
  plugins: [],
};
