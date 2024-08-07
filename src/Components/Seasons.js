import React from 'react';
import { Box, Typography, Grid } from '@mui/material';


const Seasons = () => {
  return (
    <Box sx={{ padding: '40px 20px', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ mb: 4 ,backgroundColor: 'transparent',
    textAlign: 'center',
    fontFamily: 'American Typewriter',
    fontSize: '62px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',}}>
        Seasons
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Summer Box */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: 'flex',
              
             justifyContent:'space-between',
              alignItems: 'center',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: 3,
              textAlign: 'center',
              
background: 'rgba(255, 255, 255, 0.35)',
            }}
          >
           
            <Typography variant="h6" sx={{ mt: 2 }}>
              Summer
            </Typography>
            <img src='./Logo/summer.svg' alt="Summer" style={{ width: '90.301px',
height: '88.097px',
}} />
          </Box>
        </Grid>

        {/* Winter Box */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: 'flex',
              justifyContent:'space-between',
              alignItems: 'center',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: 3,
              textAlign: 'center',
              background: 'rgba(255, 255, 255, 0.35)',
            }}
          >
            
            <Typography variant="h6" sx={{ mt: 2 }}>
              Winter
            </Typography>
            <img src='./Logo/winter.svg' alt="Winter" style={{ width: '90.301px',
height: '88.097px',
}}  />
          </Box>
        </Grid>

        {/* Monsoon Box */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: 'flex',
              justifyContent:'space-between',
              alignItems: 'center',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: 3,
              textAlign: 'center',
              background: 'rgba(255, 255, 255, 0.35)',
            }}
          >
            
            <Typography variant="h6" sx={{ mt: 2 }}>
              Monsoon
            </Typography>
            <img src='./Logo/monsoon.svg' alt="Monsoon" style={{ width: '90.301px',
height: '88.097px',
}}  />
          </Box>
        </Grid>

        {/* All Year Box */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: 'flex',
              justifyContent:'space-between',
              alignItems: 'center',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: 3,
              textAlign: 'center',
              background: 'rgba(255, 255, 255, 0.35)',
            }}
          >
           
            <Typography variant="h6" sx={{ mt: 2 }}>
              All Year
            </Typography>
            <img src='./Logo/allyear.svg' alt="All Year" style={{ width: '90.301px',
height: '88.097px',
}}  />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Seasons;
