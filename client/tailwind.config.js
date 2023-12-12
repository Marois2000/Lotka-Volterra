/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          100: '#936639',
          200: '#7F4F24',
          300: '#582F0E'
        },
        neutral: {
          100: '#A68A64',
          200: '#B6AD90',
          300: '#C2C5AA',
          400: '#A4AC86'
        },
        green: {
          100: '#656D4A',
          200: '#414833',
          300: '#333D29'
        }
      },
      fontFamily: {
        montserrat: ["Montserrat Alternates"]
      },
      backgroundImage : {
        hero: "url(./img/Hero.png)"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

