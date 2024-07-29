import React from 'react';
import { Box, Typography, } from '@mui/material';
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <div className='container'>
       
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        backgroundImage: 'url("images/image 22.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '0 20px'
      }}
    > <Navbar/>
      <Typography variant="h2" sx={{ mb: 3 ,position: 'absolute', top:'40%', color: '#FFF', 
            textAlign: 'center', 
            fontFamily: 'American Typewriter', 
            fontSize: '96px', 
            fontStyle: 'normal', 
            fontWeight: 400, 
            lineHeight: 'normal' }}>
        Your Adventure is Ready
      </Typography>
      <Box
        sx={{
          position: 'absolute',
          bottom: '26%',
          left: '50%',
          maxWidth: '461px',
          textAlign: 'left',color: '#FFF', 
          fontFamily: 'Inter', 
          fontSize: '16px', 
          fontStyle: 'normal', 
          fontWeight: 600, 
          lineHeight: '28px', 
          letterSpacing: '0.32px',
        }}
      >
        <Typography variant="body1" >
          You are looking for a cultural city break, a child-friendly family holiday, unlimited adventure, a romantic getaway, or just to escape and uncover, we are here to create a seamless experience while handcrafting your bespoke journey.
        </Typography>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '4%',
          textAlign: 'center'
        }}
      >
        <Typography variant="body1">
          Scroll
        </Typography>
      </Box>
    </Box>
    </div>
  );
};

export default HeroSection;
