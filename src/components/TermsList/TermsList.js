import './TermsList.css';
import { useState, useEffect } from 'react';
import glossaryTerms from '../../glossaryTerms';
import { MdKeyboardArrowUp } from 'react-icons/md';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { animated } from 'react-spring';

const TermsList = ({ terms, isShown, style }) => {
  const [activeTerm, setActiveTerm] = useState('');

  useEffect(() => {
    setTimeout(() => setActiveTerm(''), 500);
  }, [isShown]);

  return (
    <animated.div className='TermsList' style={style}>
      {activeTerm && (
        <div id='term-definition' className={activeTerm ? '' : 'hidden'}>
          <h2>{activeTerm}</h2>
          <hr />
          <p>{glossaryTerms[activeTerm]}</p>
          <div id='return' onClick={() => setActiveTerm('')}>
            <MdKeyboardArrowUp />
          </div>
        </div>
      )}
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
    </animated.div>
  );
};

export default TermsList;
