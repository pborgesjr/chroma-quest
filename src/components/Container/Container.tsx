import React, {ReactNode} from 'react';
import {StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLOR_PALETTE} from '../../theme';
import {Header} from '../Header/Header';
import {styles} from './styles';

const {darkPurple, pink, purple} = COLOR_PALETTE.gradient.normal;

interface ContainerProps {
  title?: string;
  onPress?: () => void;
  showCustomHeader?: boolean;
  children: ReactNode;
}

export const Container = ({
  title,
  onPress,
  showCustomHeader,
  children,
}: ContainerProps) => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <LinearGradient colors={[darkPurple, purple, pink]} style={styles.gradient}>
      <View style={{marginTop: top, marginBottom: bottom, flex: 1}}>
        {/* <StatusBar
          backgroundColor="transparent"
          translucent
          barStyle="light-content"
        /> */}
        {showCustomHeader ? <Header title={title} onPress={onPress} /> : <></>}

        {children}
      </View>
    </LinearGradient>
  );
};
