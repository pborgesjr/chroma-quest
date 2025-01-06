import {StyleSheet} from 'react-native';
import {COLOR_PALETTE} from '../../theme';
import {scale} from '../../utils';

const IMAGE_SIZE = scale(136);

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
    textAlign: 'center',
    color: COLOR_PALETTE.neutral.black,
  },
});
