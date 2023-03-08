import {StyleSheet} from 'react-native';
import {Button} from '../../components';
import {OptionType} from '../../types';
import {styles} from './styles';

export const renderOption = (
  option: OptionType,
  storageValue: string,
  isLast: boolean,
) => {
  return (
    <Button
      key={option.value}
      textProps={{text: option.text}}
      buttonStyle={StyleSheet.flatten([!isLast && styles.button])}
      onPress={option.onPress}
      showBorder={option.value === storageValue}
    />
  );
};
