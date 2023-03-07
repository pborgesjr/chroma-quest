import React, {useContext} from 'react';
import {View, Image} from 'react-native';

import {
  Button,
  ColorValueButton,
  ScreenContainer,
  Typography,
} from '../../components';
import {GameContext} from '../../context';
import {useGameValues, useButtonsRefs} from '../../hooks';
import {RootStackParamList, ValueColorType} from '../../types';
import {Images} from '../../assets';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const {Fire} = Images;

type GameScreenProps = NativeStackScreenProps<RootStackParamList, 'Game'>;

export const GameScreen = ({navigation}: GameScreenProps) => {
  const {t} = useTranslation();

  const {
    buttonsRefs,
    firstButtonRef,
    fourthButtonRef,
    secondButtonRef,
    thirdButtonRef,
  } = useButtonsRefs();

  const {gameValues, setUserGameValues} = useGameValues(buttonsRefs);
  const {gameState, setGameState} = useContext(GameContext);

  const handlePress = (value: ValueColorType) => {
    setUserGameValues(prevState => [...prevState, value]);
  };

  const handlePause = () => {
    setGameState('paused');
    navigation.navigate('Pause');
  };

  const userScore =
    gameValues.length > 0 ? (gameValues.length - 1).toString() : '0';

  const isButtonDisabled = gameState !== 'user';

  return (
    <ScreenContainer>
      <View style={styles.wrapper}>
        <View style={styles.alignItemsCenter}>
          <Button
            textProps={{text: t('pause'), variation: 'heading'}}
            onPress={handlePause}
            /**TODO: insert a toast to warn the user that is impossible to pause while replaying */
            disabled={gameState !== 'user'}
          />
          <View style={styles.buttonsContainer}>
            <View style={[styles.marginRight, styles.marginBottom]}>
              <ColorValueButton
                onPress={handlePress}
                value={1}
                isDisabled={isButtonDisabled}
                ref={firstButtonRef}
              />
            </View>
            <View>
              <ColorValueButton
                onPress={handlePress}
                value={2}
                isDisabled={isButtonDisabled}
                ref={secondButtonRef}
              />
            </View>

            <View style={styles.marginRight}>
              <ColorValueButton
                onPress={handlePress}
                value={3}
                isDisabled={isButtonDisabled}
                ref={thirdButtonRef}
              />
            </View>

            <View>
              <ColorValueButton
                onPress={handlePress}
                value={4}
                isDisabled={isButtonDisabled}
                ref={fourthButtonRef}
              />
            </View>
          </View>
        </View>

        <View style={styles.fire}>
          <Image source={Fire} style={styles.image} />
          <Typography
            text={userScore}
            textStyle={styles.scoreText}
            containerStyle={styles.scoreContainer}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};
