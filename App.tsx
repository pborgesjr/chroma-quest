import React from 'react';
import {SafeAreaView} from 'react-native';
import {Game} from './src/screens/Game/GameScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Game />
    </SafeAreaView>
  );
}

export default App;
