import './TermsList.css';
import { useState, useEffect } from 'react';
import glossaryTerms from '../../glossaryTerms';
import { MdKeyboardArrowUp } from 'react-icons/md';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { motion, AnimatePresence } from 'framer-motion';

const TermsList = ({ terms, isShown }) => {
  const [activeTerm, setActiveTerm] = useState('');

  useEffect(() => {
    setTimeout(() => setActiveTerm(''), 500);
  }, [isShown]);

  return (
    <motion.div
      className='TermsList'
      initial={{ marginTop: 0 }}
      animate={{ marginTop: ['1rem', '3rem', '2rem'] }}
      transition={{
        marginTop: { type: 'spring', duration: 0.75 },
      }}
    >
      <AnimatePresence>
        {activeTerm && (
          <motion.div
            id='term-definition'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              marginTop: { type: 'spring', duration: 0.1 },
            }}
          >
            <h2>{activeTerm}</h2>
            <hr />
            <p>{glossaryTerms[activeTerm]}</p>
            <div id='return' onClick={() => setActiveTerm('')}>
              <MdKeyboardArrowUp />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ul>
        {terms.map((term) => (
          <li key={term.replace(/ /g, '-')} onClick={() => setActiveTerm(term)}>
            <div className='term'>
              {term}
              <LibraryBooksIcon />
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TermsList;
