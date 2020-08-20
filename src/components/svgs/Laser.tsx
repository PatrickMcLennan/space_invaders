import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ElementCoords, StartingCoords } from "../../types/ElementCoords";

type Props = {
  x: ElementCoords["x"];
  y: ElementCoords["y"];
  startingCoords: StartingCoords;
};

const SVG = styled(motion.svg)<Props>`
  margin-left: ${({ startingCoords: { x } }) => Math.floor(x)}px;
  margin-top: ${({ startingCoords: { y } }) => Math.floor(y)}px;
  rect {
    fill: white;
  }
`;

export function Laser({ x, y, startingCoords }: Props): JSX.Element {
  console.log(startingCoords);
  return (
    <SVG animate={{ x: x.get(), y: y.get() }} startingCoords={startingCoords} width="15" height="45">
      <rect width="15" height="45" rx="15" />
    </SVG>
  );
}
