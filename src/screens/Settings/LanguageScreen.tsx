import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {ScreenContainer} from '../../components';
import {ConfigContext} from '../../context';
import {OptionType} from '../../types';
import {renderOption} from './settingsBuilder';
import {styles} from './styles';

export const LanguageScreen = () => {
  const {t} = useTranslation();

  const {language, setLanguage} = useContext(ConfigContext);

  const LanguageOptions: OptionType[] = [
    {
      text: t('english'),
      value: 'en',
      onPress: () => {
        setLanguage('en');
      },
    },
    {
      text: t('brazilianPortuguese'),
      value: 'ptBR',
      onPress: () => {
        setLanguage('ptBR');
      },
    },
  ];

  const languageOptionsLength = LanguageOptions.length;

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <View>
          {LanguageOptions?.map((option, index) =>
            renderOption(option, index + 1 === languageOptionsLength, language),
          )}
        </View>
      </View>
    </ScreenContainer>
  );
};
