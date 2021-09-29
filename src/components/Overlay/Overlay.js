import './Overlay.css';
import { useState, useEffect } from 'react';
import LoadoutCard from '../LoadoutCard/LoadoutCard';
import TermsList from '../TermsList/TermsList';
import { motion } from 'framer-motion';

const Overlay = ({ focusedCard, setFocusedCard }) => {
  // const [isShown, setIsShown] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // useEffect(() => {
  //   if (focusedCard.name) {
  //     setIsShown(true);
  //   }
  // }, [focusedCard]);

  return (
    <motion.div
      id='Overlay'
      initial={{ opacity: 0, paddingTop: 0 }}
      animate={{ opacity: 1, paddingTop: '10vmin' }}
      exit={{ opacity: 0, paddingTop: 0 }}
      transition={{
        opacity: { type: 'tween', duration: 0.1 },
        paddingTop: { type: 'spring', duration: 0.5 },
      }}
    >
      <div id='card-preview'>
        <motion.div
          id='flip-card'
          className={isFlipped ? 'is-flipped' : ''}
          onClick={() => setIsFlipped(!isFlipped)}
          initial={{ paddingTop: 0 }}
          animate={{ paddingTop: '2rem' }}
        >
          <LoadoutCard
            whileTap={{ scale: 1.1 }}
            name={focusedCard.name}
            classes='card card-front'
          />
          <LoadoutCard
            whileTap={{ scale: 1.1 }}
            name={focusedCard.origin}
            classes='card card-back'
          />
        </motion.div>
        {focusedCard.terms && focusedCard.terms.length ? (
          <motion.div
            initial={{ paddingTop: 0 }}
            animate={{ paddingTop: '2rem' }}
          >
            <TermsList terms={focusedCard.terms} />
          </motion.div>
        ) : (
          ''
        )}
      </div>
      <div
        id='overlay-bg'
        onClick={() => {
          setFocusedCard({ name: '', origin: '' });
          setIsFlipped(false);
        }}
      ></div>
    </motion.div>
  );
};

export default Overlay;
