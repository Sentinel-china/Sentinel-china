import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
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
    // Ensure valid language, default to English if invalid
    if (saved && ['en', 'zh', 'es', 'it'].includes(saved)) {
      return saved;
    }
    // Clear invalid language and set to English
    localStorage.setItem('language', 'en');
    return 'en';
  });

  const setLanguage = useCallback((lang: string) => {
    if (['en', 'zh', 'es', 'it'].includes(lang)) {
      setLanguageState(lang);
      localStorage.setItem('language', lang);
      i18next.changeLanguage(lang).then(() => {
        // 确保语言切换完成后再继续
        console.log(`Language switched to: ${lang}`);
      });
    }
  }, []);

  const t = useCallback((key: string, options?: Record<string, any>): any => {
    return i18next.t(key, options as any);
  }, [language]); // 添加language依赖，确保语言改变时t函数重新创建

  useEffect(() => {
    i18next.changeLanguage(language).then(() => {
      console.log(`Language initialized to: ${language}`);
    });
  }, [language]);

  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    t
  }), [language, setLanguage, t]);

  return (
    <LanguageContext.Provider value={contextValue}>
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
