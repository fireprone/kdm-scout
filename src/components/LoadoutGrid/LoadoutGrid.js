import React from 'react';
import './LoadoutGrid.css';
import LoadoutCard from '../LoadoutCard/LoadoutCard';

const LoadoutGrid = () => {
  return (
    <>
      <div id='loadout-grid' className='container'>
        <LoadoutCard id='1' />
        <LoadoutCard id='2' />
        <LoadoutCard id='3' />
        <LoadoutCard id='4' />
        <LoadoutCard id='5' />
        <LoadoutCard id='6' />
        <LoadoutCard id='7' />
        <LoadoutCard id='8' />
        <LoadoutCard id='9' />
      </div>
    </>
  );
};

export default LoadoutGrid;
