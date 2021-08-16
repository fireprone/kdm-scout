import React from 'react';
import { useState } from 'react';
import './Overlay.css';
import CardProvider from '../../CardProvider.js';
import LoadoutCard from '../LoadoutCard/LoadoutCard';

const Overlay = ({ focusedCard, clickListener }) => {
  const [cardPath, setCardPath] = useState('');

  const getFocusedPath = async () => {
    if (focusedCard) {
      await import(`../../img/${CardProvider.getImagePath(focusedCard)}`).then(
        (response) => {
          setCardPath(response.default);
        }
      );
    } else {
      return false;
    }
  };

  return (
    <div
      id='overlay'
      className={focusedCard === '' ? 'hidden' : ''}
      onClick={clickListener}
    >
      {getFocusedPath() && (
        <LoadoutCard
          img={cardPath}
          name={focusedCard}
          clickListener={() => null}
        />
      )}
      <div id='overlayBg'></div>
    </div>
  );
};

export default Overlay;
