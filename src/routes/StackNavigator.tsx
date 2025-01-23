import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Header} from '../components';
import {
  AboutScreen,
  AccessibilityScreen,
  DifficultyScreen,
  FinishedScreen,
  GameScreen,
  HomeScreen,
  LanguageScreen,
  PauseScreen,
  SettingsScreen,
} from '../screens';
import {RootStackParamList} from './routes.types';

export const StackNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        statusBarStyle: 'light',
        statusBarTranslucent: true,
        animation: 'slide_from_right',
        header: ({navigation, route}) => (
          <Header onPress={navigation.goBack} route={route.name} />
        ),
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Game"
        component={GameScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Difficulty"
        component={DifficultyScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Accessibility"
        component={AccessibilityScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Language"
        component={LanguageScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Pause"
        component={PauseScreen}
        options={{
          headerShown: false,
          animation: 'fade',
          presentation: 'transparentModal',
        }}
      />
      <Stack.Screen
        name="Finished"
        component={FinishedScreen}
        options={{
          headerShown: false,
          animation: 'fade',
          presentation: 'transparentModal',
        }}
      />
    </Stack.Navigator>
  );
};
