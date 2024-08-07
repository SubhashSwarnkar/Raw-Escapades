import React from 'react';
import { Box, Typography, Button, Grid, } from '@mui/material';

const Description = () => {
 
  

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.46)',
        padding: { xs: '20px', sm: '30px 40px' },
        borderRadius: '12px',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Description
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6} sm={2}>
          <Typography>Low Temp:</Typography>
          <Typography
            sx={{
              color: '#333',
              paddingTop: '10px',
              paddingBottom: '20px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
              letterSpacing: '1.8px',
              textTransform: 'uppercase',
            }}
          >
            0°C
          </Typography>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Typography>High Temp:</Typography>
          <Typography
            sx={{
              color: '#333',
              paddingTop: '10px',
              paddingBottom: '20px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
              letterSpacing: '1.8px',
              textTransform: 'uppercase',
            }}
          >
            40°C
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>Season:</Typography>
          <Typography
            sx={{
              color: '#333',
              paddingTop: '10px',
              paddingBottom: '20px',
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
              letterSpacing: '1.8px',
              textTransform: 'uppercase',
            }}
          >
            Winter, Summer, Monsoon
          </Typography>
        </Grid>
      </Grid>
      <Typography
        paragraph
        sx={{
          color: '#333',
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '34px',
        }}
      >
        Situated in the distant land of Spiti Valley, the Kaza town is an absolute gem for a weekend getaway. Especially for adventurous travelers. With the Manali Kaza tour plan, you get once in a lifetime opportunity to explore a unique vista of India’s beauty. Situated approximately <p>11,980 feet above sea level, Kaza offers scenic green views and immerses you in its breathtaking ambiance.</p>
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 2, sm: 0 } }}>
        <Button
          variant="outlined"
          sx={{
            mr: { sm: 2 },
            color: 'black',
            borderStyle: 'solid',
            borderColor: 'black',
            borderWidth: '1.6px',
            borderRadius: '50px', // Creates a pill-shaped button
            textTransform: 'none', // Keeps the text casing as provided
          }}
        >
          View More Information
        </Button>
        <Button
          variant="contained"
          sx={{
            ml: { sm: 2 },
            color: 'white',
            backgroundColor: '#D09C57',
            borderColor: '#FFFFFF',
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: '50px', // Pill shape
            padding: '5px 15px', // Adjust padding as needed
          }}
        >
          Custom Map
        </Button>
      </Box>
    </Box>
  );
};

export default Description;
