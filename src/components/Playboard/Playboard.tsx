import React from "react";
import { AnimatePresence } from "framer-motion";
import { menuMountAnimation } from "../../styles/animations";
import { Spaceship } from "../Spaceship/Spaceship";
import { Section } from "./Playboard.style";

function Playboard(): JSX.Element {
  return (
    <AnimatePresence>
      <Section initial={"initial"} animate={"animate"} exit={"exit"} variants={menuMountAnimation}>
        <Spaceship />
      </Section>
    </AnimatePresence>
  );
}

export default Playboard;
