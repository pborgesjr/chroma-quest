import {StyleSheet} from 'react-native';
import {COLOR_PALETTE} from '../../theme';
import {scale} from '../../utils';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: scale(100),
  },
  marginRight: {
    marginRight: scale(56),
  },
  marginBottom: {
    marginBottom: scale(48),
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  visibileImage: {
    opacity: 1,
  },
  scoreText: {
    textAlign: 'center',
    color: COLOR_PALETTE.neutral.white,
  },
});
