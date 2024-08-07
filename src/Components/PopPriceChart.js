import React from 'react';
import { Box, Typography, IconButton, Tabs, Tab, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const PopupPriceChart = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '80%',
        margin: 'auto',
        textAlign: 'left',
        padding: 4,
        border: '1px solid #ddd',
        borderRadius: 2,
        backgroundColor: '#fff',
        backgroundImage: 'url("background.jpg")', // Path to your background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#333'
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <img src="logo.png" alt="Logo" style={{ height: 40 }} />
        <IconButton aria-label="close" sx={{ borderRadius: '50%', backgroundColor: '#f0f0f0' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Heading */}
      <Typography variant="h5" component="div" sx={{ mb: 2, fontWeight: 'bold' }}>
        Price Chart
      </Typography>

      {/* Tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="price chart tabs"
        sx={{ mb: 2, borderRadius: 1 }}
        TabIndicatorProps={{ style: { backgroundColor: '#fff' } }}
        textColor="inherit"
      >
        <Tab label="Room Sharing" />
        <Tab label="Hotel Category" />
        <Tab label="Vehicle Type" />
        <Tab label="Season" />
      </Tabs>

      {/* Tab Content */}
      {value === 0 && (
        <Box sx={{ padding: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography>Double Sharing</Typography>
              <Typography>Triple Sharing</Typography>
              <Typography>Quad Sharing</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography>$100</Typography>
              <Typography>$80</Typography>
              <Typography>$60</Typography>
            </Grid>
          </Grid>
        </Box>
      )}
      {value === 1 && (
        <Box sx={{ padding: 2 }}>
          <Typography>Hotel Category Content</Typography>
        </Box>
      )}
      {value === 2 && (
        <Box sx={{ padding: 2 }}>
          <Typography>Vehicle Type Content</Typography>
        </Box>
      )}
      {value === 3 && (
        <Box sx={{ padding: 2 }}>
          <Typography>Season Content</Typography>
        </Box>
      )}
    </Box>
  );
};

export default PopupPriceChart;
