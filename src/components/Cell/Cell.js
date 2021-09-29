import './Cell.css';
import { forwardRef } from 'react';
import LoadoutCard from '../LoadoutCard/LoadoutCard';
import { motion } from 'framer-motion';

const Cell = forwardRef(
  (
    {
      index,
      onDragEnd,
      activeIndex,
      onTapStart,
      clickListener,
      dragConstraints,
      cardName,
    },
    ref
  ) => {
    return (
      <div
        id={index}
        ref={ref}
        className='loadout-space'
        style={activeIndex === index ? { zIndex: 2 } : { zIndex: 1 }}
      >
        {cardName ? (
          <motion.div
            className='cardDrag'
            drag
            onDragEnd={onDragEnd}
            dragConstraints={dragConstraints}
            layout
          >
            <LoadoutCard
              whileTap={{ scale: 1.2 }}
              onTapStart={onTapStart}
              name={cardName}
              clickListener={clickListener}
              classes='newCard'
            />
          </motion.div>
        ) : (
          <div className='card' />
        )}
      </div>
    );
  }
);

export default Cell;
