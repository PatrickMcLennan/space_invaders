import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "./styles/styles.style";
import { GameStateProvider } from "./contexts/GameContext";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { InputContextProvider } from "./contexts/InputHandler";
import { useBackgroundScroll } from "./hooks/useBackgroundScroll";
import { BodyComponent } from "./components/BodyComponent/BodyComponent";
import { WasmStateProvider } from "./contexts/WasmContext";

function App(): JSX.Element {
  useBackgroundScroll();
  return (
    <WasmStateProvider>
      <InputContextProvider>
        <GameStateProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <BodyComponent />
            <Footer />
          </ThemeProvider>
        </GameStateProvider>
      </InputContextProvider>
    </WasmStateProvider>
  );
}

export default App;
