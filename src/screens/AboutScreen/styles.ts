import {StyleSheet} from 'react-native';
import {scale} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: scale(100),
    marginBottom: scale(24),
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
  },
});
