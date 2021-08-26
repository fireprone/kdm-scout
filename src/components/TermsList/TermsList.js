import './TermsList.css';
import { useState, useEffect } from 'react';
import glossaryTerms from '../../glossaryTerms';
import { MdKeyboardArrowRight, MdKeyboardArrowUp } from 'react-icons/md';

const TermsList = ({ terms, isHidden }) => {
  const [activeTerm, setActiveTerm] = useState('');

  useEffect(() => {
    setTimeout(() => setActiveTerm(''), 500);
  }, [isHidden]);

  return (
    <div className='TermsList'>
      <div id='term-definition' className={activeTerm ? '' : 'hidden'}>
        <h2>{activeTerm}</h2>
        <hr />
        <p>{glossaryTerms[activeTerm]}</p>
        <div id='return' onClick={() => setActiveTerm('')}>
          <MdKeyboardArrowUp />
        </div>
      </div>
      <ul>
        {terms.map((term) => (
          <li key={term.replace(/ /g, '-')} onClick={() => setActiveTerm(term)}>
            <div className='term'>
              {term}
              <MdKeyboardArrowRight />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TermsList;
