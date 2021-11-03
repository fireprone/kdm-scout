import './LoadoutCard.css';
import { useEffect, useState } from 'react';
import CardProvider from '../../CardProvider';
import { motion } from 'framer-motion';

const LoadoutCard = ({
  whileHover,
  whileTap,
  onTapStart,
  name,
  clickListener,
  classes,
}) => {
  const [cardInfo, setCardInfo] = useState({ image: '', origin: '' });

  useEffect(
    () =>
      (async function loadCardData() {
        const card = await CardProvider.getCard(name);
        setCardInfo(card);
      })(),
    [name]
  );

  const style = {
    backgroundImage: cardInfo.image
      ? `url(${cardInfo.image})`
      : 'linear-gradient(to bottom, rgba(255,255,255,1), rgba(200,200,200,1))',
    // boxShadow: '0 3px 10px rgb(0 0 0 / 0.75)',
  };

  return (
    <motion.div
      whileTap={whileTap}
      whileHover={whileHover}
      onTapStart={onTapStart}
      className={'card' + (classes ? ` ${classes}` : '')}
      style={style}
      onTap={() =>
        clickListener ? clickListener({ name: name, ...cardInfo }) : true
      }
      layout
    ></motion.div>
  );
};

export default LoadoutCard;
