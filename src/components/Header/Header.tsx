import React from 'react';
import {View} from 'react-native';

import {Button} from '../Button/Button';
import {Typography} from '../Typography/Typography';

import {styles} from './styles';

type HeaderProps = {
  title?: string;
  onPress?: () => void;
};

export const Header = ({title = '', onPress = () => {}}: HeaderProps) => {
  return (
    <View style={styles.container}>
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
