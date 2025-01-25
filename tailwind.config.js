/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
            dark:{
                DEFAULT: '#080808',
                600:'#1B1B1B'
            },
            darkgray:'#9C9C9C',
            blue:'#0d9aff',
            white:'#FFFFFF'
        }
      },
    },
    plugins: [],
  };
  