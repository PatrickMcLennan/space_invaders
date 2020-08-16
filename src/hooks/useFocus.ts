import { MutableRefObject } from "react";

export function useFocus<T extends HTMLElement>({ current }: MutableRefObject<T>) {
  return current.focus();
}
