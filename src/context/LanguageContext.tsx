import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, content, Content, Currency } from "@/data/content";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language, setCurrency?: (curr: Currency) => void) => void;
  t: Content;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      // Проверяем сохраненный язык
      const stored = localStorage.getItem("octarine-language");
      if (stored === "ru" || stored === "en") return stored;
      
      // Определяем язык браузера
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('ru')) return "ru";
      if (browserLang.startsWith('en')) return "en";
    }
    return "ru";
  });

  const setLanguage = (lang: Language, setCurrency?: (curr: Currency) => void) => {
    setLanguageState(lang);
    localStorage.setItem("octarine-language", lang);
    
    // При переключении на английский - автоматически USD, на русский - RUB
    if (setCurrency) {
      const newCurrency: Currency = lang === "en" ? "usd" : "rub";
      setCurrency(newCurrency);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem("octarine-language");
    if (stored === "ru" || stored === "en") {
      setLanguageState(stored);
    }
  }, []);

  const t = content[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
