/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            'ibm-plex-mono': ['"IBM Plex Mono"', 'serif'],
            'raleway': ['"Raleway"', 'serif'],
        },
        fontWeight: {
            thin: 100,
            extralight: 200,
            light: 300,
            regular: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        },
        colors:{
            dark:{
                DEFAULT: '#080808',
                600:'#1B1B1B'
            },
            darkgray:'#9C9C9C',
            blue:'#0d9aff',
            white:'#FFFFFF',
            green:'#3F8E00',
            greenlight:'#62BA1B',
            yellow:'#ffa217'
        },
        screen:{
            'sm': "640px", // Dispositivos móviles grandes
            'md': "768px", // Tablets (iPad estándar, tablets Android)
            'lg':"1024px", //laptops pequeñas
            '2xl': "1440px"
        },
        backgroundImage:{
          'patternmobile':"url('/Portafolio/assets/images/doodlesmixedround.png')",
        }
      },
    },
    plugins: [],
  };
  