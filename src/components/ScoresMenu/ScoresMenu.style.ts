import styled from "styled-components";

export const Section = styled.section`
  ${({ theme: { flexin } }) => flexin(`center`, `center`, `column`)};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  h3 {
    ${({ theme: { fontLine } }) => fontLine(52, 60)};
    margin-bottom: 40px;
    text-transform: uppercase;
  }

  .yikes {
    ${({ theme: { fontLine } }) => fontLine(40, 48)};
    letter-spacing: 5px;
    text-decoration: underline;
  }

  p {
    ${({ theme: { fontLine } }) => fontLine(24, 30)};
    letter-spacing: 1.5px;
    &:not(first-of-type) {
      margin-top: 20px;
    }
  }

  nav {
    margin-top: 30px;
  }
`;
