import React, {createContext} from 'react';
import {AppProviderProps} from '../types';

type ConfigContextType = {};

export const ConfigContext = createContext<ConfigContextType>(
  {} as ConfigContextType,
);

export const ConfigProvider = ({children}: AppProviderProps) => {
  return <ConfigContext.Provider value={{}}>{children}</ConfigContext.Provider>;
};
