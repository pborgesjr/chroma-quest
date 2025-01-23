import {ReactNode} from 'react';

export type AppProviderProps = {
  children: ReactNode;
};

export type StorageKeyType = 'language' | 'difficulty' | 'accessibility';
export type DifficultyType = 'easy' | 'normal' | 'hard';
export type LanguageType = 'en' | 'ptBR';
export type AccessibilityType =
  | 'normal'
  | 'deuteranopia'
  | 'protanopia'
  | 'tritanopia';

export type ConfigContextType = {
  difficulty: DifficultyType;
  setDifficulty: (value: DifficultyType) => void;
  accessibility: AccessibilityType;
  setAccessibility: (value: AccessibilityType) => void;
  language: LanguageType;
  setLanguage: (value: LanguageType) => void;
};

export type OptionType = {
  text: string;
  onPress: () => void;
  description?: string;
  value?: string;
};
