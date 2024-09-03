import { useState, useEffect } from "react";

type Theme = "light" | "dark";

const useTheme = (): { theme: Theme; toggleTheme: () => void } => {
  // Function to get the preferred theme from the system
  const getPreferredTheme = (): Theme => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  };

  // Initialize theme from localStorage or system preference
  const initializeTheme = (): Theme => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      return savedTheme;
    }
    const preferredTheme = getPreferredTheme();
    localStorage.setItem("theme", preferredTheme);
    return preferredTheme;
  };

  const [theme, setTheme] = useState<Theme>(initializeTheme);

  // Toggle between light and dark theme
  const toggleTheme = (): void => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Update the className of the body tag whenever the theme changes
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return { theme, toggleTheme };
};

export default useTheme;