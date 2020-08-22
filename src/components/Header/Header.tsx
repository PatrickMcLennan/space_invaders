import React from "react";
import { useGameState } from "../../hooks/useContext";

import { SHeader } from "./Header.style";
import { Heart } from "../svgs/heart";

export function Header(): JSX.Element {
  const { gameState } = useGameState();

  return (
    <SHeader>
      <Heart />
      <span>HEALTH: {gameState.health}</span>
    </SHeader>
  );
}
