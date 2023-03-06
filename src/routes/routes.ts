import {AboutScreen, GameScreen, HomeScreen, SettingsScreen} from '../screens';

export const screens = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Game',
    component: GameScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'About',
    component: AboutScreen,
    options: {
      headerShown: true,
    },
  },
  {
    name: 'Settings',
    component: SettingsScreen,
    options: {
      headerShown: false,
    },
  },
] as const;
