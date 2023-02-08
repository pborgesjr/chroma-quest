import React from 'react';
import {
  ButtonProps as RNButtonProps,
  Text,
  TouchableOpacity,
} from 'react-native';

interface ButtonProps extends Omit<RNButtonProps, 'onPress'> {
  value: number;
  onPress: (value: number) => void;
}

export const Button = ({title, value, onPress, ...rest}: ButtonProps) => {
  const handlePress = () => {
    onPress(value);
  };

  return (
    <TouchableOpacity
      {...rest}
      onPress={handlePress}
      style={{padding: 20, backgroundColor: 'red', marginBottom: 20}}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
