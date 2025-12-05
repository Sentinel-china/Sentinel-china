import React, { createContext, useContext, useState, useEffect } from 'react';
import i18next from '../i18n/config';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string, options?: Record<string, any>) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'en';
  });

  const setLanguage = (lang: string) => {
    if (['en', 'zh', 'es', 'it'].includes(lang)) {
      setLanguageState(lang);
      localStorage.setItem('language', lang);
      i18next.changeLanguage(lang);
    }
  };

  const t = (key: string, options?: Record<string, any>): any => {
    let current: any = i18next.t(key, options as any);
    return current;
  };

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
