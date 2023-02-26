import React, {useCallback, useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import {Button, Container, Typography} from '../../components';
import {get, set} from '../../storage';
import {OptionType, RootStackParamList} from '../../types';

import {styles} from './styles';

type SettingsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Settings'
>;

export const SettingsScreen = ({navigation, route}: SettingsScreenProps) => {
  const {
    options,
    settings: {showSelected, storageKey},
  } = route.params;
  const [storageValue, setStorageValue] = useState<string>();
  const [description, setDescription] = useState<string>();

  const {t} = useTranslation();

  const handleOptionPress = async (option: OptionType) => {
    if (storageKey) {
      await set(storageKey, option.value);
      setDescription(option?.description);
      setStorageValue(option.value);
    }

    option.onPress?.();
  };

  const renderOption = useCallback(
    (option: OptionType, isLast: boolean) => {
      return (
        <Button
          key={option.value}
          textProps={{text: option.text}}
          buttonStyle={StyleSheet.flatten([!isLast && styles.button])}
          onPress={() => handleOptionPress(option)}
          showBorder={showSelected && option.value === storageValue}
        />
      );
    },
    [showSelected, storageValue],
  );

  const renderDescription = useCallback(
    () => (description ? <Typography text={description} /> : <></>),
    [description],
  );

  const getValues = useCallback(async () => {
    const value = await get(storageKey);

    if (value) {
      const optionDescription = options.find(opt => opt.value === value);

      if (optionDescription && optionDescription.description) {
        setDescription(optionDescription.description);
      }
      setStorageValue(value);
    }
  }, []);

  useEffect(() => {
    if (storageKey) {
      getValues();
    }
  }, [storageKey]);

  return (
    <Container
      showCustomHeader
      title={t('settings')}
      onPress={navigation.goBack}>
      <View style={styles.container}>
        <View>
          {options.map((option, index) =>
            renderOption(option, index + 1 === options.length),
          )}
        </View>
        {renderDescription()}
      </View>
    </Container>
  );
};
