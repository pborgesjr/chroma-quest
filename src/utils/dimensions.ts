import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

/**
 * Guideline sizes are based on standard ~5" screen mobile device
 * source: https://github.com/nirsky/react-native-size-matters/tree/master/examples/BlogPost
 */
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scale = (unscaledSize: number) =>
  (screenWidth / guidelineBaseWidth) * unscaledSize;
