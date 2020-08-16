import styled from "styled-components";

export const Footer = styled.footer`
  ${({ theme: { flexin } }) => flexin(`space-between`)};
  grid-area: footer;
  border-top: 1px solid white;
`;
