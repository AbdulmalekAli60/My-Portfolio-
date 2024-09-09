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

  const [theme, setTheme] = useState<Theme>(initializeTheme());

  const applyTheme = (newTheme: Theme) => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Toggle between light and dark theme
  const toggleTheme = (): void => {
    setTheme((prevTheme) => {
      const newTheme: Theme = prevTheme === "light" ? "dark" : "light";
      applyTheme(newTheme);
      return newTheme;
    });
  };

  // Update the className of the body tag whenever the theme changes
  // Apply the theme when the component mounts
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return { theme, toggleTheme };
};

export default useTheme;
