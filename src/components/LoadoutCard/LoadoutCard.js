import './LoadoutCard.css';
import { useEffect, useState } from 'react';
import CardProvider from '../../CardProvider';

const LoadoutCard = (props) => {
  const [cardInfo, setCardInfo] = useState({ image: '', origin: '' });

  useEffect(
    () =>
      (async function loadCardData() {
        const card = await CardProvider.getCard(props.name);
        setCardInfo(card);
      })(),
    [props.name]
  );

  return (
    <>
      {!cardInfo.image ? (
        <div className='card' />
      ) : (
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
      )}
    </>
  );
};

export default LoadoutCard;
