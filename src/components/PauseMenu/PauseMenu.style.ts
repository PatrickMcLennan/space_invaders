import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled(motion.section)`
  ${({ theme: { flexin } }) => flexin(`center`, `center`, `column`)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
