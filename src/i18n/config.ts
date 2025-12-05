import i18next from 'i18next';
import enTranslations from './locales/en.json';
import zhTranslations from './locales/zh.json';
import esTranslations from './locales/es.json';
import itTranslations from './locales/it.json';

const resources = {
  en: { translation: enTranslations },
  zh: { translation: zhTranslations },
  es: { translation: esTranslations },
  it: { translation: itTranslations },
};

// Get saved language from localStorage or use browser language
const getSavedLanguage = () => {
  const saved = localStorage.getItem('language');
  if (saved && ['en', 'zh', 'es', 'it'].includes(saved)) {
    return saved;
  }
  
  // Try to detect browser language
  const browserLang = navigator.language.split('-')[0];
  if (['en', 'zh', 'es', 'it'].includes(browserLang)) {
    return browserLang;
  }
  
  return 'en'; // default language
};

i18next.init({
  resources,
  lng: getSavedLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
