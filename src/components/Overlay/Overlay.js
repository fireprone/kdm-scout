import React, { useState, useEffect } from 'react';
import './Overlay.css';
import LoadoutCard from '../LoadoutCard/LoadoutCard';
import CardProvider from '../../CardProvider';
import TermsList from '../TermsList/TermsList';

const Overlay = ({ focusedCard }) => {
  const [isHidden, setIsHidden] = useState(true);
  let cardInfo;

  if (focusedCard) {
    cardInfo = CardProvider.getCard(focusedCard.name) || { terms: [] };
  }

  useEffect(() => {
    if (focusedCard.name) {
      setIsHidden(false);
    }
  }, [focusedCard]);

  return (
    <div id='Overlay' className={isHidden ? 'hidden' : ''}>
      <div id='overlayContent'>
        <LoadoutCard
          img={focusedCard.img}
          name={focusedCard.name}
          clickListener={() => true}
        />
        {cardInfo.terms.length ? (
          <TermsList terms={cardInfo.terms} isHidden={isHidden} />
        ) : (
          ''
        )}
      </div>
      <div
        id='overlayBg'
        onClick={() => {
          setIsHidden(true);
        }}
      ></div>
    </div>
  );
};

export default Overlay;
