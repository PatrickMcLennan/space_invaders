import React, { useEffect, MutableRefObject, useRef } from "react";
import { Nav, NavButton } from "../../styles/MenuNav";
import { AnimatePresence } from "framer-motion";
import { Section } from "./PauseMenu.style";
import { menuMountAnimation } from "../../styles/animations";
import { useGameState } from "../../hooks/useContext";
import { CurrentState } from "../../types/GameState.type";

function PauseMenu() {
  const { setGameState } = useGameState();
  const section: MutableRefObject<HTMLElement> = useRef(null);

  return (
    <AnimatePresence>
      <Section
        aria-modal="true"
        animate="animate"
        initial="initial"
        exit="exit"
        ref={section}
        variants={menuMountAnimation}
      >
        <h6>Pause</h6>

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

export default PauseMenu;
