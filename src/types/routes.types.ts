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

export type RouteName = keyof RootStackParamList;
