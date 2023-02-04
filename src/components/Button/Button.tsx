import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type ButtonProps = {
  accessibility?: boolean;
  text?: string;
  value: number;
  onPress: (value: number) => void;
};

export const Button = ({text, value, onPress}: ButtonProps) => {
  const handlePress = () => {
    onPress(value);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{padding: 20, backgroundColor: 'red', marginBottom: 20}}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
