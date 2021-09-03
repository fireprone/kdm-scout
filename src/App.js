import './App.css';
import { useState } from 'react';
import LoadoutGrid from './components/LoadoutGrid/LoadoutGrid';
import Overlay from './components/Overlay/Overlay';

function App() {
  const [focusedCard, setFocusedCard] = useState({ name: '', origin: '' });

  return (
    <div className='App'>
      <Overlay focusedCard={focusedCard} setFocusedCard={setFocusedCard} />

      <div id='loadout-section'>
        <LoadoutGrid clickListener={setFocusedCard} />
      </div>
    </div>
  );
}

export default App;
