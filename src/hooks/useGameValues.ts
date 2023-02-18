import {delay} from 'lodash';
import {
  useCallback,
  useContext,
  useEffect,
  useState,
  MutableRefObject,
} from 'react';
import {ColorButtonRefType} from '../components';
import {SWITCH_TURNS_TIME, TIME_BETWEEN_BUTTON_ANIMATIONS} from '../constants';
import {GameContext} from '../context';
import {ValueColorType} from '../types';
import {alertDefeat, randomNumber} from '../utils';

export const useGameValues = (
  buttonsRefs: Array<MutableRefObject<ColorButtonRefType>>,
) => {
  const {gameState, setGameState} = useContext(GameContext);
  const [gameValues, setGameValues] = useState<Array<ValueColorType>>([]);
  const [userGameValues, setUserGameValues] = useState<Array<number>>([]);

  const restartGame = () => {
    setUserGameValues([]);
    setGameValues([]);
    setGameState('waiting');
  };

  const handleDefeat = () => {
    setGameState('game over');
    alertDefeat(restartGame);
  };

  const startNewTurn = () => {
    setUserGameValues([]);
    setGameState('computer');
  };

  const getNewRandom = useCallback(() => {
    const nextRandomNumber = randomNumber();
    setGameValues(prevState => [...prevState, nextRandomNumber]);
    setGameState('replaying');
  }, [setGameValues]);

  /**
   * This useEffect hook it is responsible for randomizing a new number, it's the computer's turn
   */
  useEffect(() => {
    if (gameState === 'computer') {
      setTimeout(getNewRandom, SWITCH_TURNS_TIME);
    }
  }, [gameState, getNewRandom]);

  /**
   * This useEffect hook takes care of the validation, it is the user's turn
   * */
  useEffect(() => {
    if (gameState === 'user' && userGameValues.length > 0) {
      const lastIndex = userGameValues.length - 1;

      if (userGameValues[lastIndex] !== gameValues[lastIndex]) {
        handleDefeat();
        return;
      }

      if (userGameValues.length === gameValues.length) {
        startNewTurn();
      }
    }
  }, [userGameValues, gameValues, gameState]);

  /**
   * This useEffect it is responsible for replaying all the computer's sequence
   */
  useEffect(() => {
    if (gameState === 'replaying') {
      gameValues.forEach((gv, index) => {
        delay(() => {
          const currentIndex = gv - 1;
          const gameValuesLastIndex = gameValues.length - 1;

          buttonsRefs[currentIndex].current?.replayAnimation();

          if (index === gameValuesLastIndex) {
            setGameState('user');
          }
        }, index * TIME_BETWEEN_BUTTON_ANIMATIONS);
      });
    }
  }, [gameState, gameValues]);

  return {
    gameValues,
    userGameValues,
    setGameValues,
    setUserGameValues,
  };
};
