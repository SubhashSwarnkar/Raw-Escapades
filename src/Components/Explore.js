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
    <Box sx={{ padding: '40px 20px', textAlign: 'center' }}>
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
              justifyContent:'center',
              alignItems: 'center',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'left'
            }}
            onClick={handleImageClick} // Add click handler
          >
            <img 
              src='./Logo/bike.svg' 
              alt="Adventure" 
              style={{ width: '100px', height: 'auto', borderRadius: '50%', boxShadow: 3, border: '1px solid #ddd' }}
            />
            <Typography variant="h6" sx={{ mt:3 }}>
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
              justifyContent:'center',
              alignItems: 'center',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'left'
            }}
            onClick={handleImageClick} // Add click handler
          >
            <img 
              src='./Logo/camping.svg' 
              alt="Culture" 
              style={{ width: '100px', height: 'auto', borderRadius: '50%', boxShadow: 3, border: '1px solid #ddd' }}
            />
            <Typography variant="h6" sx={{ mt:3 }}>
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
              justifyContent:'center',
              alignItems: 'center',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'left'
            }}
            onClick={handleImageClick} // Add click handler
          >
            <img 
              src='./Logo/tour.svg' 
              alt="Relaxation" 
              style={{ width: '100px', height: 'auto', borderRadius: '50%', boxShadow: 3, border: '1px solid #ddd' }}
            />
            <Typography variant="h6" sx={{ mt:3 }}>
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
              justifyContent:'center',
              alignItems: 'center',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'left'
            }}
            onClick={handleImageClick} // Add click handler
          >
            <img 
              src='./Logo/forest.svg' 
              alt="Sightseeing" 
              style={{ width: '100px', height: 'auto', borderRadius: '50%', boxShadow: 3, border: '1px solid #ddd' }}
            />
            <Typography variant="h6" sx={{ mt:3 }}>
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
              justifyContent:'center',
              alignItems: 'center',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'left'
            }}
            onClick={handleImageClick} // Add click handler
          >
            <img 
              src='./Logo/advenchre.svg' 
              alt="Adventure Sports" 
              style={{ width: '100px', height: 'auto', borderRadius: '50%', boxShadow: 3, border: '1px solid #ddd' }}
            />
            <Typography variant="h6" sx={{ mt:3 }}>
              Adventure Sports
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Explore;
