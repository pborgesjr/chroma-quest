import {get} from '../storage';

import ptBR from './ptBR.json';
import en from './en.json';
import {STORAGE_LOCALE} from '../constants';

export const getLocale = async () => {
  const currentLocale = await get(STORAGE_LOCALE);

  switch (currentLocale) {
    case 'ptBR':
      return ptBR;
    case 'en':
      return en;
    default:
      return ptBR;
  }
};
