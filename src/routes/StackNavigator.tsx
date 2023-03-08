import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Header} from '../components';
import {
  AboutScreen,
  DifficultyScreen,
  GameScreen,
  HomeScreen,
  PauseScreen,
  SettingsScreen,
} from '../screens';
import {RootStackParamList} from '../types';

export const StackNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTransparent: true,
        presentation: 'card',
        header: ({navigation, route}) => (
          <Header title={route.name} onPress={navigation.goBack} />
        ),
      }}>
      {/* {screens.map((screen, index) => <Stack.Screen key={index} {...screen}/>)} */}
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
        name="Pause"
        component={PauseScreen}
        options={{headerShown: false, presentation: 'transparentModal'}}
      />
    </Stack.Navigator>
  );
};
