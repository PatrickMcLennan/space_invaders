import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled(motion.section)`
  ${({ theme: { flexin } }) => flexin(`center`, `center`, `column`)};
  height: 100%;
  width: 100%;
`;

export const H1 = styled.h1`
  ${({ theme: { fontLine } }) => fontLine(80, 100)};
`;
