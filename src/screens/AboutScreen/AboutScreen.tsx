import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Typography} from '../../components';
import {Images} from '../../assets';
import {RootStackParamList} from '../../types';
import {testIDs} from '../../constants';
import {styles} from './styles';

const {aboutTheGame, heartImage} = testIDs.screens.about;
const {Heart} = Images;

type AboutScreenProps = NativeStackScreenProps<RootStackParamList, 'About'>;

export const AboutScreen = ({navigation}: AboutScreenProps) => {
  const {t} = useTranslation();

  useEffect(() => {
    navigation.setOptions({
      title: t('about'),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Typography
        text={t('aboutTheGame')}
        textStyle={styles.text}
        containerStyle={styles.textContainer}
        textTestID={aboutTheGame}
      />

      <Image source={Heart} style={styles.image} testID={heartImage} />
    </View>
  );
};
