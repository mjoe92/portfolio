import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

import { Language } from "./language";
import { Constants } from "../utils/constants";
import i18n from "i18next";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: Language.ENGLISH,
    languages: [Language.ENGLISH, Language.GERMAN, Language.HUNGARIAN],

    interpolation: {
      escapeValue: false,
    },

    ns: ['translation', 'common'],
    defaultNS: 'translation',
    fallbackNS: 'common',

    saveMissing: true,

    backend: {
      loadPath: (language: string, namespace: string) => {
        const basePath = `${process.env.PUBLIC_URL}/locales`;
        if (namespace.includes('common')) {
          return [basePath, "common.json"].join(Constants.SLASH);
        }
  
        return [basePath, `${language}.json`].join(Constants.SLASH);
      },
    },
    react: {
      useSuspense: true,
      defaultTransParent: "div",
      transEmptyNodeValue: Constants.EMPTY,
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
      transWrapTextNodes: Constants.EMPTY,
    },
    
    // debug: true,
  });

export default i18n;
