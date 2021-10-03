import './LoadoutGrid.css';
import { useState, useRef } from 'react';
import Cell from '../Cell/Cell';
import { AnimateSharedLayout } from 'framer-motion';

const LoadoutGrid = ({ clickListener }) => {
  const gridRef = useRef(null);
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);

  const cells = [ref0, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8];

  const [gridArray, setGridArray] = useState([
    null,
    null,
    null,
    null,
    'Founding Stone',
    'Cloth',
    null,
    null,
    null,
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const checkCellIndex = ({ point }) => {
    const cellIndex = cells.findIndex((cell) => {
      const { left, right, top, bottom } = cell.current.getBoundingClientRect();

      return (
        point.x >= left &&
        point.x <= right &&
        point.y >= top &&
        point.y <= bottom
      );
    });

    return cellIndex;
  };

  const tapStart = (event) => {
    const parentElem = event.target.parentElement;
    if (parentElem) {
      parentElem.parentElement.style.zIndex = 2;
      setActiveIndex(parseInt(parentElem.parentElement.id));
      setIsDragging(true);
    }
  };

  const dragEnd = (_, info) => {
    const cellIndex = checkCellIndex(info);

    if (cellIndex >= 0 && cellIndex !== activeIndex) {
      const newGridArray = [...gridArray];
      const temp = newGridArray[cellIndex];

      newGridArray[cellIndex] = newGridArray[activeIndex];
      newGridArray[activeIndex] = temp;
      setGridArray(newGridArray);
    }

    setIsDragging(false);
  };

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
