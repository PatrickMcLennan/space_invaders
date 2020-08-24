import React, { Suspense } from "react";
import { useGameState } from "../../hooks/useContext";
import { IntroMenu } from "../IntroMenu/IntroMenu";
import { CurrentState, Menu } from "../../types/GameState.type";

const PauseMenu = React.lazy(() => import(`../PauseMenu/PauseMenu`));
const ScoresMenu = React.lazy(() => import(`../ScoresMenu/ScoresMenu`));
const Playboard = React.lazy(() => import(`../Playboard/Playboard`));

export function BodyComponent(): JSX.Element {
  const { gameState } = useGameState();

  const componentReducer: () => JSX.Element = () => {
    switch (gameState.current) {
      case CurrentState.Intro:
        return <IntroMenu />;
      case CurrentState.Playing:
      case CurrentState.Paused:
      default:
        return (
          <>
            {gameState.currentMenu === Menu.Pause && <PauseMenu />}
            {gameState.currentMenu === Menu.HighScores && <ScoresMenu />}
            <Playboard />
          </>
        );
    }
  };

  return (
    <main>
      <Suspense fallback={<div>hello</div>}>{componentReducer()}</Suspense>
    </main>
  );
}
