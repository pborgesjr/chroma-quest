import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {Button} from '../../components';
import {GameContext} from '../../context';
import {useGameValues} from '../../hooks';

export const Game = () => {
  const {gameValues, userGameValues, setUserGameValues} = useGameValues();
  const {gameState} = useContext(GameContext);

  const handlePress = (value: number) => {
    setUserGameValues(prevState => [...prevState, value]);
  };

  //TODO: controlar o gameState para impedir jogadas erradas
  const isButtonDisabled = false;

  return (
    <View>
      <Button
        title="1"
        value={1}
        onPress={handlePress}
        disabled={isButtonDisabled}
      />
      <Button
        title="2"
        value={2}
        onPress={handlePress}
        disabled={isButtonDisabled}
      />
      <Button
        title="3"
        value={3}
        onPress={handlePress}
        disabled={isButtonDisabled}
      />
      <Button
        title="4"
        value={4}
        onPress={handlePress}
        disabled={isButtonDisabled}
      />

      <Text>Gabarito: {gameValues}</Text>
      <Text>user: {userGameValues}</Text>
      <Text>GameState: {gameState}</Text>
    </View>
  );
};
