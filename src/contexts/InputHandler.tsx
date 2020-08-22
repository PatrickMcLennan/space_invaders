import React, { createContext, Context, useEffect, useState, Consumer } from "react";
import { InputStateProvider, InputState, SetInputState } from "../types/InputHandler.type";
import { AcceptedKey, keyReducer } from "../types/Keypresses.type";

export const InputContext: Context<InputStateProvider> = createContext({} as InputStateProvider);

export function InputContextProvider({ children }) {
  const [inputState, setInputState]: [InputState, SetInputState] = useState({
    keyIsDown: false,
    currentKeyPresses: [],
    lastKeyPresses: [],
  });

  const keyIsDown: (e?: KeyboardEvent) => void = (e) => {
    const key: AcceptedKey | AcceptedKey[] = keyReducer(e) ?? inputState.currentKeyPresses;
    if (!key || !inputState.currentKeyPresses.length) return;
    else
      return setInputState((prevState) => ({
        keyIsDown: true,
        currentKeyPresses: prevState.currentKeyPresses.filter((prevKey) => !key.includes(prevKey) || prevKey !== key),
        lastKeyPresses: prevState.lastKeyPresses,
      }));
  };

  console.log(inputState.currentKeyPresses);

  const keyIsUp: (e: KeyboardEvent) => void = (e) => {
    const key: AcceptedKey | false = keyReducer(e);
    console.log(`keyup`);
    if (!key) return;
    else
      return setInputState((prevState) => ({
        keyIsDown: !prevState.currentKeyPresses.filter((currentKey) => currentKey === key).length,
        currentKeyPresses: prevState.currentKeyPresses.filter((currentKey) => currentKey !== key),
        lastKeyPresses: [key, ...prevState.lastKeyPresses.slice(0, 3)],
      }));
  };

  useEffect(() => {
    window.addEventListener(`keydown`, keyIsDown);
    window.addEventListener(`keyup`, keyIsUp);
    return () => {
      window.removeEventListener(`keydown`, keyIsDown);
      window.removeEventListener(`keyup`, keyIsUp);
    };
  }, []);

  return <InputContext.Provider value={{ inputState, setInputState }}>{children}</InputContext.Provider>;
}

export const InputStateConsumer: Consumer<InputStateProvider> = InputContext.Consumer;
