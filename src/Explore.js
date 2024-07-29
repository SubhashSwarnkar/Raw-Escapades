import React from 'react';
import { Box, Typography, Grid } from '@mui/material';




const Explore = () => {
  return (
    <Box sx={{ padding: '40px 20px', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ mb: 4 ,backgroundColor: 'transparent',
    textAlign: 'center',
    fontFamily: 'American Typewriter',
    fontSize: '62px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',}}>
        Explore
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
             
              background: 'rgba(255, 255, 255, 0.35)',
              textAlign: 'left'
            }}
          >
            <img src='./logo/bike.svg' alt="Adventure" style={{ width: '100px', height: 'auto',borderRadius: '50%' , boxShadow: 3,border: '1px solid #ddd',}} />
            <Typography variant="h6" sx={{ mt:3}}>
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
             
              background: 'rgba(255, 255, 255, 0.35)',
              textAlign: 'left'
            }}
          >
            <img src='./logo/camping.svg' alt="Culture" style={{ width: '100px', height: 'auto', borderRadius: '50%' , boxShadow: 3,border: '1px solid #ddd',}} />
            <Typography variant="h6" sx={{mt:3 }}>
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
             
              background: 'rgba(255, 255, 255, 0.35)',
              textAlign: 'left'
            }}
          >
            <img src='./logo/tour.svg' alt="Relaxation" style={{ width: '100px', height: 'auto', borderRadius: '50%' , boxShadow: 3,border: '1px solid #ddd', }} />
            <Typography variant="h6" sx={{ mt:3}}>
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
             
              background: 'rgba(255, 255, 255, 0.35)',
              textAlign: 'left'
            }}
          >
            <img src='./logo/forest.svg' alt="Sightseeing" style={{ width: '100px', height: 'auto',borderRadius: '50%' , boxShadow: 3,border: '1px solid #ddd', }} />
            <Typography variant="h6" sx={{ mt:3 }}>
             Forest
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={2.1}>
          <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
              justifyContent:'center',
              alignItems: 'center',
             
              borderRadius: '8px',
              padding: '16px',
              
              background: 'rgba(255, 255, 255, 0.35)',
              textAlign: 'left'
            }}
          >
            <img src='./logo/advenchre.svg' alt="Sightseeing" style={{ width: '100px', height: 'auto', borderRadius: '50%' , boxShadow: 3,border: '1px solid #ddd',}} />
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
