import { Dispatch, SetStateAction } from "react";

export enum CurrentState {
  Lost = `LOST`,
  Won = `WON`,
  Playing = `PLAYING`,
}

export enum Menu {
  Pause = `PAUSE`,
  Intro = `INTRO`,
  HighScores = `HIGH_SCORES`,
  ChooseDifficulty = `CHOOSE_DIFFICULTY`,
}

export enum Difficulty {
  Normal = `NORMAL`,
  Drinking = `DONT_DRINK_AND_FLY`,
  CarpalTunnel = `CARPAL_TUNNEL`,
}

export type GameState = {
  health: number;
  isHit: boolean;
  current: CurrentState[keyof CurrentState];
  currentMenu: Menu[keyof Menu];
  difficulty: Difficulty[keyof Difficulty];
};

export type SetGameState = Dispatch<SetStateAction<GameState>>;

export type GameContextProvider = {
  gameState: GameState;
  setGameState: SetGameState;
  isHit: () => void;
};
