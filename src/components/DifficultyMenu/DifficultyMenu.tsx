import React, { MutableRefObject, useRef } from "react";
import { useGameState } from "../../hooks/useContext";
import { AnimatePresence } from "framer-motion";
import { menuMountAnimation } from "../../styles/animations";
import { Nav, NavButton } from "../../styles/MenuNav";
import { Difficulty } from "../../types/GameState.type";

import { Section } from "./DifficultyMenu.style";

export function DifficultyMenu(): JSX.Element {
  const { setGameState } = useGameState();
  const section: MutableRefObject<HTMLElement> = useRef(null);

  return (
    <AnimatePresence>
      <Section animate="animate" aria-modal="true" exit="exit" ref={section} variants={menuMountAnimation}>
        <h6>Choose Your Difficulty</h6>

        <Nav>
          {Object.keys(Difficulty).map((difficulty) => (
            <li key={difficulty}>
              <NavButton
                onClick={() =>
                  setGameState((prevState) => ({
                    ...prevState,
                    currentMenu: null,
                    difficulty: Difficulty[difficulty],
                  }))
                }
              >
                {difficulty === `Normal` && `Go Easy on Me`}
                {difficulty === `Drinking` && `Don't drink and fly`}
                {difficulty === `CarpalTunnel` && `Carpal Tunnel`}
              </NavButton>
            </li>
          ))}
        </Nav>
      </Section>
    </AnimatePresence>
  );
}
