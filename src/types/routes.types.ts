export type OptionType = {
  text: string;
  description?: string;
  onPress?: () => void;
  value?: string;
};

interface SettingsRouteParamsType {
  settings: {
    storageKey?: string;
    showSelected?: boolean;
  };
  options: OptionType[];
}

export type RootStackParamList = {
  Home: undefined;
  Game: undefined;
  About: undefined;
  Settings: SettingsRouteParamsType;
};

export type RouteName = keyof RootStackParamList;
