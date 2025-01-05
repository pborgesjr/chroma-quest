import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale} from '../../utils';

import {Button} from '../Button/Button';

import {styles} from './styles';
import {Typography} from '../Typography/Typography';
import {useTranslation} from 'react-i18next';

type HeaderProps = {
  route: string;
  onPress?: () => void;
};

export const Header = ({onPress = () => {}, route}: HeaderProps) => {
  const {top} = useSafeAreaInsets();
  const {t} = useTranslation();

  return (
    <View style={[styles.container, {marginTop: scale(top)}]}>
      <Button
        textProps={{text: '<', variation: 'title'}}
        onPress={onPress}
        buttonStyle={styles.button}
      />
      <Typography text={t(route.toLowerCase())} />
    </View>
  );
};
