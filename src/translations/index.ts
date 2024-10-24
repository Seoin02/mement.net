import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEN from './en/translation.json'
import translationJA from './ja/translation.json'
import translationKO from './ko/translation.json'

type TLanguageType = "ko" | "en" | "ja";

export const saveLanguageToStorage = (language: string) => {
    localStorage.setItem("language", language);
  };
  
export const getLanguageFromStorage = (): TLanguageType | null => {
  return localStorage.getItem("language") as TLanguageType | null;
};

const initialLanguage: TLanguageType = getLanguageFromStorage() || "en";

const resources = {
  en: {
    translation: translationEN,
  },
  ja: {
    translation: translationJA,
  },
  ko: {
    translation: translationKO,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: initialLanguage,
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (language) => {
  saveLanguageToStorage(language);
});

export default i18n