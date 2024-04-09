import './Tray.css';
import { motion } from 'framer-motion';

const Tray = (props) => {
  return (
    <motion.div
      className='Tray'
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{
        opacity: { type: 'tween', duration: 0.3 },
        marginTop: { type: 'tween', duration: 0.3 },
      }}
    >
      Tray
      {{ ...props.children }}
    </motion.div>
  );
};

export default Tray;
