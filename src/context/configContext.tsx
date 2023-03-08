import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import {
  ACCESSIBILITY_STORAGE_KEY,
  DEFAULT_ACCESSIBILITY_VALUE,
  DEFAULT_DIFFICULTY_VALUE,
  DEFAULT_LANGUAGE_VALUE,
  DIFFICULTY_STORAGE_KEY,
  LANGUAGE_STORAGE_KEY,
} from '../constants';
import {get, set} from '../storage';
import {
  AccessibilityType,
  AppProviderProps,
  ConfigContextType,
  DifficultyType,
  LanguageType,
  StorageKeyType,
} from '../types';

export const ConfigContext = createContext<ConfigContextType>(
  {} as ConfigContextType,
);

export const ConfigProvider = ({children}: AppProviderProps) => {
  const [difficulty, setDifficulty] = useState<DifficultyType>(
    DEFAULT_DIFFICULTY_VALUE,
  );
  const [language, setLanguage] = useState<LanguageType>(
    DEFAULT_LANGUAGE_VALUE,
  );
  const [accessibility, setAccessibility] = useState<AccessibilityType>(
    DEFAULT_ACCESSIBILITY_VALUE,
  );

  const getValues = async <T,>(
    storageKey: StorageKeyType,
    setState: Dispatch<SetStateAction<T>>,
  ) => {
    const value = (await get(storageKey)) as T | undefined | null;

    if (value) {
      setState(value);
    }
  };

  useEffect(() => {
    if (difficulty !== DEFAULT_DIFFICULTY_VALUE) {
      set(DIFFICULTY_STORAGE_KEY, difficulty);
    }
  }, [difficulty]);

  useEffect(() => {
    if (accessibility !== DEFAULT_ACCESSIBILITY_VALUE) {
      set(ACCESSIBILITY_STORAGE_KEY, accessibility);
    }
  }, [accessibility]);

  useEffect(() => {
    if (language !== DEFAULT_LANGUAGE_VALUE) {
      set(LANGUAGE_STORAGE_KEY, language);
    }
  }, [language]);

  useEffect(() => {
    getValues<DifficultyType>(DIFFICULTY_STORAGE_KEY, setDifficulty);
    getValues<AccessibilityType>(ACCESSIBILITY_STORAGE_KEY, setAccessibility);
    getValues<LanguageType>(LANGUAGE_STORAGE_KEY, setLanguage);
  }, []);

  return (
    <ConfigContext.Provider
      value={{
        difficulty,
        setDifficulty,
        accessibility,
        setAccessibility,
        language,
        setLanguage,
      }}>
      {children}
    </ConfigContext.Provider>
  );
};
