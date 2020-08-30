import React, { createContext, Context, useEffect, useState, Consumer } from "react";
import { InputStateProvider, InputState, SetInputState } from "../types/InputHandler.type";
import { AcceptedKey } from "../types/Keypresses.type";

function keyReducer({ key }: KeyboardEvent): AcceptedKey {
  switch (key.toLowerCase()) {
    case `arrowup`:
    case `up`:
    case `w`:
      return AcceptedKey.Up;
    case `arrowdown`:
    case `down`:
    case `s`:
      return AcceptedKey.Down;
    case `arrowright`:
    case `right`:
    case `d`:
      return AcceptedKey.Right;
    case `arrowleft`:
    case `left`:
    case `a`:
      return AcceptedKey.Left;
    case ` `:
      return AcceptedKey.Shoot;
    case `escape`:
      return AcceptedKey.Pause;
    default:
      return null;
  }
}

export const InputContext: Context<InputStateProvider> = createContext({} as InputStateProvider);

export function InputContextProvider({ children }) {
  const [inputState, setInputState]: [InputState, SetInputState] = useState([]);

  const keyIsDown: (e: KeyboardEvent) => void = (e) => {
    const key: AcceptedKey = keyReducer(e);
    if (e.repeat || !key) return;
    else return setInputState((prevState) => [...new Set([key, ...prevState])]);
  };

  const keyIsUp: (e: KeyboardEvent) => void = (e) => {
    const key: AcceptedKey = keyReducer(e);
    if (!key) return;
    else return setInputState((prevState) => prevState.filter((currentKey) => currentKey !== key));
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
