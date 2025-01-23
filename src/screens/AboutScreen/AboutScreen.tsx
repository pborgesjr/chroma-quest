import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, View} from 'react-native';

import {ScreenContainer, Typography} from '../../components';
import {Images} from '../../assets';
import {testIDs} from '../../constants';
import {styles} from './styles';

const {aboutTheGame, logoImage} = testIDs.screens.about;
const {Logo} = Images;

export const AboutScreen = () => {
  const {t} = useTranslation();

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Typography
          text={t('aboutTheGame')}
          textStyle={styles.text}
          containerStyle={styles.textContainer}
          textTestID={aboutTheGame}
        />

        <Image source={Logo} style={styles.image} testID={logoImage} />
      </View>
    </ScreenContainer>
  );
};
