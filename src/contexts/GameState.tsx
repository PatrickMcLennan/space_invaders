import React, { createContext, Context, ProviderProps, useState, Consumer, ReactChildren } from "react";
import { GameState, SetGameState, GameStateProvider } from "../types/GameState.type";

export const GameContext: Context<GameStateProvider> = createContext({} as GameStateProvider);

export function GameContextProvider({ children }) {
  const [gameState, setGameState]: [GameState, SetGameState] = useState({
    game: `INTRO`,
    currentMenu: `INTRO`,
  });

  const startGame: () => void = () =>
    setGameState({
      game: `PLAYING`,
      currentMenu: null,
    });

  return <GameContext.Provider value={{ gameState, setGameState, startGame }}>{children}</GameContext.Provider>;
}

export const GameContextConsumer: Consumer<GameStateProvider> = GameContext.Consumer;
