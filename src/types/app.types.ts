import {Dispatch, ReactNode, SetStateAction} from 'react';

export type AppProviderProps = {
  children: ReactNode;
};

export type StorageKeyType = 'language' | 'difficulty' | 'accessibility';
export type DifficultyType = 'easy' | 'normal' | 'hard';
export type LanguageType = 'english' | 'ptBR';
export type AccessibilityType =
  | 'normal'
  | 'deuteranopia'
  | 'protanopia'
  | 'tritanopia'
  | 'numbers';

export type ConfigContextType = {
  difficulty: DifficultyType;
  setDifficulty: Dispatch<SetStateAction<DifficultyType>>;
  accessibility: AccessibilityType;
  setAccessibility: Dispatch<SetStateAction<AccessibilityType>>;
  language: LanguageType;
  setLanguage: Dispatch<SetStateAction<LanguageType>>;
};

export type OptionType = {
  text: string;
  onPress: () => void;
  description?: string;
  value?: string;
};
