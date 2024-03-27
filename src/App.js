import './App.css';
import Nav from './components/Nav/Nav';
import LoadoutSection from './components/LoadoutSection/LoadoutSection';
import Tray from './components/Tray/Tray';
import { useState } from 'react';

function App() {
  const [isShowingTray, setIsShowingTray] = useState(false);

  return (
    <div className='App'>
      <div id='section-grid'>
        <LoadoutSection
          setIsShowingTray={setIsShowingTray}
          isShowingTray={isShowingTray}
        />
        <section id='nav-section'>
          <Nav
            setIsShowingTray={setIsShowingTray}
            isShowingTray={isShowingTray}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
