import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale} from '../../utils';

import {Button} from '../Button/Button';
import {Typography} from '../Typography/Typography';

import {styles} from './styles';

type HeaderProps = {
  title?: string;
  onPress?: () => void;
};

export const Header = ({title = '', onPress = () => {}}: HeaderProps) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.container, {marginTop: scale(top)}]}>
      <Button
        textProps={{text: '<', variation: 'title'}}
        onPress={onPress}
        buttonStyle={styles.button}
      />
      <Typography
        text={title}
        variation="heading"
        containerStyle={styles.titleContainer}
      />
    </View>
  );
};
