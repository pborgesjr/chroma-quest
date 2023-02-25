import React, {useContext} from 'react';
import {View} from 'react-native';
import {
  Button,
  ColorValueButton,
  Container,
  Typography,
} from '../../components';
import {GameContext} from '../../context';
import {useGameValues, useButtonsRefs} from '../../hooks';
import {ValueColorType} from '../../types';

export const GameScreen = () => {
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
    <Container>
      <>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <View>
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
          </View>
          <View>
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
          </View>
        </View>

        {/*   <Button
          onPress={() => {}}
          showBorder
          textProps={{text: 'show numbers', shadow: true}}
        />

        <Typography
          text={`Gabarito: ${gameValues}`}
          variation="smallDescription"
        />
        <Typography
          text={`User: ${userGameValues}`}
          shadow
          variation="smallDescription"
        />
        <Typography
          text={`GameState: ${gameState}`}
          theme="dark"
          variation="smallDescription"
        /> */}
      </>
    </Container>
  );
};
