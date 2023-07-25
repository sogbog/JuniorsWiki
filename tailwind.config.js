/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        notoSans: 'Noto Sans',
        spaceMono: 'Space Mono'
      },
      colors: {
        snow: {
          100: "#fffefe",
          200: "#fefcfc",
          300: "#fdf9fa",
          400: "#fcf7f8",
          500: "#d7d4d4",
          600: "#b3b1b2",
          700: "#919090"
        },
        eerieBlack: {
          100: "#d8dbd9",
          200: "#8f9590",
          300: "#4c554d",
          400: "#111d13",
          500: "#0d170f",
          600: "#081009",
          700: "#030603"
        },
        satinGold: {
          100: "#faf1e3",
          200: "#edd7ab",
          300: "#debd74",
          400: "#cca43b",
          500: "#8d722d",
          600: "#54441f",
          700: "#201b0f"
        },
        seaGreen: {
          100: "#e0eee5",
          200: "#a2cbb2",
          300: "#64a982",
          400: "#0a8754",
          500: "#165f3d",
          600: "#153a27",
          700: "#0d1811"
        },
        yaleBlue: {
          100: "#dde0eb",
          200: "#9ca6c3",
          300: "#5b6f9d",
          400: "#083d77",
          500: "#122d54",
          600: "#121d34",
          700: "#090d16"
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}