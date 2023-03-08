import {StyleSheet} from 'react-native';
import {Button} from '../../components';
import {OptionType} from '../../types';
import {styles} from './styles';

export const renderOption = (
  option: OptionType,
  isLast: boolean,
  storageValue?: string,
) => {
  return (
    <Button
      key={option.text}
      textProps={{text: option.text}}
      buttonStyle={StyleSheet.flatten([!isLast && styles.button])}
      onPress={option.onPress}
      showBorder={!!storageValue && option.value === storageValue}
    />
  );
};
