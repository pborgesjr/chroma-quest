import {StyleSheet} from 'react-native';
import {COLOR_PALETTE, FONTS, UNITS} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  text: {
    fontFamily: FONTS.regular,
  },
  light: {
    color: COLOR_PALETTE.neutral.white,
  },
  dark: {
    color: COLOR_PALETTE.neutral.black,
  },
  title: {
    fontSize: UNITS.fonts.large,
  },
  heading: {
    fontSize: UNITS.fonts.big,
  },
  body: {
    fontSize: UNITS.fonts.regular,
  },
  description: {
    fontSize: UNITS.fonts.small,
  },
  smallDescription: {
    fontSize: UNITS.fonts.mini,
  },
  shadow: {
    textShadowRadius: 10,
    textShadowColor: COLOR_PALETTE.shadow,
    textShadowOffset: {width: -1, height: 4},
  },
});
