import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { InputContext } from "../contexts/InputHandler";
import { WasmState } from "../contexts/WasmContext";

export const useGameState = () => useContext(GameContext);
export const useInput = () => useContext(InputContext);
export const useWasm = () => useContext(WasmState);
