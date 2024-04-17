import './LocationsMenu.css';
import { useEffect, useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LoadoutCard from '../LoadoutCard/LoadoutCard';
import Skinnery from '../../img/skinnery-save.png';
import BoneSmith from '../../img/bone-smith-save.png';
import OrganGrinder from '../../img/organ-grinder-save.png';
import { motion, AnimateSharedLayout } from 'framer-motion';

const LocationsMenu = ({
  tapStart,
  dragStart,
  dragEnd,
  clickListener,
  startGearCardDrag,
}) => {
  const [selectedLocation, setSelectedLocation] = useState('Skinnery');
  const [wares, setWares] = useState([]);

  const startingGearWares = require.context(
    '../../img/StartingGear',
    false,
    /\.(png|jpe?g|svg)$/
  );
  const skinneryWares = require.context(
    '../../img/Skinnery',
    false,
    /\.(png|jpe?g|svg)$/
  );
  const boneSmithWares = require.context(
    '../../img/Skinnery',
    false,
    /\.(png|jpe?g|svg)$/
  );
  const organGrinderWares = require.context(
    '../../img/Skinnery',
    false,
    /\.(png|jpe?g|svg)$/
  );
  const locationWares = {
    'Starting Gear': startingGearWares,
    Skinnery: skinneryWares,
    'Bone Smith': boneSmithWares,
    'Organ Grinder': organGrinderWares,
  };

  useEffect(() => {
    if (selectedLocation) {
      let cards = [];
      locationWares[selectedLocation].keys().forEach((card) => {
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
                <div
                  onPointerDown={(e) => startGearCardDrag(e, ware)}
                  style={{ touchAction: 'none' }}
                  key={`ware-container-${i}`}
                >
                  <LoadoutCard
                    key={`ware-${i}`}
                    name={ware}
                    clickListener={clickListener}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {Object.keys(locationWares).map((location, i) => (
              <motion.div
                className='location'
                key={`location-${i}`}
                style={{
                  backgroundImage: `linear-gradient(to left bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 1))`,
                }}
                onTap={() => setSelectedLocation(location)}
              >
                {location}
              </motion.div>
            ))}
          </>
        )}
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default LocationsMenu;
