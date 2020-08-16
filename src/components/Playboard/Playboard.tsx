import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menuMountAnimation } from "../../styles/animations";

export function Playboard() {
  return (
    <AnimatePresence>
      <motion.section initial={"initial"} animate={"animate"} exit={"exit"} variants={menuMountAnimation}>
        <h1>play board</h1>
      </motion.section>
    </AnimatePresence>
  );
}
