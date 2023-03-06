import {StyleSheet} from 'react-native';
import {COLOR_PALETTE} from '../../theme';
import {scale} from '../../utils';

const IMAGE_SIZE = scale(136);

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
  fire: {
    position: 'relative',
  },
  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
  },
  scoreContainer: {
    position: 'absolute',
    bottom: scale(18),
    width: IMAGE_SIZE,
  },
  scoreText: {
    color: COLOR_PALETTE.neutral.black,
    textAlign: 'center',
  },
});
