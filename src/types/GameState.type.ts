import { Dispatch, SetStateAction } from "react";

export type GameState = {
  game: `LOST` | `WON` | `PAUSED` | `PLAYING` | `INTRO`;
  currentMenu: `PAUSE` | `START` | `INTRO` | null;
};

export type SetGameState = Dispatch<SetStateAction<GameState>>;

export type GameStateProvider = {
  gameState: GameState;
  setGameState: SetGameState;
  startGame: () => void;
  pauseGame: (menu: GameState["currentMenu"]) => void;
};
