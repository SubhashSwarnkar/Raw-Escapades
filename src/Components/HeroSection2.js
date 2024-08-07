// src/components/HeroSection2.js

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navbar from './Navbar'; // Adjust the import according to your structure

const HeroSection2 = (props) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Images/biketour.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#FFF',
        minHeight: '70vh',
      }}
    >
      <Navbar />
      
      <Container>
        <Box textAlign="center" mt={8} mb={4}>
          <Typography
            sx={{
              color: '#FFF',
              fontFamily: '"American Typewriter", sans-serif',
              fontSize: '62px',
              fontWeight: 400,
            }}
          >
           {props.heading}
          </Typography>
          <Typography
            sx={{
              color: '#FFF',
              textAlign: 'center',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '28px',
              letterSpacing: '0.32px',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            You are looking for a cultural city break, a child friendly family holiday, unlimited adventure, a romantic getaway or just to escape and uncover.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection2;
