import {StyleSheet} from 'react-native';
import {scale} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: scale(24),
  },
  textContainer: {
    maxWidth: scale(290),
  },
  text: {
    textAlign: 'center',
    fontSize: scale(16),
  },
  image: {
    width: scale(100),
    height: scale(100),
    marginTop: scale(36),
  },
});
