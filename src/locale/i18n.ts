import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import ptBR from './ptBR.json';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  resources: {
    en,
    ptBR,
  },
});
