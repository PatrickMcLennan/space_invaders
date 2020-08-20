import React, { useRef, RefObject, MutableRefObject, RefAttributes } from "react";
import { AnimatePresence, useMotionValue, MotionValue } from "framer-motion";
import { menuMountAnimation } from "../../styles/animations";
import { Spaceship } from "../svgs/Spaceship";
import { Section } from "./Playboard.style";
import { ElementCoords } from "../../types/ElementCoords";
import { useInput } from "../../hooks/useContext";
import { AcceptedKey } from "../../types/Keypresses.type";
import { Laser } from "../svgs/Laser";

export function Playboard() {
  const { inputState } = useInput();
  const spaceship: MutableRefObject<HTMLElement> = useRef(null);
  const [x, y]: [ElementCoords["x"], ElementCoords["y"]] = [useMotionValue(0), useMotionValue(0)];
  const IS_SHOOTING = inputState.keyIsDown && inputState.currentKeyPresses.includes(AcceptedKey.Shoot);

  console.log(spaceship);

  return (
    <AnimatePresence>
      <Section initial={"initial"} animate={"animate"} exit={"exit"} variants={menuMountAnimation}>
        <Spaceship coords={{ x, y }} ref={spaceship} />
        {IS_SHOOTING && (
          <Laser
            x={x}
            y={y}
            startingCoords={{
              x: spaceship.current.getBoundingClientRect().left,
              y: spaceship.current.getBoundingClientRect().top,
            }}
          />
        )}
      </Section>
    </AnimatePresence>
  );
}
