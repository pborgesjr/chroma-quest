import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
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
  const [difficulty, setDifficultyState] = useState<DifficultyType>(
    DEFAULT_DIFFICULTY_VALUE,
  );
  const [language, setLanguageState] = useState<LanguageType>(
    DEFAULT_LANGUAGE_VALUE,
  );
  const [accessibility, setAccessibilityState] = useState<AccessibilityType>(
    DEFAULT_ACCESSIBILITY_VALUE,
  );

  const setDifficulty = (value: DifficultyType) => {
    if (difficulty !== value) {
      setDifficultyState(value);
      set(DIFFICULTY_STORAGE_KEY, value);
    }
  };

  const setAccessibility = (value: AccessibilityType) => {
    if (accessibility !== value) {
      setAccessibilityState(value);
      set(ACCESSIBILITY_STORAGE_KEY, value);
    }
  };

  const setLanguage = (value: LanguageType) => {
    if (language !== value) {
      setLanguageState(value);
      set(LANGUAGE_STORAGE_KEY, value);
    }
  };

  const getValues = async <T,>(
    storageKey: StorageKeyType,
    setState: Dispatch<SetStateAction<T>>,
  ) => {
    const value = (await get(storageKey)) as T | undefined | null;

    if (value) {
      setState(prevState => (prevState === value ? prevState : value));
    }
  };

  const getAllConfigValues = useCallback(async () => {
    await getValues<DifficultyType>(DIFFICULTY_STORAGE_KEY, setDifficultyState);
    await getValues<AccessibilityType>(
      ACCESSIBILITY_STORAGE_KEY,
      setAccessibilityState,
    );
    await getValues<LanguageType>(LANGUAGE_STORAGE_KEY, setLanguageState);
  }, [getValues]);

  useEffect(() => {
    getAllConfigValues();
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
