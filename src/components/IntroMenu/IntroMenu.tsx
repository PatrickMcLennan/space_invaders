import React, { MutableRefObject, useEffect, useRef } from "react";
import { Section, H1 } from "./IntroMenu.style";
import { useFocus } from "../../hooks/useFocus";
import { useGame } from "../../hooks/useContext";
import { AnimatePresence } from "framer-motion";
import { menuMountAnimation } from "../../styles/animations";
import { Nav, NavButton } from "../../styles/MenuNav";

export function IntroMenu() {
  const { startGame } = useGame();

  const playButton: MutableRefObject<HTMLButtonElement> = useRef(null);
  useEffect(() => useFocus(playButton), []);

  return (
    <AnimatePresence>
      <Section initial={"initial"} animate={"animate"} exit={"exit"} variants={menuMountAnimation}>
        <H1>Space Invaders</H1>
        <Nav>
          <ul>
            <li>
              <NavButton onClick={startGame} ref={playButton}>
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
