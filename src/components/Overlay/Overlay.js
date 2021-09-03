import './Overlay.css';
import { useState, useEffect } from 'react';
import LoadoutCard from '../LoadoutCard/LoadoutCard';
import TermsList from '../TermsList/TermsList';
import { useTrail, animated, config } from 'react-spring';

const Overlay = ({ focusedCard }) => {
  const [isShown, setIsShown] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (focusedCard.name) {
      setIsShown(true);
    }
  }, [focusedCard]);

  const trail = useTrail(2, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: isShown ? 1 : 0,
    transform: isShown ? 'translateY(5vmin)' : 'translateY(0vmin)',
    from: { opacity: 0, transform: 'translateY(0vmin)' },
    config: config.gentle,
  });

  return (
    <div id='Overlay' className={isShown ? '' : 'hidden'}>
      <div id='overlay-content'>
        <animated.div id='card-preview' style={trail[0]}>
          <div
            id='flip-card'
            className={isFlipped ? 'is-flipped' : ''}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <LoadoutCard name={focusedCard.name} class='card-front' />
            <LoadoutCard name={focusedCard.origin} class='card-back' />
          </div>
        </animated.div>
        {focusedCard.terms && focusedCard.terms.length ? (
          <TermsList
            terms={focusedCard.terms}
            isShown={isShown}
            style={trail[1]}
          />
        ) : (
          ''
        )}
      </div>
      <div
        id='overlay-bg'
        onClick={() => {
          setIsShown(false);
          setIsFlipped(false);
        }}
      ></div>
    </div>
  );
};

export default Overlay;
