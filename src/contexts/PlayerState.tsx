import React, { Context, createContext, ProviderProps, useState, Consumer } from "react";
import { PlayerStateProvider, PlayerState, SetPlayerState } from "../types/PlayerState.type";

export const PlayerContext: Context<PlayerStateProvider> = createContext({} as PlayerStateProvider);

export function PlayerContextProvider({ children }) {
  const [playerState, setPlayerState]: [PlayerState, SetPlayerState] = useState({
    health: [1, 1, 1, 1, 1],
    isHit: false,
  });

  return <PlayerContext.Provider value={{ playerState, setPlayerState }}>{children}</PlayerContext.Provider>;
}

export const PlayerStateConsumer: Consumer<PlayerStateProvider> = PlayerContext.Consumer;
