import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {ColorValueButton} from '../../components';
import {GameContext} from '../../context';
import {useGameValues} from '../../hooks';
import {useButtonsRefs} from '../../hooks/useButtonsRefs';
import {ValueColorType} from '../../types';

export const Game = () => {
  const {
    buttonsRefs,
    firstButtonRef,
    fourthButtonRef,
    secondButtonRef,
    thirdButtonRef,
  } = useButtonsRefs();

  const {gameValues, userGameValues, setUserGameValues} =
    useGameValues(buttonsRefs);
  const {gameState} = useContext(GameContext);

  const handlePress = (value: ValueColorType) => {
    setUserGameValues(prevState => [...prevState, value]);
  };

  const isButtonDisabled = gameState !== 'user';

  return (
    <View style={{backgroundColor: '#333', height: '100%'}}>
      <ColorValueButton
        onPress={handlePress}
        value={1}
        isDisabled={isButtonDisabled}
        ref={firstButtonRef}
      />
      <ColorValueButton
        onPress={handlePress}
        value={2}
        isDisabled={isButtonDisabled}
        ref={secondButtonRef}
      />
      <ColorValueButton
        onPress={handlePress}
        value={3}
        isDisabled={isButtonDisabled}
        ref={thirdButtonRef}
      />
      <ColorValueButton
        onPress={handlePress}
        value={4}
        isDisabled={isButtonDisabled}
        ref={fourthButtonRef}
      />

      <Text>Gabarito: {gameValues}</Text>
      <Text>user: {userGameValues}</Text>
      <Text>GameState: {gameState}</Text>
    </View>
  );
};
