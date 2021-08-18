import React, { useState, useEffect } from 'react';
import './Overlay.css';
import LoadoutCard from '../LoadoutCard/LoadoutCard';

const Overlay = ({ focusedCard }) => {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    if (focusedCard.name) {
      setIsHidden(false);
    }
  }, [focusedCard]);

  const hideOverlay = () => {
    setIsHidden(true);
  };

  return (
    <div
      id='overlay'
      className={isHidden ? 'hidden' : ''}
      onClick={hideOverlay}
    >
      <h1>{focusedCard.name}</h1>
      <hr></hr>
      <LoadoutCard
        img={focusedCard.img}
        name={focusedCard.name}
        clickListener={() => true}
      />
      {/* <p>{CardProvider.getCard(focusedCard).Definitions[0]}</p> */}
      <div id='overlayBg'></div>
    </div>
  );
};

export default Overlay;
