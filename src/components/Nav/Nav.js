import './Nav.css';

const Nav = ({ isShowingTray, setIsShowingTray }) => {
  return (
    <nav className='Nav'>
      <ul>
        <li>
          <button onClick={() => setIsShowingTray(!isShowingTray)}>
            Cards
          </button>
        </li>
        <li>
          <button>Dice</button>
        </li>
        <li>
          <button>Stats</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
