import './ContextMenu.css';
import { useEffect, useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreSharp';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import LoadoutCard from '../LoadoutCard/LoadoutCard';
import Skinnery from '../../img/skinnery-save.png';
import BoneSmith from '../../img/bone-smith-save.png';
import OrganGrinder from '../../img/organ-grinder-save.png';
import { motion } from 'framer-motion';

const ContextMenu = ({ clickListener }) => {
  const [isExpanded, setIsExpanded] = useState(true); //TODO: set to true only for testing
  const [selectedLocation, setSelectedLocation] = useState('');
  const [wares, setWares] = useState([]);

  useEffect(() => {
    if (selectedLocation) {
      let cards = [];
      const skinneryItems = require.context(
        `../../img/Skinnery`,
        false,
        /\.(png|jpe?g|svg)$/
      );
      skinneryItems.keys().forEach((card) => {
        const cardName = card
          .replace('./', '')
          .replace('-', ' ')
          .replace('.png', '');
        cards.push(cardName);
      });

      setWares(cards);
    }
  }, [selectedLocation]);

  return (
    // <div
    //   className='ContextMenu'
    //   style={{
    //     transform: isExpanded ? 'translateY(0)' : 'translateY(-100%)',
    //   }}
    // >
    <>
      <motion.div className='context-content'>
        {wares.length ? (
          wares.map((ware, i) => (
            <LoadoutCard
              key={`ware-${i}`}
              whileTap={{ scale: 1.2 }}
              name={ware}
              clickListener={clickListener}
            />
          ))
        ) : (
          <>
            <motion.div
              style={{
                backgroundImage: `linear-gradient(to left bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 1)), url(${Skinnery})`,
              }}
              onTap={() => setSelectedLocation('Skinnery')}
            >
              Skinnery
            </motion.div>
            <div
              style={{
                backgroundImage: `linear-gradient(to left bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 1)), url(${BoneSmith})`,
              }}
            >
              Bone Smith
            </div>
            <div
              style={{
                backgroundImage: `linear-gradient(to left bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 1)), url(${OrganGrinder})`,
              }}
            >
              Organ Grinder
            </div>
          </>
        )}
      </motion.div>
      {/* <div className='context-tab'>
        <ExpandMoreIcon />
      </div> */}
      {/* </div> */}
    </>
  );
};

export default ContextMenu;
