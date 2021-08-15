import React from 'react';
import './LoadoutCard.css';
import img1 from '../../img/cloth.png';
import img2 from '../../img/founding-stone.png';

const LoadoutCard = (props) => {
  return (
    <div id={`card-${props.id}`} className='loadout-space'>
      {props.id === '5' && <img src={img1} className='card' alt='Cloth Card' />}
      {props.id === '6' && (
        <img src={img2} className='card' alt='Founding Stone Card' />
      )}
      {props.id !== '5' && props.id !== '6' && <div className='card' />}
    </div>
  );
};

export default LoadoutCard;
