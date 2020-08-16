import { Dispatch, SetStateAction } from "react";
import { Tuple } from "./helpers.types";

export type PlayerState = {
  health: Tuple<1 | 0, 5>;
  isHit: boolean;
};

export type SetPlayerState = Dispatch<SetStateAction<PlayerState>>;

export type PlayerStateProvider = {
  playerState: PlayerState;
  setPlayerState: SetPlayerState;
};
