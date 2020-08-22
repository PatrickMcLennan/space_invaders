import React, { Context, createContext, useState, Consumer } from "react";
import { GameState, SetGameState, CurrentState, Menu, GameContextProvider } from "../types/GameState.type";

export const GameContext: Context<GameContextProvider> = createContext({} as GameContextProvider);

export function GameStateProvider({ children }) {
  const [gameState, setGameState]: [GameState, SetGameState] = useState({
    health: 5,
    isHit: false,
    current: CurrentState.Intro,
    currentMenu: Menu.Intro,
  });

  const isHit = () => {
    const newHealth = gameState.health - 1;
    setGameState((prevState) => ({
      health: newHealth,
      isHit: true,
      current: newHealth === 0 ? CurrentState.Lost : prevState.current,
      currentMenu: prevState.currentMenu,
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

  return <GameContext.Provider value={{ gameState, isHit, setGameState }}>{children}</GameContext.Provider>;
}

export const GameContextConsumer: Consumer<GameContextProvider> = GameContext.Consumer;
