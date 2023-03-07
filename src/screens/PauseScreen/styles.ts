import {StyleSheet} from 'react-native';
import {COLOR_PALETTE} from '../../theme';
import {scale} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_PALETTE.neutral.blackTransparent,
    flex: 1,
    alignItems: 'center',
    paddingTop: scale(120),
  },
  titleText: {
    textAlign: 'center',
  },
  buttons: {
    alignItems: 'center',
    marginTop: scale(48),
  },
  buttonMargin: {
    marginBottom: scale(20),
  },
});
