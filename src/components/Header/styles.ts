import {StyleSheet} from 'react-native';
import {scale} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: scale(24),
    marginHorizontal: scale(16),
  },
  button: {
    marginRight: scale(24),
  },
  titleContainer: {
    marginLeft: scale(24),
  },
});
