import React from 'react';
import './LoadoutCard.css';

const LoadoutCard = (props) => {
  return (
    <>
      <img
        onClick={() => props.clickListener(props.name)}
        src={props.img}
        className='card'
        alt={`${props.name} Card`}
      />
    </>
  );
};

export default LoadoutCard;
