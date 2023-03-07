import React from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {Typography, TypographyProps} from '../Typography/Typography';

import {styles} from './styles';

export type ButtonProps = {
  onPress: () => void;
  testID?: string;
  buttonStyle?: ViewStyle;
  textProps: TypographyProps;
  showBorder?: boolean;
  disabled?: boolean;
};

export const Button = ({
  onPress,
  testID,
  buttonStyle,
  textProps,
  showBorder,
  disabled,
}: ButtonProps) => {
  const customButtonStyles = StyleSheet.flatten([
    styles.button,
    showBorder && styles.border,
    buttonStyle,
  ]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={customButtonStyles}
        testID={testID}
        disabled={disabled}>
        <Typography {...textProps} />
      </TouchableOpacity>
    </View>
  );
};
