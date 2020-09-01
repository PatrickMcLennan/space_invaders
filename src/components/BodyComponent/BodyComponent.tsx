import React, { Suspense } from "react";
import { useGameState } from "../../hooks/useContext";
import { IntroMenu } from "../IntroMenu/IntroMenu";
import { Menu } from "../../types/GameState.type";
import { DifficultyMenu } from "../DifficultyMenu/DifficultyMenu";

const PauseMenu = React.lazy(() => import(`../PauseMenu/PauseMenu`));
const ScoresMenu = React.lazy(() => import(`../ScoresMenu/ScoresMenu`));
const Playboard = React.lazy(() => import(`../Playboard/Playboard`));

export function BodyComponent(): JSX.Element {
  const { gameState } = useGameState();
  const componentReducer: () => JSX.Element = () => {
    switch (gameState.currentMenu) {
      case Menu.Intro:
        return <IntroMenu />;
      case Menu.ChooseDifficulty:
        return <DifficultyMenu />;
      case Menu.HighScores:
        return <ScoresMenu />;
      case Menu.Pause:
        return <PauseMenu />;
      case null:
      default:
        return <Playboard />;
    }
  };

  return (
    <main>
      <Suspense fallback={<div>hello</div>}>{componentReducer()}</Suspense>
    </main>
  );
}
