import React, { useState } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Bar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Menu Button and Logo for Mobile Screens */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          backgroundColor: '#FFFFFF',
        }}
      >
        <IconButton onClick={handleToggle}>
          <MenuIcon />
        </IconButton>
        <img src="Logo/logo.svg" alt="Logo" width="57" height="57" />
      </Box>

      {/* Navigation Bar */}
      <Box
        className="container-fluid"
        sx={{
          display: { xs: open ? 'flex' : 'none', md: 'flex' },
          flexDirection: { xs: 'column', md: 'row' },
          paddingLeft: { xs: '0', md: '6%' },
          height: { xs: 'auto', md: '83px' },
          opacity: '50%',
          alignItems: 'center',
          padding: { xs: '10px 20px', md: '10px 120px' },
          backgroundColor: { xs: '#FFFFFF', md: 'transparent' },
          color: '#FFF',
        }}
      >
        {/* Logo Section */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            paddingLeft: { xs: '0', md: '5.5%' },
            justifyContent: { xs: 'center', md: 'flex-start' },
            mb: { xs: 2, md: 0 },
          }}
        >
          <img src="Logo/logo.svg" alt="Logo" width="57" height="57" />
        </Box>

        {/* Navigation Links */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: '10px', md: '20px' },
            justifyContent: { xs: 'center', md: 'flex-start' },
            width: { xs: '100%', md: 'auto' },
          }}
        >
          <Button sx={{ color: 'black' }}>Description</Button>
          <Button sx={{ color: 'black' }}>Important Info</Button>
          <Button sx={{ color: 'black' }}>Tour Highlights</Button>
          <Button sx={{ color: 'black' }}>Itinerary</Button>
          <Button sx={{ color: 'black' }}>COVID-19</Button>
          <Button sx={{ color: 'black' }}>Reviews</Button>
          <Button sx={{ color: 'black' }}>Policies</Button>
        </Box>
      </Box>
    </>
  );
};

export default Bar;
