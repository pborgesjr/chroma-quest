import {StyleSheet} from 'react-native';
import {COLOR_PALETTE, FONTS, UNITS} from '../../theme';
import {scale} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  text: {
    color: COLOR_PALETTE.neutral.white,
    fontFamily: FONTS.regular,
    fontSize: UNITS.fonts.regular,
    lineHeight: scale(20),
  },
  border: {
    padding: scale(8),
    borderWidth: scale(3),
    borderColor: COLOR_PALETTE.neutral.white,
  },
});
