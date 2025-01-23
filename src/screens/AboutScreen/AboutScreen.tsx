import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, ScrollView} from 'react-native';

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
      <ScrollView
        contentContainerStyle={styles.container}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <Typography
          text={t('aboutTheGame')}
          textStyle={styles.text}
          containerStyle={styles.textContainer}
          textTestID={aboutTheGame}
        />

        <Image source={Logo} style={styles.image} testID={logoImage} />
      </ScrollView>
    </ScreenContainer>
  );
};
