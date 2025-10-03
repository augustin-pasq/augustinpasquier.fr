import i18n from "i18next"
import {initReactI18next} from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import Backend from "i18next-http-backend"
import yaml from "js-yaml"

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        languages: ["en-US", "fr-FR"],
        fallbackLng: "fr-FR",
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.yaml",
            parse: (data) => yaml.load(data)
        },
        detection: {
            cache: ["localStorage"],
            order: ["localStorage", "navigator"],
        }
    })

export default i18n
