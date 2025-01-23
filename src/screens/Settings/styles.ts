import {StyleSheet} from 'react-native';
import {scale} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: scale(24),
    paddingBottom: scale(24),
    marginTop: scale(100),
  },
  button: {
    marginBottom: scale(36),
  },
});
