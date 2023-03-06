import {StyleSheet} from 'react-native';
import {scale} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scale(16),
  },
  button: {
    marginRight: scale(24),
  },
  titleContainer: {
    marginLeft: scale(24),
  },
});
