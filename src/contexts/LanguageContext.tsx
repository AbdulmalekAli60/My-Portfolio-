import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import i18next from 'i18next';

type Lang = 'ar' | 'en';

interface LanguageContextType {
  language: Lang;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Lang>(() => {
    const savedLanguage = localStorage.getItem('language') as Lang;
    return (savedLanguage && (savedLanguage === 'ar' || savedLanguage === 'en')) ? savedLanguage : 'en';
  });

  const applyLanguage = (newLanguage: Lang) => {
    document.documentElement.classList.remove('ar', 'en');
    document.documentElement.classList.add(newLanguage);
    document.documentElement.lang = newLanguage;
    localStorage.setItem('language', newLanguage);
    i18next.changeLanguage(newLanguage);
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => {
      const newLang = prevLang === 'en' ? 'ar' : 'en';
      applyLanguage(newLang);
      return newLang;
    });
  };

  useEffect(() => {
    applyLanguage(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};