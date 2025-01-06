import {
  AboutScreen,
  GameScreen,
  HomeScreen,
  PauseScreen,
  SettingsScreen,
  FinishedScreen,
} from '../screens';

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
  {
    name: 'Pause',
    component: PauseScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Finished',
    component: FinishedScreen,
    options: {
      headerShown: false,
    },
  },
] as const;
