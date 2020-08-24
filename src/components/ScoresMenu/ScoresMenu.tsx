import React, { useEffect, Dispatch, SetStateAction, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { Nav, NavButton } from "../../styles/MenuNav";
import { useGameState, useInput } from "../../hooks/useContext";
import { CurrentState, Menu } from "../../types/GameState.type";
import { useTrapFocus } from "../../hooks/useTrapFocus";
import { Section } from "./ScoresMenu.style";

type Score = { name: string; score: number };

function ScoresMenu() {
  const [scores, setScores]: [Score[], Dispatch<SetStateAction<Score[]>>] = useState([]);
  const [error, setError]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  const { gameState, setGameState } = useGameState();
  const { inputState } = useInput();
  const section = useRef(null);

  useEffect(() => {
    if (gameState.currentMenu === Menu.HighScores)
      Promise.all([
        fetch(process.env.GET_API)
          .then((newScores) => newScores.json())
          .then((newScores) => setScores(newScores))
          .catch((error) => setError(true)),
        useTrapFocus(section.current, inputState),
      ]);
  }, [gameState.currentMenu]);

  return (
    <AnimatePresence>
      <Section ref={section}>
        <h3>High Scores</h3>
        <ul></ul>

        {error && (
          <>
            <span className="yikes">Yikes</span>
            <p>There was an error accessing the High Scores</p>

            <p>Please try again another time.</p>
          </>
        )}

        {!error && !scores.length && (
          <>
            <span>Loading ...</span>
          </>
        )}

        {!!scores.length && (
          <ul>
            {scores.map(({ name, score }) => (
              <li>
                <span>{name}</span>
                <span>{score}</span>
              </li>
            ))}
          </ul>
        )}

        <Nav>
          <li>
            <NavButton
              onClick={() =>
                setGameState((prevState) => ({
                  ...prevState,
                  current: CurrentState.Playing,
                }))
              }
            >
              Continue
            </NavButton>
          </li>
          <li>
            <NavButton>Start over</NavButton>
          </li>
        </Nav>
      </Section>
    </AnimatePresence>
  );
}

export default ScoresMenu;
