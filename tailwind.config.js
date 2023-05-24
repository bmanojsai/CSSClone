/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage :{
        'linear-gradient-text' : "linear-gradient(89deg,#1bd18e,#01aeae);",
        'linear-gradient-featured' : "linear-gradient(128deg,rgba(27,209,142,.34),rgba(1,174,174,.32));"
      },
      colors : {
        "text-color-1" : "#ffffff", 
      },
      fontFamily : {
        default: ["Gilroy", "sans-serif"],
        "Gilroy-light": ["Gilroy-Light", "sans-serif"],
        Poppins : ["Poppins","sans-serif"]
      }
    },
  },
  plugins: [],
}

