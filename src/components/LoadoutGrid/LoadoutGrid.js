import React from 'react';
import './LoadoutGrid.css';
import LoadoutCard from '../LoadoutCard/LoadoutCard';
import img1 from '../../img/cloth.png';
import img2 from '../../img/founding-stone.png';

const LoadoutGrid = ({ clickListener }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <div id='loadout-grid' className='container'>
        {numbers.map((number) => (
          <div key={`space-${number}`} className='loadout-space'>
            {number === 5 ? (
              <LoadoutCard
                img={img1}
                name={'Cloth'}
                clickListener={clickListener}
              />
            ) : number === 6 ? (
              <LoadoutCard
                img={img2}
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
