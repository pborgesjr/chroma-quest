import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, View} from 'react-native';
import {Button, Typography} from '../../components';
import {GameContext} from '../../context';
import {FinishedScreenProps} from '../../routes';

import {styles} from './styles';
import {Images} from '../../assets';

const Fire = Images.Fire;

export const FinishedScreen = ({navigation, route}: FinishedScreenProps) => {
  const {userScore} = route.params;
  const {t} = useTranslation();
  const {setGameState} = useContext(GameContext);

  const handleRestart = () => {
    setGameState('initial');
    navigation.goBack();
  };

  const handleExit = () => {
    setGameState('initial');
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <Typography
        text={'Game Over'}
        variation="title"
        textStyle={styles.titleText}
      />

      <View style={styles.fire}>
        <Image source={Fire} style={styles.image} />
        <Typography
          text={userScore}
          textStyle={styles.scoreText}
          containerStyle={styles.scoreContainer}
        />
      </View>

      <View style={styles.buttons}>
        <Button
          textProps={{text: t('restart')}}
          onPress={handleRestart}
          buttonStyle={styles.buttonMargin}
        />
        <Button textProps={{text: t('quit')}} onPress={handleExit} />
      </View>
    </View>
  );
};
