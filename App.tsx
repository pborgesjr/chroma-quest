import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import {ConfigProvider, GameProvider} from './src/context';
import {StackNavigator} from './src/routes';
import './src/locale/i18n';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <GameProvider>
        <ConfigProvider>
          <SafeAreaView style={{flex: 1}}>
            <StackNavigator />
          </SafeAreaView>
        </ConfigProvider>
      </GameProvider>
    </NavigationContainer>
  );
}

export default App;
