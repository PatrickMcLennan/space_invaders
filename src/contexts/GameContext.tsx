import React, { Context, createContext, useState, Consumer, useEffect } from "react";
import { GameState, SetGameState, CurrentState, Menu, GameContextProvider, Difficulty } from "../types/GameState.type";

import { AcceptedKey } from "../types/Keypresses.type";

export const GameContext: Context<GameContextProvider> = createContext({} as GameContextProvider);

export function GameStateProvider({ children }) {
  const [gameState, setGameState]: [GameState, SetGameState] = useState({
    health: 5,
    isHit: false,
    current: CurrentState.Playing,
    currentMenu: Menu.Intro,
    difficulty: Difficulty.Normal,
  });

  const isHit = () => {
    const newHealth = gameState.health - 1;
    setGameState((prevState) => ({
      health: newHealth,
      isHit: true,
      current: newHealth === 0 ? CurrentState.Lost : prevState.current,
      currentMenu: prevState.currentMenu,
      difficulty: prevState.difficulty,
    }));

    if (newHealth !== 0)
      return setTimeout(
        () =>
          setGameState((prevState) => ({
            ...prevState,
            isHit: false,
          })),
        2000
      );
    else return;
  };

  const pauseGame = () =>
    setGameState((prevState) => ({
      ...prevState,
      currentMenu: prevState.currentMenu === Menu.Pause ? null : Menu.Pause,
    }));

  return <GameContext.Provider value={{ gameState, isHit, setGameState }}>{children}</GameContext.Provider>;
}

export const GameContextConsumer: Consumer<GameContextProvider> = GameContext.Consumer;
