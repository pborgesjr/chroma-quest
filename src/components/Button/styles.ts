import {StyleSheet} from 'react-native';
import {COLOR_PALETTE} from '../../theme';
import {scale} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  button: {
    padding: scale(8),
  },
  border: {
    borderWidth: scale(3),
    borderColor: COLOR_PALETTE.neutral.white,
  },
});
