import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Covid19 = () => {
  return (
    <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.46)', padding: { xs: '20px', sm: '30px 40px' }, borderRadius: '12px' }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: '#333',
          paddingTop: '20px',
          paddingBottom: '30px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '24px',
        }}
      >
        Travel safe during COVID-19
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} textAlign="center">
          <img
            src="Images/covid1.png"
            alt="Wear a Mask"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '8px'
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: '#333',
              textAlign: 'center',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '24px',
            }}
          >
            Gear/equipment sanitized between use
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} textAlign="center">
          <img
            src="Images/covid2.png"
            alt="Use Sanitizer"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '8px'
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: '#333',
              textAlign: 'center',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '24px',
            }}
          >
            Hand sanitizer available to travelers and staff
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} textAlign="center">
          <img
            src="Images/covid3.png"
            alt="Maintain Distance"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '8px'
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: '#333',
              textAlign: 'center',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '24px',
            }}
          >
            Regularly sanitized high-traffic areas
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Covid19;
