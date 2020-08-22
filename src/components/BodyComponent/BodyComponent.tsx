import React from "react";
import { useGameState } from "../../hooks/useContext";
import { IntroMenu } from "../IntroMenu/IntroMenu";
import { Playboard } from "../Playboard/Playboard";
import { CurrentState } from "../../types/GameState.type";

export function BodyComponent(): JSX.Element {
  const { gameState } = useGameState();

  const componentReducer: () => JSX.Element = () => {
    switch (gameState.current) {
      case CurrentState.Intro:
        return <IntroMenu />;
      case CurrentState.Playing:
        return <Playboard />;
    }
  };

  return <main>{componentReducer()}</main>;
}
