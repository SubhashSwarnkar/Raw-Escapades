import React from 'react';
import { Box, Typography, Chip, Button, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';

const PopupHighlight = () => {
  return (
    <Box  sx={{ backgroundColor: 'rgba(255, 255, 255, 0.46)', padding: '30px 40px', borderRadius: '12px' }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <img src="logo.png" alt="Logo" style={{ height: 40 }} />
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
          Tour Highlight
        </Typography>
        <IconButton aria-label="close" sx={{ borderRadius: '50%', backgroundColor: '#f0f0f0' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      {[...Array(5)].map((_, index) => (
        <Box key={index} display="flex" sx={{ paddingTop: '25px' }}>
          {/* First Div - 75% width */}
          <Box flex={3} display="flex" flexDirection="column">
            <Box display="flex" alignItems="center" mb={2}>
              <LocationOnIcon />
              <Typography sx={{
                color: '#000',
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '34px',
                marginLeft: 1
              }}>
                Chicham Bridge
              </Typography>
            </Box>
            <Box display="flex" flexWrap="wrap" gap={1}>
              <Chip label="Spiti river" />
              <Chip label="Mountains" />
              <Chip label="Snow" />
              <Chip label="Bubbling rivers" />
            </Box>
            <Typography sx={{
              color: '#000',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '24px',
              marginTop: 2
            }}>
              Situated in the distant land of Spiti Valley, the Kaza town is an absolute gem for a weekend getaway. Especially for adventurous travelers. With the Manali Kaza tour plan, you get once in a lifetime opportunity to explore a unique vista of India’s beauty.
            </Typography>
          </Box>
          {/* Second Div - 25% width */}
          <Box flex={1} display="flex" justifyContent="center" alignItems="center">
            <img src="Images/tour.png" alt="Tour Highlight" style={{ width: '100%' }} />
          </Box>
        </Box>
      ))}
      <Button
        variant="outlined"
        sx={{
          mr: 2,
          color: 'black',
          borderStyle: 'solid',
          borderColor: 'black',
          borderWidth: '1.6px',
          borderRadius: '50px',
          textTransform: 'none',
          marginTop: "30px",
        }}
      >
        View More Information
      </Button>
    </Box>
  );
};

export default PopupHighlight;
