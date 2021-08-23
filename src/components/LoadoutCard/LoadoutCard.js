import './LoadoutCard.css';
import React, { useEffect, useState } from 'react';
import CardProvider from '../../CardProvider';

const LoadoutCard = (props) => {
  const [cardInfo, setCardInfo] = useState({ name: '', image: '', origin: '' });

  const loadCardInfo = async () => {
    const card = await CardProvider.getCard(props.name);
    setCardInfo(card);
  };

  useEffect(() => loadCardInfo(), [props.name]);

  return (
    <img
      onClick={() =>
        props.clickListener
          ? props.clickListener({ name: props.name, ...cardInfo })
          : true
      }
      src={cardInfo.image}
      className={`card ${props.class ? props.class : ''}`}
      alt={`${props.name} Card`}
    />
  );
};

export default LoadoutCard;
