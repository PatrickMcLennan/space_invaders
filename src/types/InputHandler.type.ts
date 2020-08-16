import { Dispatch, SetStateAction } from "react";
import { AcceptedKey } from "./Keypresses.type";

export type InputState = {
  keyIsDown: boolean;
  currentKeyPresses: AcceptedKey[];
  lastKeyPresses: AcceptedKey[];
};

export type SetInputState = Dispatch<SetStateAction<InputState>>;

export type InputStateProvider = {
  inputState: InputState;
  setInputState: SetInputState;
};
