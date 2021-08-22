import React from 'react';
import './LoadoutCard.css';

const LoadoutCard = (props) => {
  return (
    <>
      <img
        onClick={() => props.clickListener(props)}
        src={props.img}
        className={`card ${props.class ? props.class : ''}`}
        alt={`${props.name} Card`}
      />
    </>
  );
};

export default LoadoutCard;
