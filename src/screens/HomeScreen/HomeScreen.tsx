import React from 'react';
import {Image, View} from 'react-native';
import {Typography, Button, Container} from '../../components';
import {Images} from '../../assets';

const {Logo} = Images;

import {styles} from './styles';
import {useTranslation} from 'react-i18next';
//TODO: fix screen type
export const HomeScreen = ({navigation}) => {
  const {t} = useTranslation();

  const handleNavigate = (destination: string) => {
    navigation.navigate(destination);
  };
  return (
    <Container>
      <View style={styles.alignCenter}>
        <Image source={Logo} style={styles.logo} />
        <Typography
          variation="title"
          text={t('appName')}
          containerStyle={styles.marginBottomLarge}
          textStyle={styles.titleText}
        />
        <View style={styles.alignCenter}>
          <Button
            textProps={{text: 'start'}}
            onPress={() => handleNavigate('Game')}
          />
          <Button
            buttonStyle={styles.marginTopMedium}
            textProps={{text: 'settings'}}
            onPress={() => handleNavigate('Settings')}
          />
          <Button
            buttonStyle={styles.marginTopMedium}
            textProps={{text: 'about'}}
            onPress={() => handleNavigate('About')}
          />
        </View>
      </View>
    </Container>
  );
};
