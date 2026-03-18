import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import itTran from './locales/it.json';
import enTran from './locales/en.json';
import alTran from './locales/al.json';

const resources = {
    it: { translation: itTran },
    en: { translation: enTran },
    al: { translation: alTran }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'it',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
