import styled from "styled-components";

export const SHeader = styled.header`
  ${({ theme: { flexin } }) => flexin()};
  grid-area: header;
  justify-content: end;

  span {
    ${({ theme: { fontLine } }) => fontLine(20, 21)};
    margin: auto 15px 15px auto;
    margin-top: auto;
    margin-left: auto;
    color: white;
  }
`;
