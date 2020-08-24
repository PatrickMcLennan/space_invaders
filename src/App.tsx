import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "./styles/styles.style";
import { GameStateProvider } from "./contexts/GameContext";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { InputContextProvider } from "./contexts/InputHandler";
import { useBackgroundScroll } from "./hooks/useBackgroundScroll";
import { BodyComponent } from "./components/BodyComponent/BodyComponent";

function App(): JSX.Element {
  const [wasm, setWasm]: [any, any] = useState();

  useBackgroundScroll();

  //   useEffect(() => {
  //     import(`wasm`)
  //       .then((wasm) => setWasm(wasm))
  //       .catch(console.error);
  //   }, []);

  return (
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
  );
}

export default App;
