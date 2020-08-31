import { Game } from "../wasm/pkg/wasm";
import { Dispatch, SetStateAction, RefObject } from "react";

interface Wasm {
  start_game: (spaceship: RefObject<SVGSVGElement>) => Game;
}

export type SetWasmState = Dispatch<SetStateAction<Game>>;

export type WasmContextProvider = {
  wasm: Game;
  setWasm: SetWasmState;
};
