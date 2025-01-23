import React from 'react';
import {View} from 'react-native';

import {Button} from '../Button/Button';

import {styles} from './styles';
import {Typography} from '../Typography/Typography';
import {useTranslation} from 'react-i18next';

type HeaderProps = {
  route: string;
  onPress?: () => void;
};

export const Header = ({onPress = () => {}, route}: HeaderProps) => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Button
        textProps={{text: '<', variation: 'title'}}
        onPress={onPress}
        buttonStyle={styles.button}
      />
      <Typography text={t(route.toLowerCase())} />
    </View>
  );
};
