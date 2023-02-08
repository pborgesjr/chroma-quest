import {Alert} from 'react-native';

export const alertDefeat = (callBack: () => void) => {
  Alert.alert('Você perdeu!', 'Você perdeu, vamos jogar novamente?!', [
    {text: 'Jogar novamente', onPress: callBack},
  ]);
};
