import React, {useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {ScreenContainer, Typography} from '../../components';
import {ConfigContext} from '../../context';
import {OptionType} from '../../types';
import {renderOption} from './settingsBuilder';
import {styles} from './styles';

export const DifficultyScreen = () => {
  const {t} = useTranslation();

  const {difficulty, setDifficulty} = useContext(ConfigContext);

  const DifficultyOptions: OptionType[] = [
    {text: t('easy'), value: 'easy', onPress: () => setDifficulty('easy')},
    {
      text: t('normal'),
      value: 'normal',
      onPress: () => setDifficulty('normal'),
    },
    {
      text: t('hard'),
      value: 'hard',
      onPress: () => setDifficulty('hard'),
    },
  ];

  const difficultyOptionsLength = DifficultyOptions.length;

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <View>
          {DifficultyOptions?.map((option, index) =>
            renderOption(
              option,
              index + 1 === difficultyOptionsLength,
              difficulty,
            ),
          )}
        </View>
        <Typography text={t(`description.${difficulty}`)} />
      </View>
    </ScreenContainer>
  );
};
