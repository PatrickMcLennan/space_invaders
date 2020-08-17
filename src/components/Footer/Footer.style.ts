import styled from "styled-components";

export const Footer = styled.footer`
  ${({ theme: { flexin } }) => flexin(`center`, `center`, `column`)};
  grid-area: footer;
`;
