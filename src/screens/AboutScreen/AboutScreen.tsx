import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ScreenContainer, Typography} from '../../components';
import {Images} from '../../assets';
import {RootStackParamList} from '../../types';
import {testIDs} from '../../constants';
import {styles} from './styles';

const {aboutTheGame, logoImage} = testIDs.screens.about;
const {Logo} = Images;

type AboutScreenProps = NativeStackScreenProps<RootStackParamList, 'About'>;

export const AboutScreen = ({navigation}: AboutScreenProps) => {
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
