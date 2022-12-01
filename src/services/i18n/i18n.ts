import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// ********** RESOURCE **********
import enTranslation from "services/i18n/locales/en.json";
import idTranslation from "services/i18n/locales/id.json";

const resources = {
  en: {
    translation: enTranslation
  },
  id: {
    translation: idTranslation
  }
}

export default i18next.use(initReactI18next).init({
  lng: "en",
  resources,
  debug: false,
  ns: ["translation"],
  defaultNS: ["translation"]
});