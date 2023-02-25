import {StyleSheet} from 'react-native';
import {scale} from '../../utils';

export const styles = StyleSheet.create({
  alignCenter: {
    alignItems: 'center',
  },
  titleText: {
    textAlign: 'center',
  },
  marginTopMedium: {
    marginTop: scale(30),
  },
  marginBottomLarge: {
    marginBottom: scale(48),
  },
  logo: {
    width: scale(170),
    height: scale(200),
  },
});
