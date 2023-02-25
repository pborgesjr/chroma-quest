import {AboutScreen, GameScreen, HomeScreen} from '../screens';

export const screens = [
  {
    name: 'Game',
    component: GameScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Home',
    component: HomeScreen,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'About',
    component: AboutScreen,
    options: {
      headerShown: false,
    },
  },
] as const;
