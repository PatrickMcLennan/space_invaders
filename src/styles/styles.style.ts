import { createGlobalStyle, css, FlattenSimpleInterpolation, GlobalStyleComponent } from "styled-components";

import background from "../assets/background.png";
import arcadeFont from "../assets/arcadeFont.ttf";
import { GameState, CurrentState } from "../types/GameState.type";

// Global Resets
export const GlobalStyles: GlobalStyleComponent<{}, {}> = createGlobalStyle`

    :root {
        --next-position: 1200;
    }

    @font-face {
        font-family: arcadeFont;
        src: url(${arcadeFont});
    }

    @keyframes blink {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
        }
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
    }

    body,
    #ROOT {
        min-height: 100vh;
        min-width: 100vw;
    }

    #ROOT {
        display: grid;
        grid-template-areas: 
            "header"
            "body"
            "footer"
        ;
        grid-template-rows: .2fr 1fr .2fr;
        position: relative;
        background-image: url(${background});
        background-position: 0% var(--next-position);
        background-repeat: repeat;
        background-size: cover contain;
        color: white;
        font-family: arcadeFont;
        overflow: hidden;
        transition: background-position 60s linear;
        z-index: 1;
    }

    ul,
    li {
        list-style-type: none;
    }

    a,
    button {
        border: none;
        background-color: rgba(0,0,0,0);
        color: white;
        cursor: pointer;
        font-family: inherit;
        text-decoration: none;
    }

    main {
        position: relative;
    }

    .laser {
        height: 45px;
        width: 10px;
        position: absolute;
        background-color: white;
        border-radius: 5px;
        transform-origin: bottom bottom;
        scale: 0;
        transform: scaleY(1) ;
        transition: all 1s ease-out;

        svg {
            fill: white;
            stroke-width: 3;
            stroke: white;
        }

        rect {
            fill: white;
            stroke-width: 3;
            stroke: white;
        }
    }
`;

// Theme
type Theme = {
  fastBlink: number;
  slowBlink: number;

  flexin: (jc: string, ai: string, fd: string, fw: string) => FlattenSimpleInterpolation;
  fontLine: (fontsize: number, lineHeight: number) => FlattenSimpleInterpolation;
  opaqueOnPause: (gameState: GameState) => FlattenSimpleInterpolation;
  svgSize: FlattenSimpleInterpolation;
  toggleBlink: (speed: number) => FlattenSimpleInterpolation;
};

export const theme: Theme = {
  fastBlink: 0.35,
  slowBlink: 0.45,
  flexin: (jc, ai, fd, fw) => css`
    display: flex;
    justify-content: ${jc};
    align-items: ${ai};
    flex-direction: ${fd};
    justify-content: ${fw};
  `,

  fontLine: (fontSize, lineHeight) => css`
    font-size: ${fontSize / 16}rem;
    line-height: ${lineHeight
      ? css`
          ${lineHeight / 16}rem
        `
      : css`normal`};
  `,

  opaqueOnPause: (gameState) =>
    gameState.current !== CurrentState.Paused
      ? css`
          color: white;
        `
      : css`
          color: rgba(255, 255, 255, 0.5);
        `,

  svgSize: css`
    height: 5vw;
    min-height: 30px;
    width: 5vw;
    min-width: 30px;
  `,

  toggleBlink: (speed) =>
    css`
      opacity: 1;
      transition: opacity 0s none;
      animation: blink ${speed}s linear infinite;
      animation-direction: alternate;
    `,
};
