import './App.css';
import { useState } from 'react';
import LoadoutGrid from './components/LoadoutGrid/LoadoutGrid';
import Overlay from './components/Overlay/Overlay';

function App() {
  const [focusedCard, setFocusedCard] = useState({ name: '', img: '' });

  return (
    <div className='App'>
      <div id='loadout-section'>
        <Overlay focusedCard={focusedCard} />
        <LoadoutGrid clickListener={setFocusedCard} />
      </div>
    </div>
  );
}

export default App;
