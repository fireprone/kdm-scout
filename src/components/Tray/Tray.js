import './Tray.css';
import { motion } from 'framer-motion';

const Tray = () => {
  return (
    <motion.div
      className='Tray'
      initial={{ opacity: 0.5, marginRight: '-100vw' }}
      animate={{ opacity: 1, marginRight: 0 }}
      exit={{ opacity: 0.5, marginRight: '-100vw' }}
      transition={{
        opacity: { type: 'tween', duration: 0.3 },
        marginTop: { type: 'tween', duration: 0.3 },
      }}
    >
      Tray
    </motion.div>
  );
};

export default Tray;
