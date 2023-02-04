import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {Button} from '../../components';
import {randomNumber} from '../../utils';

const LAZY_INIT = () => true;

export const Game = () => {
  const [counter, setCounter] = useState(0);
  const [shouldRandomNextNumber, setShouldRandomNextNumber] =
    useState(LAZY_INIT);
  const [gameValues, setGameValues] = useState<Array<number>>([]);
  const [userGameValues, setUserGameValues] = useState<Array<number>>([]);

  const handlePress = (value: number) => {
    setUserGameValues(prevState => [...prevState, value]);
  };

  const startNewTurn = () => {
    setUserGameValues([]);
    setShouldRandomNextNumber(true);
  };

  const alertDefeat = () => {
    Alert.alert('Você perdeu!', 'Você perdeu, vamos jogar novamente?!', [
      {text: 'Jogar novamente', onPress: playAgain},
    ]);
  };

  const playAgain = () => {
    setUserGameValues([]);
    setGameValues([]);
    setCounter(0);
    setShouldRandomNextNumber(true);
  };

  useEffect(() => {
    if (userGameValues.length > 0) {
      const userTurn = userGameValues.length - 1;

      if (userGameValues[userTurn] !== gameValues[userTurn]) {
        alertDefeat();
        return;
      }

      if (
        userGameValues[userTurn] === gameValues[userTurn] &&
        userGameValues.length === gameValues.length
      ) {
        startNewTurn();
      }
    }
  }, [userGameValues, gameValues]);

  useEffect(() => {
    if (shouldRandomNextNumber) {
      setShouldRandomNextNumber(false);
      const nextRandomNumber = randomNumber();
      setGameValues(prevState => [...prevState, nextRandomNumber]);
      setCounter(prevState => prevState + 1);
    }
  }, [shouldRandomNextNumber]);

  return (
    <View>
      <Button text="1" value={1} onPress={handlePress} />
      <Button text="2" value={2} onPress={handlePress} />
      <Button text="3" value={3} onPress={handlePress} />
      <Button text="4" value={4} onPress={handlePress} />

      <Text>Gabarito: {gameValues}</Text>
      <Text>user: {userGameValues}</Text>
      <Text>Contador: {counter}</Text>
    </View>
  );
};
