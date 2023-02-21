import React from 'react';
import {StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AppProviderProps} from '../../types';
import {COLOR_PALETTE} from '../../theme';

const {darkPurple, pink, purple} = COLOR_PALETTE.gradient.normal;

import {styles} from './styles';

export const Container = ({children}: AppProviderProps) => {
  return (
    <LinearGradient colors={[darkPurple, purple, pink]} style={styles.gradient}>
      <View style={styles.container}>
        <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="light-content"
        />
        {children}
      </View>
    </LinearGradient>
  );
};
