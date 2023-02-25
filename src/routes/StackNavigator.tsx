import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Header, Typography} from '../components';
import {screens} from './routes';

export const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        /**TODO: remover Header de dentro de Container e utilizar por aqui. Renderizar através do headerShown. Props serão passadas via navigation.setOptions */
        headerTransparent: true,
      }}>
      {screens.map(screen => (
        <Stack.Screen key={screen.name} {...screen} />
      ))}
    </Stack.Navigator>
  );
};
