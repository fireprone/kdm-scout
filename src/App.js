import './App.css';
import { useState } from 'react';
import LoadoutGrid from './components/LoadoutGrid/LoadoutGrid';
import Overlay from './components/Overlay/Overlay';

function App() {
  const [focusedCard, setFocusedCard] = useState({ name: '', img: '' });

  return (
    <div className='App'>
      <Overlay focusedCard={focusedCard} />
      <LoadoutGrid clickListener={setFocusedCard} />
    </div>
  );
}

export default App;
