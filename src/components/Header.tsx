// import { useState } from "react";
import useTheme from "../hocks/useTheme.tsx";
import { useTranslation } from "react-i18next";
// External Libraries
// import { Languages } from "lucide-react";
import img from "../assets/av.jpeg";
import {useLanguage} from "../contexts/LanguageContext.tsx";

import { HashLink as Link } from "react-router-hash-link";
import { useEffect } from "react";
// External Libraries
export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const { t, i18n } = useTranslation("Header");


  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return (
    <div className="mb-24">
      {/* Nav  */}
      <nav className="flex justify-between items-center">
        <img src={img} alt="avavtar" className="w-10 h-10 rounded-full" />
        {/* Language and dark mode buttons */}

        <div className="flex justify-between mr-10   gap-2">
          <button
            onClick={toggleLanguage}
            className=" rounded-3xl p-3 flex justify-center items-center text-textMain dark:text-darkTextMain hover:opacity-55  transition-colors duration-300"
          >
            {/* <Languages /> */}
            {language === "en" ? "العربية" : "English"}
          </button>

          <button
            onClick={toggleTheme}
            className="rounded-3xl p-3 flex justify-center items-center  hover:opacity-55  transition-colors duration-300"
          >
            <input
              type="checkbox"
              id="theme-toggle"
              name="light-switch"
              className="light-switch sr-only"
              checked={theme === "light"}
              onClick={toggleTheme}
            />
            <label
              className="relative cursor-pointer p-2"
              htmlFor="theme-toggle"
            >
              {theme === "light" ? (
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="fill-yellow-400"
                    d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
                  />
                  <path
                    className="fill-yellow-500"
                    d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
                  />
                </svg>
              ) : (
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="fill-gray-400"
                    d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
                  />
                  <path
                    className="fill-gray-500"
                    d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
                  />
                </svg>
              )}
              <span className="sr-only">
                Switch to {theme === "light" ? "dark" : "light"} version
              </span>
            </label>
          </button>
        </div>
        {/* ===Language and dark mode buttons=== */}
      </nav>
      {/* ===Nav=== */}

      {/* Header */}
      <header className="mt-24">
        <h1
          className={`text-textMain dark:text-darkTextMain font-bold  ${
            language === "ar" ? "font-mainArabic" : "font-mainFont"
          } text-4xl sm:text-5xl md:text-7xl lg:text-9xl xl:text-[12rem] 2xl:text-[14rem] leading-tight sm:leading-none text-center mb-4 sm:mb-6 md:mb-8`}
        >
          {t("Abdulmalek", { ns: "Header" })}
        </h1>

        {/* p container */}
        <div className="max-w-3xl">
          <p
            className={`mt-16 text-left text-lg ${
              language === "ar" ? "font-secondryArabic" : "font-secundryFont"
            }  text-textMain dark:text-darkTextMain`}
          >
            {t(
              "An undergraduate software engineering student. I strive to learn the best practices in software development and how to implement different functionalities. Proficient in Java, ReactJS, NodeJS. Eager to leverage my strong academic foundation in real-world projects. Particularly interested in web development.",
              { ns: "Header" }
            )}
          </p>
        </div>
        {/* ===p container=== */}

        {/* Button Container */}
        <div className="flex justify-start ">
          <Link smooth to="#contact">
            <button
              className={`px-4 py-2 mt-5 tracking-widest bg-black  text-buttonColor dark:text-darkButtonColor border-white text-base font-bold ${
                language === "ar" ? "font-secondryArabic" : "font-secundryFont"
              }  rounded-xl`}
            >
              {t("Contact", { ns: "Header" })}
            </button>
          </Link>
        </div>
        {/* ===Button Container=== */}
      </header>
      {/* ===Header=== */}
    </div>
  );
}
