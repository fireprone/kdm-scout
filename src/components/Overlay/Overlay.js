import './Overlay.css';
import { useState } from 'react';
import LoadoutCard from '../LoadoutCard/LoadoutCard';
import TermsList from '../TermsList/TermsList';
import { motion } from 'framer-motion';

const Overlay = ({ focusedCard, setFocusedCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      id='Overlay'
      initial={{ opacity: 0, marginTop: 0 }}
      animate={{ opacity: 1, marginTop: '10vmin' }}
      exit={{ opacity: 0, marginTop: 0 }}
      transition={{
        opacity: { type: 'tween', duration: 0.3 },
        marginTop: { type: 'tween', duration: 0.3 },
      }}
    >
      <div id='card-preview'>
        <motion.div
          id='flip-card'
          className={isFlipped ? 'is-flipped' : ''}
          onClick={() => setIsFlipped(!isFlipped)}
          initial={{ marginTop: 0 }}
          animate={{ marginTop: '2rem' }}
        >
          <LoadoutCard
            whileTap={{ scale: 1.1 }}
            name={focusedCard.name}
            classes='card-front'
          />
          <LoadoutCard
            whileTap={{ scale: 1.1 }}
            name={focusedCard.origin}
            classes='card-back'
          />
        </motion.div>
        {focusedCard.terms && focusedCard.terms.length ? (
          <TermsList terms={focusedCard.terms} />
        ) : (
          ''
        )}
      </div>
      <div
        id='overlay-bg'
        onClick={() => {
          setFocusedCard({ name: '', origin: '' });
        }}
      ></div>
    </motion.div>
  );
};

export default Overlay;
