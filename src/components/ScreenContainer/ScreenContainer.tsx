import React, {ReactNode} from 'react';
import {StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLOR_PALETTE} from '../../theme';
import {styles} from './styles';

const {darkPurple, pink, purple} = COLOR_PALETTE.gradient.normal;

interface ContainerProps {
  children: ReactNode;
}

export const ScreenContainer = ({children}: ContainerProps) => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <LinearGradient colors={[darkPurple, purple, pink]} style={styles.gradient}>
      <View
        style={[
          {
            paddingTop: top,
            paddingBottom: bottom,
          },
          styles.wrapper,
        ]}>
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
