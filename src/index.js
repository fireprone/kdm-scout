import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Swappable } from '@shopify/draggable';
import * as serviceWorkerRegistration from './serverWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// eslint-disable-next-line
const draggable = new Swappable(document.getElementById('loadout-grid'), {
  draggable: '.card',
  distance: 10,
  mirror: {
    constrainDimensions: true,
  },
});

serviceWorkerRegistration.register();
