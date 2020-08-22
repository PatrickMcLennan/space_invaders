import React, { useEffect, MutableRefObject, useRef } from "react";
import { Nav, NavButton } from "../../styles/MenuNav";
import { useFocus } from "../../hooks/useFocus";
import { AnimatePresence } from "framer-motion";
import { Section } from "./PauseMenu.style";
import { menuMountAnimation } from "../../styles/animations";
import { useGame } from "../../hooks/useContext";
import { CurrentState } from "../../types/GameState.type";

export function PauseMenu() {
  const { setGameState } = useGame();
  const continueButton: MutableRefObject<HTMLButtonElement> = useRef(null);
  useEffect(() => useFocus(continueButton), []);
  return (
    <AnimatePresence>
      <Section aria-modal="true" animate="animate" initial="initial" exit="exit" variants={menuMountAnimation}>
        <h6>Pause</h6>

        <Nav>
          <li>
            <NavButton
              ref={continueButton}
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
