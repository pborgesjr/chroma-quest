import React from 'react';
import {View} from 'react-native';
import {scale} from '../../utils';
import {Button} from '../Button/Button';
import {Typography} from '../Typography/Typography';

type HeaderProps = {
  title?: string;
  onPress?: () => void;
};

export const Header = ({title = '', onPress = () => {}}: HeaderProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: scale(24),
        marginHorizontal: scale(16),
      }}>
      <Button
        textProps={{text: '<'}}
        onPress={onPress}
        buttonStyle={{marginRight: scale(24)}}
      />
      <Typography text={title} />
    </View>
  );
};
