import {useContext, useEffect, useState} from 'react';
import {GameContext} from '../context';
import {alertDefeat, randomNumber} from '../utils';

export const useGameValues = () => {
  const {gameState, setGameState} = useContext(GameContext);

  const [gameValues, setGameValues] = useState<Array<number>>([]);
  const [userGameValues, setUserGameValues] = useState<Array<number>>([]);

  const startNewTurn = () => {
    setUserGameValues([]);
    setGameState('computer');
  };

  const playAgain = () => {
    setUserGameValues([]);
    setGameValues([]);
    setGameState('computer');
  };

  useEffect(() => {
    if (gameState === 'computer') {
      setTimeout(() => {
        const nextRandomNumber = randomNumber();
        setGameValues(prevState => [...prevState, nextRandomNumber]);
        setGameState('playing');
      }, 1000);
    }
  }, [gameState, setGameState, setGameValues]);

  useEffect(() => {
    if (userGameValues.length > 0) {
      const userTurn = userGameValues.length - 1;

      if (userGameValues[userTurn] !== gameValues[userTurn]) {
        alertDefeat(playAgain);
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

  return {gameValues, userGameValues, setGameValues, setUserGameValues};
};
