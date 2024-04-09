import './LocationsMenu.css';
import { useEffect, useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LoadoutCard from '../LoadoutCard/LoadoutCard';
import Skinnery from '../../img/skinnery-save.png';
import BoneSmith from '../../img/bone-smith-save.png';
import OrganGrinder from '../../img/organ-grinder-save.png';
import { motion, AnimateSharedLayout, useDragControls } from 'framer-motion';

const LocationsMenu = ({ tapStart, dragStart, dragEnd, clickListener }) => {
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

  const controls = useDragControls();

  const startDrag = (event) => {
    controls.start(event, { snapToCursor: true });
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
      <motion.div
        drag
        layout
        whileDrag={{ zIndex: 5, scale: 1.3 }}
        onTapStart={tapStart}
        onDragStart={dragStart}
        onDragEnd={dragEnd}
        dragControls={controls}
        style={{
          backgroundColor: 'black',
          position: 'absolute',
          width: '10rem',
          zIndex: 5,
        }}
      >
        <LoadoutCard name={'founding-stone'} clickListener={clickListener} />
      </motion.div>
      <motion.div className='locations-content'>
        {selectedLocation ? (
          <>
            <div id='location-exit' onClick={() => setSelectedLocation('')}>
              <ArrowBackIcon />
            </div>
            <div id='location-cards'>
              {wares.map((ware, i) => (
                // <DraggableCardClone ware={ware} count={i} />
                <div onPointerDown={startDrag} style={{ touchAction: 'none' }}>
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
