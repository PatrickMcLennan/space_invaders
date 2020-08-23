import { createElement } from "react";
import { render } from "react-dom";

import App from "./App";

const ROOT: HTMLDivElement = document.querySelector(`#ROOT`);
const LOADER: HTMLDivElement = document.querySelector(`.loader`);

render(createElement(App), ROOT, () => {
  LOADER.remove();
  if ("serviceWorker" in navigator)
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => console.log("SW registered: ", registration))
        .catch((registrationError) => console.log("SW registration failed: ", registrationError));
    });
  else return;
});
