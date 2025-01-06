import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Game: undefined;
  About: undefined;
  Settings: undefined;
  Difficulty: undefined;
  Accessibility: undefined;
  Language: undefined;
  Pause: undefined;
};

export type AboutScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'About'
>;

export type GameScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Game'
>;

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type SettingsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Settings'
>;

export type DifficultyScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Difficulty'
>;

export type AccessibilityScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Accessibility'
>;

export type LanguageScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Language'
>;

export type PauseScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Pause'
>;

export type RouteName = keyof RootStackParamList;
