import React from 'react';
import {View, Text, ViewStyle, TextStyle, StyleSheet} from 'react-native';

import {styles} from './styles';

type TypographyVariationType =
  | 'title'
  | 'heading'
  | 'body'
  | 'description'
  | 'smallDescription';
type ThemeType = 'light' | 'dark';

export type TypographyProps = {
  /**Text to be displayed*/
  text: string;
  /**TestID to be used in the Text component */
  textTestID?: string;
  /**TestID to be used in the View component wrapping the Text component */
  containerTestID?: string;
  /**Custom style for the View component wrapping the Text component */
  containerStyle?: ViewStyle;
  /**Custom style for the text */
  textStyle?: TextStyle;
  /**Pre defined styling for the text */
  variation?: TypographyVariationType;
  /**Pre defined color styling for the text */
  theme?: ThemeType;
  /**If true, it renders a pre defined textShadow styling for the text */
  shadow?: boolean;
};

export const Typography = ({
  containerStyle,
  containerTestID,
  textStyle,
  text,
  textTestID,
  theme = 'light',
  shadow,
  variation = 'body',
}: TypographyProps) => {
  const customTextStyle = StyleSheet.flatten([
    styles.text,
    styles[variation],
    styles[theme],
    shadow && styles.shadow,
    textStyle,
  ]);

  return (
    <View
      style={StyleSheet.flatten([styles.container, containerStyle])}
      testID={containerTestID}>
      <Text style={customTextStyle} testID={textTestID}>
        {text}
      </Text>
    </View>
  );
};
