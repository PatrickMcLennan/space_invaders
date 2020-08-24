import { AcceptedKey } from "../types/Keypresses.type";

export function useTrapFocus<T extends HTMLElement>(elementRef: T, inputState: AcceptedKey[]) {
  const focusElements: HTMLElement[] = Array.from(
    elementRef.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
  );

  if (!focusElements.includes(document.activeElement as HTMLElement)) return focusElements[0].focus();

  const currentFocusIndex = focusElements.indexOf(document.activeElement as HTMLElement);

  if (inputState.includes(AcceptedKey.Up))
    return currentFocusIndex === 0
      ? focusElements[focusElements.length - 1].focus()
      : focusElements[currentFocusIndex - 1].focus();
  else if (inputState.includes(AcceptedKey.Down))
    return currentFocusIndex === focusElements.length - 1
      ? focusElements[0].focus()
      : focusElements[currentFocusIndex + 1].focus();
  else return;
}
