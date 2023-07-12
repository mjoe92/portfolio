// import i18n from 'i18next';
// import I18NextHttpBackend from "i18next-http-backend";
// import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
// import {initReactI18next} from "react-i18next";

// import the original type declarations
import 'react-i18next';
// import all namespaces (for the default language, only)
import tEn from 'locales/en/translation.json';


// react-i18next versions lower than 11.11.0
declare module 'react-i18next' {
    // and extend them!
    interface Resources {
        en: typeof tEn;
    }
}

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
    // and extend them!
    interface CustomTypeOptions {
        // custom namespace type if you changed it
        defaultNS: 'ns1';
        // custom resources type
        resources: {
            ns1: typeof tEn;
        };
    }
}

// export default function a(): void {
//     i18n.use(I18NextHttpBackend).use(I18nextBrowserLanguageDetector).use(initReactI18next.init({
//         fallbackLng: 'EN',
//         debug: true,
//         detection: {
//             order: ['queryString', 'cookie'],
//             cache: ['cookie']
//         },
//         interpolation: {
//             escapeValue: false
//         }
//     })
// }
