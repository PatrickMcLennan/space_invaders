import React from "react";
import { useGame, usePlayer } from "../../hooks/useContext";

import { SHeader } from "./Header.style";
import { Heart } from "../svgs/heart";

export function Header() {
  const { playerState } = usePlayer();

  return (
    <SHeader>
      <Heart />
      <span>HEALTH: {playerState.health}</span>
    </SHeader>
  );
}
