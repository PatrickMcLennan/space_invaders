import { Game } from "../wasm/pkg/wasm";
import { Dispatch, SetStateAction, RefObject } from "react";

export type SetWasmState = Dispatch<SetStateAction<Game>>;

export type WasmContextProvider = {
  wasm: Game;
  setWasm: SetWasmState;
};
