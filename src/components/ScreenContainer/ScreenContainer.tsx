import React, {ReactNode, useContext} from 'react';
import {StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ConfigContext} from '../../context';
import {COLOR_PALETTE} from '../../theme';
import {isIOS} from '../../utils';
import {styles} from './styles';

const {
  gradient: {
    normal: {darkPurple, pink, purple},
  },
  neutral: {darkGrey},
} = COLOR_PALETTE;

interface ContainerProps {
  children: ReactNode;
}

export const ScreenContainer = ({children}: ContainerProps) => {
  const {top, bottom} = useSafeAreaInsets();
  const {accessibility} = useContext(ConfigContext);

  const colors =
    accessibility !== 'normal'
      ? [darkGrey, darkGrey]
      : [darkPurple, purple, pink];

  return (
    <LinearGradient colors={colors} style={styles.gradient}>
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
          barStyle={isIOS() ? 'light-content' : 'dark-content'}
        />
        {children}
      </View>
    </LinearGradient>
  );
};
