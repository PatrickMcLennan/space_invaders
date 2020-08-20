import React from "react";
import { useGame } from "../../hooks/useContext";
import { IntroMenu } from "../IntroMenu/IntroMenu";
import { Playboard } from "../Playboard/Playboard";
import { Game } from "../../types/GameState.type";

export function BodyComponent() {
  const { gameState } = useGame();

  const componentReducer = () => {
    switch (gameState.game) {
      case Game.Intro:
        return <IntroMenu />;
      case Game.Playing:
        return <Playboard />;
    }
  };

  return <main>{componentReducer()}</main>;
}
