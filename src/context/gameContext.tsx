import React, {
  createContext,
  useState,
  ReactElement,
  SetStateAction,
  Dispatch,
} from 'react';
import {GameStateType} from '../types';

type GameProviderProps = {
  children: ReactElement;
};

type GameContextType = {
  gameState: GameStateType;
  setGameState: Dispatch<SetStateAction<GameStateType>>;
};

export const GameContext = createContext<GameContextType>(
  {} as GameContextType,
);

export const GameProvider = ({children}: GameProviderProps) => {
  const [gameState, setGameState] = useState<GameStateType>('computer');

  return (
    <GameContext.Provider value={{gameState, setGameState}}>
      {children}
    </GameContext.Provider>
  );
};
