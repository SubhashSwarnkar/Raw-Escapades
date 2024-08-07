import React from 'react'
import { Box, Container, Typography } from '@mui/material';
import Navbar from './Navbar'; 
import Cards1 from './Cards1';
import Footer from './Footer';


function Events() {
  return (
    <div>
       <Box
      sx={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Images/events.png)`,
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
           Events
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
    <div className="container">
        <Cards1/>
    </div>
    <Footer/>
    </div>
  )
}

export default Events
