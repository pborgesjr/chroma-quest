import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {ScreenContainer} from '../../components';
import {OptionType, RootStackParamList} from '../../types';

import {styles} from './styles';
import {renderOption} from './settingsBuilder';

type SettingsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Settings'
>;

export const SettingsScreen = ({navigation, route}: SettingsScreenProps) => {
  const {t} = useTranslation();

  const SettingsOptions: OptionType[] = [
    {text: t('difficulty'), onPress: () => navigation.navigate('Difficulty')},
    {text: t('language'), onPress: () => navigation.navigate('Language')},
    {
      text: t('accessibility'),
      onPress: () => navigation.navigate('Accessibility'),
    },
  ];

  const settingsOptionsLength = SettingsOptions.length;

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <View>
          {SettingsOptions?.map((option, index) =>
            renderOption(option, index + 1 === settingsOptionsLength),
          )}
        </View>
      </View>
    </ScreenContainer>
  );
};
