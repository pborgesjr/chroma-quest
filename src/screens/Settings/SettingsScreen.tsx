import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import {Button, ScreenContainer} from '../../components';
import {OptionType, RootStackParamList} from '../../types';

import {styles} from './styles';

type SettingsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Settings'
>;

export const SettingsScreen = ({navigation, route}: SettingsScreenProps) => {
  const {t} = useTranslation();

  //TODO: criar screens
  const SettingsOptions: OptionType[] = [
    {text: t('difficulty'), onPress: () => navigation.navigate('Difficulty')},
    {text: t('language'), onPress: () => navigation.navigate('Language')},
    {
      text: t('accessibility'),
      onPress: () => navigation.navigate('Accessibility'),
    },
  ];

  const renderOption = (option: OptionType, isLast: boolean) => {
    return (
      <Button
        key={option.text}
        textProps={{text: option.text}}
        buttonStyle={StyleSheet.flatten([!isLast && styles.button])}
        onPress={option.onPress}
      />
    );
  };

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <View>
          {SettingsOptions?.map((option, index) =>
            renderOption(option, index + 1 === SettingsOptions.length),
          )}
        </View>
      </View>
    </ScreenContainer>
  );
};
