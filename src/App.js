import './App.css';
import { useState } from 'react';
import LoadoutGrid from './components/LoadoutGrid/LoadoutGrid';
import Overlay from './components/Overlay/Overlay';
import Nav from './components/Nav/Nav';
import ContextMenu from './components/ContextMenu/ContextMenu';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [focusedCard, setFocusedCard] = useState({ name: '', origin: '' });

  return (
    <div className='App'>
      <AnimatePresence>
        {focusedCard.name && (
          <Overlay focusedCard={focusedCard} setFocusedCard={setFocusedCard} />
        )}
      </AnimatePresence>
      <div id='section-grid'>
        <section id='context-section'>
          <ContextMenu />
        </section>
        <section id='loadout-section'>
          <LoadoutGrid clickListener={setFocusedCard} />
        </section>
        <section id='nav-section'>
          <Nav />
        </section>
      </div>
    </div>
  );
}

export default App;
