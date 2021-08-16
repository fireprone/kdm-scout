import './App.css';
import { useState } from 'react';
import LoadoutGrid from './components/LoadoutGrid/LoadoutGrid';
import Overlay from './components/Overlay/Overlay';

function App() {
  const [state, setState] = useState({ focusedCard: '' });

  const showOverlay = (cardName) => {
    setState({
      focusedCard: cardName,
    });
  };

  const hideOverlay = () => {
    setState({
      focusedCard: '',
    });
  };

  return (
    <div className='App'>
      <Overlay focusedCard={state.focusedCard} clickListener={hideOverlay} />
      <LoadoutGrid clickListener={showOverlay} />
    </div>
  );
}

export default App;
