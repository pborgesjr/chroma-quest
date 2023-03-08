import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {Button, Typography} from '../../components';
import {GameContext} from '../../context';
import {RootStackParamList} from '../../types';

import {styles} from './styles';

type PauseScreenProps = NativeStackScreenProps<RootStackParamList, 'Pause'>;

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
        <Button textProps={{text: t('restart')}} onPress={handleRestart} />
      </View>
    </View>
  );
};
