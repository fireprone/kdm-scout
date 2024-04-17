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

  useEffect(() => {
    CardProvider.getCard(name).then((card) => setCardInfo(card));
  }, [name]);

  const style = {
    backgroundImage: `url(${cardInfo.image})`,
  };

  return (
    <motion.div
      whileTap={whileTap}
      whileHover={whileHover}
      onTapStart={onTapStart}
      className={name + ' card' + (classes ? ` ${classes}` : '')}
      style={style}
      onTap={() =>
        clickListener ? clickListener({ name: name, ...cardInfo }) : true
      }
      layout
    ></motion.div>
  );
};

export default LoadoutCard;
