import React, { MutableRefObject, useEffect, useRef } from "react";
import { Section, H1 } from "./IntroMenu.style";
import { useFocus } from "../../hooks/useFocus";
import { useGameState } from "../../hooks/useContext";
import { AnimatePresence } from "framer-motion";
import { menuMountAnimation } from "../../styles/animations";
import { Nav, NavButton } from "../../styles/MenuNav";
import { CurrentState } from "../../types/GameState.type";

export function IntroMenu(): JSX.Element {
  const { setGameState } = useGameState();

  const playButton: MutableRefObject<HTMLButtonElement> = useRef(null);
  useEffect(() => useFocus(playButton), []);

  return (
    <AnimatePresence>
      <Section initial={"initial"} animate={"animate"} exit={"exit"} variants={menuMountAnimation}>
        <H1>Space Invaders</H1>
        <Nav>
          <ul>
            <li>
              <NavButton
                onClick={() =>
                  setGameState((prevState) => ({
                    ...prevState,
                    current: CurrentState.Playing,
                    currentMenu: null,
                  }))
                }
                ref={playButton}
              >
                Play
              </NavButton>
            </li>
            <li>
              <NavButton>How To Play</NavButton>
            </li>
            <li>
              <NavButton>High Scores</NavButton>
            </li>
          </ul>
        </Nav>
      </Section>
    </AnimatePresence>
  );
}
