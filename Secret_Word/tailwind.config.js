/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        archivo: ['"Archivo Black"', "sans-serif"],
        bagel: ['"Bagel Fat One"', "cursive"],
        luckiest: ['"Luckiest Guy"', "cursive"],
        roboto: ["Roboto", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      colors:{
        "palha":"#e5c100",
        "redLuffy":"#d62828",
        "box-shadow-red":"#af0909ea",
        "shadow-blue":"#0046a1",
        "bg-dicas":"#072c7cf8",
        "span-dicas":"#fd4343",
        "tbase":"#f0f0f0",
        "border-red":"#af1414",
        "yellow":"#ffda06",
        "yellowB":"#bea202",
        "cor-container-palavra":"#015c919c",
        "quadrado-vazio":"#f3e308",

      },
      textShadow: {
        'text-shadow-blue': '13px 0px 1px #00306e',
        'text-shadow-red': '1px 1px 2px #6d0707',
        'text-shadow-black': '1px 1px 1px #000',
      },
        boxShadow: {
            'blue': '3px 4px 20px 20px #015c91',
            'red':' 3px 3px 0px 5px #af0909ea',
            'yellowB':' 3px 3px 0px 5px #bea202',
            'sombraB': '2px 2px 0px 6px #0046a1',
        },
      lineHeight: {
        extraLoos: "94px",
        loos: "49px",
      }
    },
  },
  plugins: [],
})

