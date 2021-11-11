import './LoadoutGrid.css';
import { useState, useRef } from 'react';
import Cell from '../Cell/Cell';
import { AnimateSharedLayout } from 'framer-motion';

const LoadoutGrid = ({
  cells,
  gridArray,
  activeIndex,
  tapStart,
  dragEnd,
  clickListener,
}) => {
  const gridRef = useRef(null);

  return (
    <AnimateSharedLayout>
      <div id='loadout-grid' ref={gridRef}>
        {cells.map((cell, i) => (
          <Cell
            index={i}
            activeIndex={activeIndex}
            key={`cell-${i}`}
            onTapStart={tapStart}
            clickListener={clickListener}
            onDragEnd={dragEnd}
            ref={cell}
            dragConstraints={gridRef}
            cardName={gridArray[i]}
          />
        ))}
      </div>
    </AnimateSharedLayout>
  );
};

export default LoadoutGrid;
