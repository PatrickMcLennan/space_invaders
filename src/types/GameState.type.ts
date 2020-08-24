import { Dispatch, SetStateAction } from "react";

export enum CurrentState {
  Lost = `LOST`,
  Won = `WON`,
  Paused = `PAUSED`,
  Playing = `PLAYING`,
  Intro = `INTRO`,
}

export enum Menu {
  Pause = `PAUSE`,
  Start = `START`,
  HighScores = `HIGH_SCORES`,
  None = `NONE`,
}

export type GameState = {
  health: number;
  isHit: boolean;
  current: CurrentState[keyof CurrentState];
  currentMenu: Menu[keyof Menu];
};

export type SetGameState = Dispatch<SetStateAction<GameState>>;

export type GameContextProvider = {
  gameState: GameState;
  setGameState: SetGameState;
  isHit: () => void;
};
