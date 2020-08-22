import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { InputContext } from "../contexts/InputHandler";

export const useGameState = () => useContext(GameContext);
export const useInput = () => useContext(InputContext);
