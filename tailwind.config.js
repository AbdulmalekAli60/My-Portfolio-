/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js'],
  theme: {
    container: {
      padding: "2rem",
    },
    colors: {
      textMain: "#772F1A",
      buttonColor: "#F2A65A",
      footerColor:"#585123",
      backGroundColor:"#ececec",
      contactButtonColor:"#F58549",
    },
    fontFamily: {
      mainFont: ["Staatliches"],
      secundryFont: ["SplineSansMono"],
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
};
