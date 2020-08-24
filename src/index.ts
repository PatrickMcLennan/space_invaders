import { createElement } from "react";
import { render } from "react-dom";

import App from "./App";

const ROOT: HTMLDivElement = document.querySelector(`#ROOT`);
const loaderStyles: HTMLStyleElement = document.querySelector(`.loader-styles`);

render(createElement(App), ROOT, () => {
  loaderStyles.remove();
  if ("serviceWorker" in navigator)
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => console.log("SW registered: ", registration))
        .catch((registrationError) => console.log("SW registration failed: ", registrationError));
    });
  else return;
});
