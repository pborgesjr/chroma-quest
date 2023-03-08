import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, View} from 'react-native';
import {ScreenContainer, Typography} from '../../components';
import {ConfigContext} from '../../context';
import {OptionType} from '../../types';
import {renderOption} from './settingsBuilder';
import {styles} from './styles';

export const AccessibilityScreen = ({}) => {
  const {t} = useTranslation();

  const {accessibility, setAccessibility} = useContext(ConfigContext);

  const AccessibilityOptions: OptionType[] = [
    {
      text: t('accessibilityColor.normal'),
      value: 'normal',
      onPress: () => setAccessibility('normal'),
    },
    {
      text: t('accessibilityColor.deuteranopia'),
      value: 'deuteranopia',
      onPress: () => setAccessibility('deuteranopia'),
    },
    {
      text: t('accessibilityColor.protanopia'),
      value: 'protanopia',
      onPress: () => setAccessibility('protanopia'),
    },
    {
      text: t('accessibilityColor.tritanopia'),
      value: 'tritanopia',
      onPress: () => setAccessibility('tritanopia'),
    },
    /*     {
      text: t('accessibilityColor.numbers'),
      value: 'numbers',
      onPress: () => setAccessibility('numbers'),
    }, */
  ];

  const accessibilityOptionsLength = AccessibilityOptions.length;

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          {AccessibilityOptions?.map((option, index) =>
            renderOption(
              option,
              index + 1 === accessibilityOptionsLength,
              accessibility,
            ),
          )}
        </ScrollView>
        {/* {accessibility === 'numbers' && (
          <Typography text={t('insteadOfColors')} />
        )} */}
      </View>
    </ScreenContainer>
  );
};
