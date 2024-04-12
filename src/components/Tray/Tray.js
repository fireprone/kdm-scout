import { useEffect } from 'react';
import './Tray.css';
import { motion, useAnimation } from 'framer-motion';

const Tray = (props) => {
  return (
    <motion.div
      layout
      className={`Tray ${props.isHiding ? 'hiding' : ''}`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{
        opacity: { type: 'tween', duration: 0.3 },
        marginTop: { type: 'tween', duration: 0.3 },
        left: { type: 'tween', duration: 0.3 },
      }}
    >
      {{ ...props.children }}
    </motion.div>
  );
};

export default Tray;
