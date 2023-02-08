import React from 'react';
import {SafeAreaView} from 'react-native';
import {GameProvider} from './src/context';
import {Game} from './src/screens/Game/GameScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <GameProvider>
        <Game />
      </GameProvider>
    </SafeAreaView>
  );
}

export default App;
