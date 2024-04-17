import './App.css';
import Nav from './components/Nav/Nav';
import LoadoutSection from './components/LoadoutSection/LoadoutSection';
import { useState } from 'react';

function App() {
  const [isShowingCardsTray, setIsShowingCardsTray] = useState(false);
  const [isShowingDiceTray, setIsShowingDiceTray] = useState(false);

  const toggleShowingCardsTray = () => {
    setIsShowingCardsTray(!isShowingCardsTray);
  };

  const toggleShowingDiceTray = () => {
    setIsShowingDiceTray(!isShowingDiceTray);
  };

  return (
    <div className='App'>
      <div id='section-grid'>
        <LoadoutSection
          isShowingCardsTray={isShowingCardsTray}
          isShowingDiceTray={isShowingDiceTray}
        />
        <section id='nav-section'>
          <Nav
            toggleShowingCardsTray={toggleShowingCardsTray}
            toggleShowingDiceTray={toggleShowingDiceTray}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
