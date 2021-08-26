import './Overlay.css';
import { useState, useEffect } from 'react';
import LoadoutCard from '../LoadoutCard/LoadoutCard';
import TermsList from '../TermsList/TermsList';

const Overlay = ({ focusedCard }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (focusedCard.name) {
      setIsHidden(false);
    }
  }, [focusedCard]);

  return (
    <div id='Overlay' className={isHidden ? 'hidden' : ''}>
      <div id='overlay-content'>
        <div id='card-preview'>
          <div
            id='flip-card'
            className={isFlipped ? 'is-flipped' : ''}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <LoadoutCard name={focusedCard.name} class='card-front' />
            <LoadoutCard name={focusedCard.origin} class='card-back' />
          </div>
        </div>
        {focusedCard.terms && focusedCard.terms.length ? (
          <TermsList terms={focusedCard.terms} isHidden={isHidden} />
        ) : (
          ''
        )}
      </div>
      <div
        id='overlay-bg'
        onClick={() => {
          setIsHidden(true);
          setIsFlipped(false);
        }}
      ></div>
    </div>
  );
};

export default Overlay;
