import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Navbar from './Navbar';

const SummerSpiti = () => {
  return (
    <div className='container-fluid'>
      <Box
        sx={{
          position: 'relative',
          height: { xs: '50vh', md: '70vh' },
          backgroundImage: 'url("Images/summerspiti.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          textAlign: 'center',
          padding: '0 20px'
        }}
      >
        <Navbar />
        <Typography 
          variant="h2" 
          sx={{ 
            mb: 3,
            position: 'absolute',
            top: { xs: '40%', md: '32%' },
            left: { xs: '50%', md: '13%' },
            transform: { xs: 'translateX(-50%)', md: 'none' },
            color: '#FFF',
            textAlign: { xs: 'center', md: 'right' },
            fontFamily: 'American Typewriter',
            fontSize: { xs: '36px', md: '62px' },
            fontWeight: 400,
            lineHeight: 'normal'
          }}
        >
          Summer Spiti
        </Typography>
        
        <Box 
          sx={{
            position: { xs: 'absolute', md: 'absolute' },
            top: { xs: 'auto', md: '50%' },
            bottom: { xs: '7%', md: 'auto' },
            left: { xs: '50%', md: '13%' },
            transform: { xs: 'translateX(-50%)', md: 'none' },
            display: 'flex',
            flexDirection: { xs: 'row', md: 'row' },
            gap: { xs: 2, md: 2 },
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Button color="inherit" variant="outlined" sx={{ 
              color: 'white',
              backgroundColor: '#D09C57',
              borderColor: '#FFFFFF',
              borderWidth: 1,
              borderStyle: 'solid',
              borderRadius: '50px', // Pill shape
              padding: '5px 15px' // Adjust padding as needed
            }}
          >
            Book Now
          </Button>
          <Button color="inherit" variant="outlined" sx={{ 
              color: 'white',
              borderColor: '#FFFFFF',
              borderWidth: 1,
              borderStyle: 'solid',
              borderRadius: '50px', // Pill shape
              padding: '5px 15px' // Adjust padding as needed
            }}
          >
            Get Itinerary
          </Button>
        </Box>

        <Box 
          sx={{
            display: { xs: 'none', md: 'flex' }, // Hide on mobile
            position: 'absolute',
            bottom: '7%',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px'
          }}
        >
          <Box className="container"
            sx={{
              paddingLeft: '9%',
              display: 'flex',
              gap: '10px', // Adjust the gap between SVGs as needed
            }}
          >
            <img src="Logo/bus.svg" alt="SVG 1" width="75" height="75" />
            <img src="Logo/bus2.svg" alt="SVG 2" width="75" height="75" />
            <img src="Logo/bus3.svg" alt="SVG 3" width="75" height="75" />
            <img src="Logo/bus4.svg" alt="SVG 4" width="75" height="75" />
            <img src="Logo/bus5.svg" alt="SVG 5" width="75" height="75" />
            <img src="Logo/bus6.svg" alt="SVG 6" width="75" height="75" />
            <img src="Logo/bus7.svg" alt="SVG 7" width="75" height="75" />
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)', // White background with 50% transparency
              color: '#000',
              borderRadius: '20px',
              padding: '10px 20px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <img src="Logo/gallery.png" alt="Icon" width="20" height="20" style={{ marginRight: '10px' }} />
            <Typography sx={{ 
              color: '#000',
              fontFamily: 'Inter, sans-serif',
              fontSize: 16,
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
              textTransform: 'capitalize'
            }}> 
              Show all
            </Typography>
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default SummerSpiti;
