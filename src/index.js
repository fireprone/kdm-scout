import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Swappable } from '@shopify/draggable';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const draggable = new Swappable(document.getElementById('loadout-grid'), {
  draggable: '.card',
  distance: 10,
  mirror: {
    constrainDimensions: true,
  },
});
