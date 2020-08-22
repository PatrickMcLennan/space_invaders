import React from "react";
import { AnimatePresence } from "framer-motion";
import { menuMountAnimation } from "../../styles/animations";
import { Spaceship } from "../svgs/Spaceship";
import { Section } from "./Playboard.style";

export function Playboard(): JSX.Element {
  return (
    <AnimatePresence>
      <Section initial={"initial"} animate={"animate"} exit={"exit"} variants={menuMountAnimation}>
        <Spaceship />
      </Section>
    </AnimatePresence>
  );
}
