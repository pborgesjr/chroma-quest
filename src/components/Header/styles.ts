import {StyleSheet} from 'react-native';
import {scale} from '../../utils';
import {COLOR_PALETTE} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(16),
    paddingTop: scale(24),
    backgroundColor: COLOR_PALETTE.neutral.darkGrey,
  },
  button: {
    marginRight: scale(16),
  },
});
