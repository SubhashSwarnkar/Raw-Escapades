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
        minHeight: { xs: '50vh', md: '70vh' }, // Adjust height for mobile screens
        display: 'flex',
        flexDirection: 'column',
        
       
      }}
    >
      <Navbar />
      <Container>
        <Box textAlign="center" mt={{ xs: 4, md: 8 }} mb={{ xs: 2, md: 4 }}>
          <Typography
            sx={{
              color: '#FFF',
              fontFamily: '"American Typewriter", sans-serif',
              fontSize: { xs: '36px', md: '62px' }, // Responsive font size
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
              fontSize: { xs: '14px', md: '16px' }, // Responsive font size
              fontWeight: 600,
              lineHeight: '28px',
              letterSpacing: '0.32px',
              maxWidth: { xs: '90%', md: '800px' }, // Adjust width for mobile screens
              margin: '0 auto',
              px: { xs: 2, md: 0 }, // Padding adjustment for mobile screens
            }}
          >
            You are looking for a cultural city break, a child-friendly family holiday, unlimited adventure, a romantic getaway, or just to escape and uncover.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection2;
