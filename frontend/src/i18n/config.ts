import {initReactI18next} from "react-i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";

import english from "./translations/en.json";
import german from "./translations/de.json";
import hungarian from "./translations/hu.json";
import russian from "./translations/ru.json";
import unique from "./translations/unique.json"
import { Language } from "./language";
import { Constants } from "../utils/constants";
import i18next from "i18next";

i18next
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init({
    load: 'languageOnly',
    fallbackLng: Language.ENGLISH,
    debug: true,
    resources: {
      en: {
        translation: english,
        common: unique,
      },
      de: {
        translation: german,
        common: unique,
      },
      hu: {
        translation: hungarian,
        common: unique,
      },
      ru: {
        translation: russian,
        common: unique,
      },
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
      defaultTransParent: "div",
      transEmptyNodeValue: Constants.EMPTY,
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
      transWrapTextNodes: Constants.EMPTY,
    },
  });

export default i18next;
