import './LoadoutGrid.css';
import React from 'react';
import LoadoutCard from '../LoadoutCard/LoadoutCard';

const LoadoutGrid = ({ clickListener }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <div id='loadout-grid' className='container'>
        {numbers.map((number) => (
          <div key={`space-${number}`} className='loadout-space'>
            {number === 5 ? (
              <LoadoutCard name={'Cloth'} clickListener={clickListener} />
            ) : number === 6 ? (
              <LoadoutCard
                name={'Founding Stone'}
                clickListener={clickListener}
              />
            ) : (
              <div className='card' />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default LoadoutGrid;
