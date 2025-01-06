import {
  useCallback,
  useContext,
  useEffect,
  useState,
  MutableRefObject,
} from 'react';
import {delay} from 'lodash';
import {ColorButtonRefType} from '../components';
import {SWITCH_TURNS_TIME, TIME_BETWEEN_BUTTON_ANIMATIONS} from '../constants';
import {GameContext} from '../context';
import {ValueColorType} from '../types';
import {randomNumber} from '../utils';
import {get, set} from '../storage';
import {useNavigation} from '@react-navigation/native';
import {NavigationStack} from '../routes';

export const useGameValues = (
  buttonsRefs: Array<MutableRefObject<ColorButtonRefType>>,
) => {
  const {gameState, setGameState} = useContext(GameContext);
  const [gameValues, setGameValues] = useState<Array<ValueColorType>>([]);
  const [maxScore, setMaxScore] = useState(0);
  const [userGameValues, setUserGameValues] = useState<Array<number>>([]);
  const navigation = useNavigation<NavigationStack>();

  const restartGame = () => {
    setUserGameValues([]);
    setGameValues([]);
    setGameState('computer');
  };

  const handleDefeat = () => {
    navigation.navigate('Finished', {
      userScore: (gameValues.length - 1).toString(),
    });
  };

  const startNewTurn = () => {
    setUserGameValues([]);
    if (maxScore < gameValues.length) {
      set('score', gameValues.length.toString());
      setMaxScore(gameValues.length);
    }
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

  /**
   * This useEffect hooks resets the game
   */
  useEffect(() => {
    if (gameState === 'initial') {
      restartGame();
    }
  }, [gameState]);

  /**
   * This useEffect hook is responsible for getting the max score from the storage
   */
  useEffect(() => {
    get('score').then(score => {
      if (score) {
        setMaxScore(Number(score));
      }
    });
  }, []);

  return {
    gameValues,
    maxScore,
    userGameValues,
    setGameValues,
    setUserGameValues,
  };
};
