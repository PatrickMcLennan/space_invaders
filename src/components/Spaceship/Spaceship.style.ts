import styled from "styled-components";
import { motion } from "framer-motion";

export const SVG = styled(motion.svg)`
  ${({ theme: { svgSize } }) => svgSize};
  margin: auto auto 50px auto;
  fill: white;
  backface-visibility: visible;
  perspective: 500px;
  transition: all 0.2s;
`;
