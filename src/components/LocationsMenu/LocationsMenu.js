import './LocationsMenu.css';
import { useEffect, useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LoadoutCard from '../LoadoutCard/LoadoutCard';
import Skinnery from '../../img/skinnery-save.png';
import BoneSmith from '../../img/bone-smith-save.png';
import OrganGrinder from '../../img/organ-grinder-save.png';
import { motion, AnimateSharedLayout } from 'framer-motion';

const LocationsMenu = ({ tapStart, dragEnd, clickListener }) => {
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
        const cardName = card.replace('./', '').replace('.png', '');
        cards.push(cardName);
      });
      setWares(cards);
    }
  }, [selectedLocation]);

  return (
    <AnimateSharedLayout>
      <motion.div className='locations-content'>
        {selectedLocation ? (
          <>
            <div id='location-exit' onClick={() => setSelectedLocation('')}>
              <ArrowBackIcon />
            </div>
            <div id='location-cards'>
              {wares.map((ware, i) => (
                <motion.div
                  drag
                  layout
                  whileDrag={{ position: 'absolute', zIndex: 3 }}
                  onTapStart={tapStart}
                  onDragEnd={dragEnd}
                >
                  <LoadoutCard
                    key={`ware-${i}`}
                    whileTap={{ scale: 1.2 }}
                    name={ware}
                    clickListener={clickListener}
                  />
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <>
            <motion.div
              className='location'
              style={{
                backgroundImage: `linear-gradient(to left bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 1)), url(${Skinnery})`,
              }}
              onTap={() => setSelectedLocation('Skinnery')}
            >
              Skinnery
            </motion.div>
            <div
              className='location'
              style={{
                backgroundImage: `linear-gradient(to left bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 1)), url(${BoneSmith})`,
              }}
            >
              Bone Smith
            </div>
            <div
              className='location'
              style={{
                backgroundImage: `linear-gradient(to left bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 1)), url(${OrganGrinder})`,
              }}
            >
              Organ Grinder
            </div>
          </>
        )}
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default LocationsMenu;
