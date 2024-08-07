import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const TotalTravel = () => {
  return (
    <Box className="container my-5 mt-5 pt-5 mb-5 pb-5" p={2}>
      <Grid container spacing={2} justifyContent="space-around">
        {/* First Section */}
        <Grid item xs={12} sm={4} textAlign="center">
          <img src='./Logo/emoji-happy.png' alt="Happy Travellers" style={{ width: '60px', height: '60px' }} />
          <Typography variant="h6" sx={{
            color: 'var(--Primary-Green, #333A04)', // Use the CSS variable or fallback color
            textAlign: 'center',
            fontFamily: '"American Typewriter", sans-serif', // Ensure fallback for font
            fontSize: { xs: '32px', sm: '48px' }, // Responsive font size
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: { xs: '64px', sm: '84px' }, // Responsive line height
          }}>
            470+
          </Typography>
          <Typography variant="body2" sx={{
            color: '#151515', // Text color
            textAlign: 'center', // Center-align the text
            fontFamily: 'Inter, sans-serif', // Font family with a fallback
            fontSize: '18px', // Font size
            fontStyle: 'normal', // Normal font style (not italicized)
            fontWeight: 500, // Font weight
            lineHeight: '25.6px', // Line height
          }}>
            Happy Travellers
          </Typography>
        </Grid>

        {/* Second Section */}
        <Grid item xs={12} sm={4} textAlign="center">
          <img src='./Logo/like-tag.svg' alt="5 Star Review" style={{ width: '60px', height: '60px' }} />
          <Typography variant="h6" sx={{
            color: 'var(--Primary-Green, #333A04)', // Use the CSS variable or fallback color
            textAlign: 'center',
            fontFamily: '"American Typewriter", sans-serif', // Ensure fallback for font
            fontSize: { xs: '32px', sm: '48px' }, // Responsive font size
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: { xs: '64px', sm: '84px' }, // Responsive line height
          }}>
            100%
          </Typography>
          <Typography variant="body2" sx={{
            color: '#151515', // Text color
            textAlign: 'center', // Center-align the text
            fontFamily: 'Inter, sans-serif', // Font family with a fallback
            fontSize: '18px', // Font size
            fontStyle: 'normal', // Normal font style (not italicized)
            fontWeight: 500, // Font weight
            lineHeight: '25.6px', // Line height
          }}>
            5 Star Review
          </Typography>
        </Grid>

        {/* Third Section */}
        <Grid item xs={12} sm={4} textAlign="center">
          <img src='./Logo/map.png' alt="Itineraries" style={{ width: '60px', height: '60px' }} />
          <Typography variant="h6" sx={{
            color: 'var(--Primary-Green, #333A04)', // Use the CSS variable or fallback color
            textAlign: 'center',
            fontFamily: '"American Typewriter", sans-serif', // Ensure fallback for font
            fontSize: { xs: '32px', sm: '48px' }, // Responsive font size
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: { xs: '64px', sm: '84px' }, // Responsive line height
          }}>
            95+
          </Typography>
          <Typography variant="body2" sx={{
            color: '#151515', // Text color
            textAlign: 'center', // Center-align the text
            fontFamily: 'Inter, sans-serif', // Font family with a fallback
            fontSize: '18px', // Font size
            fontStyle: 'normal', // Normal font style (not italicized)
            fontWeight: 500, // Font weight
            lineHeight: '25.6px', // Line height
          }}>
            Itineraries
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TotalTravel;
