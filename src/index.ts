import { createElement } from 'react';
import { render } from 'react-dom';

import App from './App';

const ROOT: HTMLDivElement = document.querySelector(`#ROOT`);

render(createElement(App), ROOT);