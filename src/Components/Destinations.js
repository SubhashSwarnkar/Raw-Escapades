import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Destination = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          fontFamily: '"American Typewriter", sans-serif',
          fontSize: '32px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '53px',
          color: '#1C361F',
          mb: 2,
        }}
      >
        Destinations
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          color: '#333A04',
          mb: 4,
        }}
      >
        You are looking for a cultural city break, a child friendly family holiday, unlimited adventure, a romantic getaway or just to escape and uncover.
      </Typography>
      <div className="container">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <img src='./images/grid1.png' alt="grid1" style={{ width: '100%', marginBottom: '8px' }} />
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <img src='./images/grid21.png' alt="grid21" style={{ width: '100%', marginBottom: '8px' }} />
              </Grid>
              <Grid item xs={6}>
                <img src='./images/grid22.png' alt="grid22" style={{ width: '100%' }} />
              </Grid>
              <Grid item xs={6}>
                <img src='./images/grid23.png' alt="grid23" style={{ width: '100%' }} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <img src='./images/grid21.png' alt="grid21" style={{ width: '100%', marginBottom: '8px' }} />
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <img src='./images/grid22.png' alt="grid22" style={{ width: '100%' }} />
              </Grid>
              <Grid item xs={6}>
                <img src='./images/grid23.png' alt="grid23" style={{ width: '100%' }} />
              </Grid>
            </Grid>
            <img src='./images/grid1.png' alt="grid1" style={{ width: '100%', marginTop: '8px' }} />
          </Box>
        </Grid>
      </Grid></div>
    </Box>
  );
};

export default Destination;
