import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

interface ContainerProps {
  children: ReactNode;
}

export const ScreenContainer = ({children}: ContainerProps) => {
  return <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>;
};
