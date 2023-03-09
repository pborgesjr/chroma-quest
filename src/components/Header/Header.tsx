import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale} from '../../utils';

import {Button} from '../Button/Button';

import {styles} from './styles';

type HeaderProps = {
  onPress?: () => void;
};

export const Header = ({onPress = () => {}}: HeaderProps) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.container, {marginTop: scale(top)}]}>
      <Button
        textProps={{text: '<', variation: 'title'}}
        onPress={onPress}
        buttonStyle={styles.button}
      />
    </View>
  );
};
