import React from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const PopupDescription = () => {
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
        Description
      </Typography>

      {/* Paragraph */}
      <Typography
        sx={{
          fontFamily: 'Inter',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '38px',
          mb: 2,
        }}
      >
        Situated in the distant land of Spiti Valley, the Kaza town is an absolute gem for a weekend getaway. Especially for adventurous travelers. With the Manali Kaza tour plan, you get once in a lifetime opportunity to explore a unique vista of India’s beauty. Situated approximately 11,980 feet above sea level, Kaza offers scenic green views and immerses you in its breathtaking ambiance. These charming valleys of Himachal Pradesh are also home to some of the more memorable tourist spots like Komik Village, Kibber Village, Key Monastery. The Manali to Kaza tour will be a memorable journey for anyone, with picturesque views of the mountains and river valleys, adventure sports and fascinating cuisines that are sure to stick with you for a long time after the trip is complete.
      </Typography>

      {/* Button */}
      <Button
        variant="outlined"
        sx={{
          color: '#000',
          fontFamily: 'Inter',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '48px',
        }}
      >
        Read Next - Important Info
      </Button>
    </Box>
  );
};

export default PopupDescription;
