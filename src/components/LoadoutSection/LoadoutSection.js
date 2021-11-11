import LocationsMenu from '../LocationsMenu/LocationsMenu';
import LoadoutGrid from '../LoadoutGrid/LoadoutGrid';
import { AnimatePresence } from 'framer-motion';
import Overlay from '../Overlay/Overlay';
import { useState, useRef } from 'react';

const LoadoutSection = () => {
  const [focusedCard, setFocusedCard] = useState({ name: '', origin: '' });
  const [isDragging, setIsDragging] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [gridArray, setGridArray] = useState([
    null,
    null,
    null,
    null,
    'founding-stone',
    'cloth',
    null,
    null,
    null,
  ]);

  const cell0 = useRef(null),
    cell1 = useRef(null),
    cell2 = useRef(null),
    cell3 = useRef(null),
    cell4 = useRef(null),
    cell5 = useRef(null),
    cell6 = useRef(null),
    cell7 = useRef(null),
    cell8 = useRef(null);

  const cells = [cell0, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8];

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

  const dragEnd = (event, info) => {
    const cellIndex = checkCellIndex(info);
    const newGridArray = [...gridArray];
    debugger;
    if (cellIndex >= 0 && cellIndex !== activeIndex) {
      if (isNaN(activeIndex)) {
        newGridArray[cellIndex] = event.srcElement.classList[0];
      } else {
        const temp = newGridArray[cellIndex];
        newGridArray[cellIndex] = newGridArray[activeIndex];
        newGridArray[activeIndex] = temp;
      }

      setGridArray(newGridArray);
    }

    setIsDragging(false);
  };

  const tapStart = (event) => {
    const parentElem = event.target.parentElement;
    if (parentElem) {
      parentElem.parentElement.style.zIndex = 2;
      setActiveIndex(parseInt(parentElem.parentElement.id));
      setIsDragging(true);
    }
  };

  return (
    <>
      <AnimatePresence>
        {focusedCard.name && (
          <Overlay focusedCard={focusedCard} setFocusedCard={setFocusedCard} />
        )}
      </AnimatePresence>
      <section id='locations-section'>
        <LocationsMenu
          tapStart={tapStart}
          dragEnd={dragEnd}
          clickListener={setFocusedCard}
        />
      </section>
      <section id='loadout-section'>
        <LoadoutGrid
          cells={cells}
          gridArray={gridArray}
          activeIndex={activeIndex}
          tapStart={tapStart}
          dragEnd={dragEnd}
          clickListener={setFocusedCard}
        />
      </section>
    </>
  );
};

export default LoadoutSection;
