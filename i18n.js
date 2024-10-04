import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./public/locales/en/common.json";
import translationPT from "./public/locales/pt_BR/common.json";

const resources = {
  en: {
    translation: translationEN,
  },
  pt_BR: {
    translation: translationPT,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt_BR",
  fallbackLng: "pt_BR",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
