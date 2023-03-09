import {useTranslation} from 'react-i18next';
import {Alert} from 'react-native';

export const alertDefeat = (callBack: () => void) => {
  const {t} = useTranslation();

  Alert.alert(t('youLose'), t('letsPlayAgain'), [
    {text: t('playAgain'), onPress: callBack},
  ]);
};
