import './App.css';
import Nav from './components/Nav/Nav';
import LoadoutSection from './components/LoadoutSection/LoadoutSection';

function App() {
  return (
    <div className='App'>
      <div id='section-grid'>
        <LoadoutSection />
        <section id='nav-section'>
          <Nav />
        </section>
      </div>
    </div>
  );
}

export default App;
