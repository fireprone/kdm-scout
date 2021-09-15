import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serverWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

// const contextSectionElem = document.getElementById('context-section');
// const contextMenuElem = contextSectionElem.querySelector('.ContextMenu');
// window.addEventListener('resize', () => {
//   if (contextSectionElem.clientHeight > 175) {
//     contextMenuElem.style.transform = 'translateY(0)';
//   } else {
//     contextMenuElem.style.transform = 'translateY(-60%)';
//   }
// });
