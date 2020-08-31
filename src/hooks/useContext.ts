import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { WasmState } from "../contexts/WasmContext";

export const useGameState = () => useContext(GameContext);
export const useWasm = () => useContext(WasmState);
