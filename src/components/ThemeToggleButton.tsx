
// import "../styles.css"

interface ThemeButton{
  isDark:string,
  onChange():void,
  invertedIconLogic:boolean
}
const ThemeToggleButton = ({ isDark, onChange, invertedIconLogic = false }:ThemeButton) => (
  <label className={`container ${isDark ? "IsDark" : "IsLight"}`}>
    <input
      type="checkbox"
      defaultChecked={invertedIconLogic ? !isDark : isDark}
      onChange={onChange}
    />
    <div />
  </label>
);



export default ThemeToggleButton;

// I have this custom hock "import { useState, useEffect } from "react";  type Theme = "light" | "dark";  const useTheme = (): { theme: Theme; toggleTheme: () => void } => {   // Function to get the preferred theme from the system   const getPreferredTheme = (): Theme => {     if (       window.matchMedia &&       window.matchMedia("(prefers-color-scheme: dark)").matches     ) {       return "dark";     }     return "light";   };    // Initialize theme from localStorage or system preference   const initializeTheme = (): Theme => {     const savedTheme = localStorage.getItem("theme") as Theme | null;     if (savedTheme) {       return savedTheme;     }     const preferredTheme = getPreferredTheme();     localStorage.setItem("theme", preferredTheme);     return preferredTheme;   };    const [theme, setTheme] = useState(initializeTheme);    // Toggle between light and dark theme   const toggleTheme = (): void => {     const newTheme: Theme = theme === "light" ? "dark" : "light";     setTheme(newTheme);     localStorage.setItem("theme", newTheme);   };    // Update the className of the body tag whenever the theme changes   useEffect(() => {     document.body.className = theme;   }, [theme]);    return { theme, toggleTheme }; };  export default useTheme;" that i am using in my component like this: "  const { theme, toggleTheme } = useTheme(); " and i am trying to pass its values to this button for switching light mods : import "./styles.css";  interface ThemeButton{   isDark:boolean,   onChange:string,   invertedIconLogic:boolean } const ThemeToggleButton = ({ isDark, onChange, invertedIconLogic = false }:ThemeButton) => (             
//     );  export default ThemeToggleButton;  but i have problems with typeScript. I have this error for onChange function: "Type 'string' is not assignable to type 'ChangeEventHandler'.ts(2322)" And this error: "Type '{ isDark: any; }' is missing the following properties from type 'ThemeButton': onChange, invertedIconLogicts(2739)" when i try to use the "ThemeToggleButton" component