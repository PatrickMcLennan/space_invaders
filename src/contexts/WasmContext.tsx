import React, { Context, createContext, useState, useEffect } from "react";
import { WasmContextProvider } from "../types/WasmContext";

export const WasmState: Context<WasmContextProvider> = createContext({} as WasmContextProvider);

export function WasmStateProvider({ children }) {
  const [wasm, setWasm] = useState(null);

  useEffect(() => {
    import("../wasm/pkg/wasm").then(({ start_game }) => setWasm(start_game)).catch(console.error);
  }, []);

  return <WasmState.Provider value={{ wasm, setWasm }}>{children}</WasmState.Provider>;
}
