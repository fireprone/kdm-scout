import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
});

// draggable.on('mirror:attached', (e) => {
//   setTimeout(() => {
//     e.mirror.style.width = '35%';
//   }, 10);
// });
