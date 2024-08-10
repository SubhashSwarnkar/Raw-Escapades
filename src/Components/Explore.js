import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Explore = (props) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Click handler function to navigate to Home page
  const handleImageClick = () => {
    navigate('/home');
  };

  return (
    <Box 
      sx={{ 
        padding: '40px 20px', 
        textAlign: 'center',
        opacity: 0,
        animation: 'fadeIn 1s forwards', // Adding fade-in animation
        '@keyframes fadeIn': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    >
      <Typography 
        variant="h4" 
        sx={{ 
          mb: 4,
          backgroundColor: 'transparent',
          textAlign: 'center',
          fontFamily: 'American Typewriter',
          fontSize: '62px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          '@media (max-width: 600px)': {
            fontSize: '32px',
          },
        }}
      >
        {props.heading}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Adventure Box */}
        <Grid item xs={12} sm={6} md={2}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'left',
              transition: 'transform 0.3s, box-shadow 0.3s', // Adding transition for smooth hover effect
              '&:hover': {
                transform: 'scale(1.05)', // Scale effect on hover
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Shadow effect on hover
              },
            }}
            onClick={handleImageClick} // Add click handler
          >
            <img 
              src='./Logo/bike.svg' 
              alt="Adventure" 
              style={{ width: '100px', height: 'auto', borderRadius: '50%', border: '1px solid #ddd' }}
            />
            <Typography variant="h6" sx={{ mt: 3 }}>
              Bike Tour
            </Typography>
          </Box>
        </Grid>

        {/* Culture Box */}
        <Grid item xs={12} sm={6} md={2}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'left',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              },
            }}
            onClick={handleImageClick} // Add click handler
          >
            <img 
              src='./Logo/camping.svg' 
              alt="Culture" 
              style={{ width: '100px', height: 'auto', borderRadius: '50%', border: '1px solid #ddd' }}
            />
            <Typography variant="h6" sx={{ mt: 3 }}>
              Camping
            </Typography>
          </Box>
        </Grid>

        {/* Relaxation Box */}
        <Grid item xs={12} sm={6} md={2}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'left',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              },
            }}
            onClick={handleImageClick} // Add click handler
          >
            <img 
              src='./Logo/tour.svg' 
              alt="Relaxation" 
              style={{ width: '100px', height: 'auto', borderRadius: '50%', border: '1px solid #ddd' }}
            />
            <Typography variant="h6" sx={{ mt: 3 }}>
              Tour
            </Typography>
          </Box>
        </Grid>

        {/* Sightseeing Box */}
        <Grid item xs={12} sm={6} md={2}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'left',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              },
            }}
            onClick={handleImageClick} // Add click handler
          >
            <img 
              src='./Logo/forest.svg' 
              alt="Sightseeing" 
              style={{ width: '100px', height: 'auto', borderRadius: '50%', border: '1px solid #ddd' }}
            />
            <Typography variant="h6" sx={{ mt: 3 }}>
              Forest
            </Typography>
          </Box>
        </Grid>
        
        {/* Adventure Sports Box */}
        <Grid item xs={12} sm={6} md={2.1}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'left',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              },
            }}
            onClick={handleImageClick} // Add click handler
          >
            <img 
              src='./Logo/advenchre.svg' 
              alt="Adventure Sports" 
              style={{ width: '100px', height: 'auto', borderRadius: '50%', border: '1px solid #ddd' }}
            />
            <Typography variant="h6" sx={{ mt: 3 }}>
              Adventure Sports
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Explore;
