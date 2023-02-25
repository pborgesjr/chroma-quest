import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {GameProvider} from './src/context';
import {StackNavigator} from './src/routes';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <GameProvider>
        <SafeAreaView style={{flex: 1}}>
          <StackNavigator />
        </SafeAreaView>
      </GameProvider>
    </NavigationContainer>
  );
}

export default App;
