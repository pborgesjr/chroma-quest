import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {ColorValueButton} from '../../components';
import {GameContext} from '../../context';
import {useGameValues} from '../../hooks';
import {ValueColorType} from '../../types';

export const Game = () => {
  const {gameValues, userGameValues, setUserGameValues} = useGameValues();
  const {gameState} = useContext(GameContext);

  const handlePress = (value: ValueColorType) => {
    setUserGameValues(prevState => [...prevState, value]);
  };

  //TODO: controlar o gameState para impedir jogadas erradas
  const isButtonDisabled = false;

  return (
    <View>
      <ColorValueButton onPress={handlePress} value={1} />
      <ColorValueButton onPress={handlePress} value={2} />
      <ColorValueButton onPress={handlePress} value={3} />
      <ColorValueButton onPress={handlePress} value={4} />

      <Text>Gabarito: {gameValues}</Text>
      <Text>user: {userGameValues}</Text>
      <Text>GameState: {gameState}</Text>
    </View>
  );
};
