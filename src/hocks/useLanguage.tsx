// React
import { useEffect, useState } from "react";
// React

type Lang = "ar" | "en";

const useLanguage = () => {
  const initializeLanguage = (): Lang => {
    const savedLanguage = localStorage.getItem("language") as Lang;
    if (savedLanguage && (savedLanguage === "ar" || savedLanguage === "en")) {
      return savedLanguage;
    }
    return "en"; // default
  };

  const [language, setLanguage] = useState<Lang>(initializeLanguage); // en or ar

  const applyLanguage = (newLanguage: Lang) => {
    document.documentElement.classList.remove("ar", "en");
    document.documentElement.classList.add(newLanguage);
    document.documentElement.lang = newLanguage; // lang attribuet of html tag
    localStorage.setItem("language", newLanguage);
  };

  const toggleLanguage = (): void => {
    setLanguage((prevLanguage) => {
      const newLanguage: Lang = prevLanguage === "en" ? "ar" : "en";
      applyLanguage(newLanguage);
      return newLanguage;
    });
  };

  useEffect(() => {
    applyLanguage(language);
  }, [language]);

  return { language, toggleLanguage };
};

export default useLanguage;
