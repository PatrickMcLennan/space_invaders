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

export const Nav = styled.nav`
  min-width: 50vw;

  ul {
    ${({ theme: { flexin } }) => flexin(`center`, `stretch`, `column`)};
    margin-top: 30px;
    width: 100%;

    li:not(:last-of-type) {
      margin-bottom: 15px;
    }
  }
`;

export const NavButton = styled.button`
  ${({ theme: { fontLine } }) => fontLine(40, 50)};
  width: 100%;
  text-align: center;

  &:focus,
  &:active {
    ${({ theme: { fastBlink, toggleBlink } }) => toggleBlink(fastBlink)}
  }
`;
