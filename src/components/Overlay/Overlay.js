import React, { useState, useEffect } from 'react';
import './Overlay.css';
import LoadoutCard from '../LoadoutCard/LoadoutCard';
import CardProvider from '../../CardProvider';
import TermsList from '../TermsList/TermsList';
import backImg from '../../img/starting-gear-back.png';

const Overlay = ({ focusedCard }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);

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
        <div id='card-preview'>
          <div
            id='flip-card'
            className={isFlipped ? 'is-flipped' : ''}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <LoadoutCard
              img={focusedCard.img}
              name={focusedCard.name}
              clickListener={() => true}
              class='card-front'
            />
            <LoadoutCard
              img={backImg}
              name='Card Back'
              clickListener={() => true}
              class='card-back'
            />
          </div>
        </div>
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
          setIsFlipped(false);
        }}
      ></div>
    </div>
  );
};

export default Overlay;
