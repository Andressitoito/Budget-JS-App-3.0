/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      // fontFamily: 
    },
    maxWidth: {
      '1/2': '50%',
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],

}