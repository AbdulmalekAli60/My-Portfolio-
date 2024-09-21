// React
import { useState, useEffect } from "react";
// React

//Components + hocks
import { useLanguage } from "../contexts/LanguageContext";
//Components + hocks

//External Library
import { Menu, X } from "lucide-react";
import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
//External Library

export default function NavigationMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();
  const { t } = useTranslation("NavigationMenu");
  const arStyles = `${
    language === "ar"
      ? "font-secondryArabic tracking-normal"
      : "font-secundryFont tracking-widest"
  }`;
  const nameSpace = { ns: "NavigationMenu" };
  // Remove name of section
  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash.substring(1); // Remove the "#"
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;

          if (
            scrollPosition < offsetTop - windowHeight / 2 ||
            scrollPosition > offsetTop + offsetHeight - windowHeight / 2
          ) {
            // Remove the hash from the URL
            window.history.replaceState(null, "", window.location.pathname);
          }
        }
      }
    };

    //clean up
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // === Remove name of section ===

  return (
    <div
      className={`fixed inset-0 overflow-hidden ${
        isVisible ? "z-50" : "z-40 pointer-events-none"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-4 right-4 z-50 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 pointer-events-auto"
      >
        {isVisible ? (
          <X className="text-black" />
        ) : (
          <Menu className="text-black" />
        )}
      </button>

      {/* Navigation Menu */}
      <div
        onClick={() => setIsVisible(!isVisible)}
        className={`fixed inset-0 bg-navigationMenu transition-[clip-path] duration-500 ease-in-out ${
          isVisible
            ? "clip-path-circle-100 pointer-events-auto"
            : "clip-path-circle-0 pointer-events-none fixed"
        }`}
      >
        <div
          className={`flex flex-col items-center justify-center h-full text-textMain ${arStyles}`}
        >
          <nav className="text-4xl flex flex-col space-y-10">
            <Link
              smooth
              to="#home"
              className="block hover:opacity-75 transition-colors"
            >
              {t("Home", nameSpace)}
            </Link>

            <Link
              smooth
              to="#projects"
              className="block hover:opacity-75 transition-colors"
            >
              {t("Projects", nameSpace)}
            </Link>

            <Link
              smooth
              to="#contact"
              className="block hover:opacity-75 transition-colors"
            >
              {t("Contact", nameSpace)}
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
