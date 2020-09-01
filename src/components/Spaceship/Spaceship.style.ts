import styled from "styled-components";

export const SVG = styled.svg`
  ${({ theme: { svgSize } }) => svgSize};
  display: block;
  position: absolute;
  fill: white;
  backface-visibility: visible;
  perspective: 500px;
  transition: all 0.2s;
  top: 50%;
  left: 49%;
`;
