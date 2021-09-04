import './App.css';
import { useState } from 'react';
import LoadoutGrid from './components/LoadoutGrid/LoadoutGrid';
import Overlay from './components/Overlay/Overlay';
import Nav from './components/Nav/Nav';
import ContextMenu from './components/ContextMenu/ContextMenu';

function App() {
  const [focusedCard, setFocusedCard] = useState({ name: '', origin: '' });

  return (
    <div className='App'>
      <Overlay focusedCard={focusedCard} setFocusedCard={setFocusedCard} />
      <div id='section-grid'>
        <div id='context-section'>
          <ContextMenu />
        </div>
        <div id='loadout-section'>
          <LoadoutGrid clickListener={setFocusedCard} />
        </div>
        <div id='nav-section'>
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default App;
