import './ContextMenu.css';
import { useEffect, useState, useRef } from 'react';
import QueueIcon from '@material-ui/icons/Queue';

const ContextMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      console.log('test');
      ref.current.clientHeight > 175
        ? setIsExpanded(true)
        : setIsExpanded(false);
    };

    window.addEventListener('resize', handleResize);

    return window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className='ContextMenu'
      style={{
        transform: isExpanded ? 'translateY(-60%)' : 'translateY(0)',
      }}
    >
      <div className='context-content'></div>
      <div className='context-tab'>
        <QueueIcon />
      </div>
    </div>
  );
};

export default ContextMenu;
