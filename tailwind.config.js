/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  
  theme: {
    container: {
      padding: "2rem",
    },
    extend: {
      backgroundColor: {
        light: '#ececec',  // Your light mode background color
        dark: '#121212',   // Your dark mode background color
      },

    colors: {
      textMain: "#772F1A",
      buttonColor: "#F2A65A",
      footerColor: "#585123",
      backGroundColor: "#ececec",
      contactButtonColor: "#F58549",
      visitWebsiteButtonColor:"#2560eb", 
      gitHubButtonColor:"#1f2937",
      // Dark colors ====================
      darkButtonColor:"#772F1A",
      darkFooterColor:"#6A6329",
      darkBackGroundColor:"#F0E6D2", 
      // #F0E3F0
      // contactButtonColor:"" same
      darkVisitWebsiteButtonColor:"#4080FF",
      darkGitHubButtonColor:"#3A4B66",
      darkTextMain:"#F2A65A",
      white:"#fff",
    },
    fontFamily: {
      mainFont: ["Staatliches"],
      secundryFont: ["SplineSansMono"],
    },
  },
  plugins: [require("preline/plugin")],
}}
