import React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {ScreenContainer} from '../../components';
import {OptionType} from '../../types';

import {styles} from './styles';
import {renderOption} from './settingsBuilder';
import {SettingsScreenProps} from '../../routes';

export const SettingsScreen = ({navigation, route}: SettingsScreenProps) => {
  const {t} = useTranslation();

  const SettingsOptions: OptionType[] = [
    //TODO: replace all timers for constants to have an implementation of difficulty into the app
    /*  {text: t('difficulty'), onPress: () => navigation.navigate('Difficulty')}, */
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
