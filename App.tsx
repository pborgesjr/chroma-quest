import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {GameProvider} from './src/context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screens} from './src/routes';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <GameProvider>
        <SafeAreaView style={{flex: 1}}>
          <Stack.Navigator>
            {screens.map(screen => (
              <Stack.Screen key={screen.name} {...screen} />
            ))}
          </Stack.Navigator>
        </SafeAreaView>
      </GameProvider>
    </NavigationContainer>
  );
}

export default App;
