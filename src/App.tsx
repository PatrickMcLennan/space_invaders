import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "./styles/styles.style";
import { GameContextProvider } from "./contexts/GameState";
import { PlayerContextProvider } from "./contexts/PlayerState";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { InputContextProvider } from "./contexts/InputHandler";
import { useBackgroundScroll } from "./hooks/useBackgroundScroll";
import { BodyComponent } from "./components/BodyComponent/BodyComponent";

function App(): JSX.Element {
  const [wasm, setWasm]: [any, any] = useState();

  useBackgroundScroll();
  //   useEffect(() => {
  //     import(`./wasm/pkg`)
  //       .then((wasm) => setWasm(wasm))
  //       .catch(console.error);
  //   }, []);

  return (
    <InputContextProvider>
      <GameContextProvider>
        <PlayerContextProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <BodyComponent />
            <Footer />
          </ThemeProvider>
        </PlayerContextProvider>
      </GameContextProvider>
    </InputContextProvider>
  );
}

export default App;
