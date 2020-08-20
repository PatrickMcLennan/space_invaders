import { Dispatch, SetStateAction } from "react";

export enum Game {
    Lost = `LOST`,
    Won = `WON`,
    Paused = `PAUSED`,
    Playing = `PLAYING`,
    Intro = `INTRO`
}

export enum Menu {
    Pause = `PAUSE`,
    Start = `START`,
    Intro = `INTRO`
}

export type GameState = {
  game: keyof Game;
  currentMenu: keyof Menu
};

export type SetGameState = Dispatch<SetStateAction<GameState>>;

export type GameStateProvider = {
  gameState: GameState;
  setGameState: SetGameState;
  startGame: () => void;
  pauseGame: (menu: GameState["currentMenu"]) => void;
};
