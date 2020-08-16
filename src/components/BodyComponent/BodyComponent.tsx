import React from "react";
import { useGame } from "../../hooks/useContext";
import { IntroMenu } from "../IntroMenu/IntroMenu";
import { Playboard } from "../Playboard/Playboard";

export function BodyComponent() {
  const { gameState } = useGame();

  const componentReducer = () => {
    switch (gameState.game) {
      case `INTRO`:
        return <IntroMenu />;
      case `PLAYING`:
        return <Playboard />;
    }
  };

  return <main>{componentReducer()}</main>;
}
