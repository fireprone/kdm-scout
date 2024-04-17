import './Nav.css';

const Nav = ({ toggleShowingCardsTray, toggleShowingDiceTray }) => {
  return (
    <nav className='Nav'>
      <ul>
        <li>
          <button onClick={toggleShowingCardsTray}>Cards</button>
        </li>
        <li>
          <button onClick={toggleShowingDiceTray}>Dice</button>
        </li>
        <li>
          <button>Stats</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
