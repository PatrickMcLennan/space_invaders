import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled(motion.section)`
  ${({ theme: { flexin } }) => flexin(`center`, `center`, `column`)};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  border: 1px solid red;
`;
