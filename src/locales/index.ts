import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEN from './en/translation.json'
import translationJA from './ja/translation.json'
import translationKO from './ko/translation.json'

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

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  detection: {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage'],
  },
  interpolation: {
    escapeValue: false,
  },
})

export default i18n