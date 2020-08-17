import { Dispatch, SetStateAction } from "react";

export type Coords = { x: number; y: number };
export type SetCoords = Dispatch<SetStateAction<Coords>>;
