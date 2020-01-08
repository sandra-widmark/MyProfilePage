import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {  StyleReset } from 'atomize';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import App from './App';
import * as serviceWorker from './serviceWorker';

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();


ReactDOM.render(
<StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <StyleReset />
          <App />
  </StyletronProvider>, document.getElementById('root'));

serviceWorker.unregister();
