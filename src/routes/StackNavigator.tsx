import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Container, Header} from '../components';
import {RootStackParamList} from '../types';
import {screens} from './routes';

export const StackNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTransparent: true,
        header: ({navigation, route}) => (
          <Header title={route.name} onPress={navigation.goBack} />
        ),
      }}>
      {screens.map(screen => (
        <Stack.Screen
          key={screen.name}
          {...screen}
          component={undefined}
          children={props => (
            <Container>
              {/**TODO: fix type */}
              <screen.component {...props} />
            </Container>
          )}
        />
      ))}
    </Stack.Navigator>
  );
};
