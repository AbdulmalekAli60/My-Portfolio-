import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import { HashLink as Link } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

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

  useEffect(() => {
    const handleScroll = () => {
      const hash = window.location.hash.substring(1);
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
            window.history.replaceState(null, "", window.location.pathname);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
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
        className={`fixed inset-0 bg-navigationMenu transition-opacity duration-300 ${
          isVisible
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsVisible(false)}
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