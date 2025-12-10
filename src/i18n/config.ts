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

// Get saved language from localStorage or use default
const getSavedLanguage = () => {
  const saved = localStorage.getItem('language');

  // If no saved language or invalid language, default to English
  if (!saved || !['en', 'zh', 'es', 'it'].includes(saved)) {
    // Clear any invalid language settings and set to English
    localStorage.setItem('language', 'en');
    return 'en';
  }

  return saved;
};

i18next.init({
  resources,
  lng: getSavedLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
  detection: {
    caches: ['localStorage'],
  },
  initImmediate: false,
});

export default i18next;
