import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerState";
import { GameContext } from "../contexts/GameState";
import { InputContext } from "../contexts/InputHandler";

export const usePlayer = () => useContext(PlayerContext);
export const useGame = () => useContext(GameContext);
export const useInput = () => useContext(InputContext);
