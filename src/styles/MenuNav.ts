import styled from "styled-components";

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
