import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {Button, Typography} from '../../components';
import {GameContext} from '../../context';
import {PauseScreenProps} from '../../routes';

import {styles} from './styles';

export const PauseScreen = ({navigation}: PauseScreenProps) => {
  const {t} = useTranslation();
  const {setGameState} = useContext(GameContext);

  const handleRestart = () => {
    setGameState('initial');
    navigation.goBack();
  };

  const handleResume = () => {
    setGameState('user');
    navigation.goBack();
  };

  const handleOpenSettings = () => {
    navigation.navigate('Settings');
  };

  const handleExit = () => {
    setGameState('initial');
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <Typography
        text={t('gameIsPaused')}
        variation="title"
        textStyle={styles.titleText}
      />
      <View style={styles.buttons}>
        <Button
          textProps={{text: t('continue')}}
          buttonStyle={styles.buttonMargin}
          onPress={handleResume}
        />
        <Button
          textProps={{text: t('settings')}}
          buttonStyle={styles.buttonMargin}
          onPress={handleOpenSettings}
        />
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
