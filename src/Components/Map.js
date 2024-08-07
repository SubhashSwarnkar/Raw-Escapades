import React from 'react';
import { Box } from '@mui/material';

const Map = () => {
  const handleClick = () => {
    window.open('https://www.google.com/maps', '_blank');
  };

  return (
    <Box sx={{ textAlign: 'center', cursor: 'pointer' }} onClick={handleClick}>
      <img
        src="/Images/map.png"
        alt="Map"
        style={{ width: '100%', maxWidth: '800px', borderRadius: '8px' }}
      />
    </Box>
  );
};

export default Map;
