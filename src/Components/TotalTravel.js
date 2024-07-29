import React from 'react';
import { Box, Typography } from '@mui/material';



const TotalTravel = () => {
  return (
    <div className="container my-5 mt-5 pt-5 mb-5 pb-5">

    <Box display="flex" justifyContent="space-around" p={2}>
      {/* First Section */}
      <Box textAlign="center">
        <img src='./Logo/emoji-happy.png' alt="Description" style={{ width: '60px', height: '60px' }} />
        <Typography variant="h6"       sx={{
        color: 'var(--Primary-Green, #333A04)', // Use the CSS variable or fallback color
        textAlign: 'center',
        fontFamily: '"American Typewriter", sans-serif', // Ensure fallback for font
        fontSize: '48px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '84px', // or lineHeight: '175%', if you prefer percentage
      }}
>470+</Typography>
        <Typography variant="body2" sx={{
        color: '#151515', // Text color
        textAlign: 'center', // Center-align the text
        fontFamily: 'Inter, sans-serif', // Font family with a fallback
        fontSize: '18px', // Font size
        fontStyle: 'normal', // Normal font style (not italicized)
        fontWeight: 500, // Font weight
        lineHeight: '25.6px', // Line height
      }}>Happy Travellers</Typography>
      </Box>

      {/* Second Section */}
      <Box textAlign="center">
        <img src='./Logo/like-tag.svg' alt="Description" style={{ width: '60px', height: '60px' }} />
        <Typography variant="h6"       sx={{
        color: 'var(--Primary-Green, #333A04)', // Use the CSS variable or fallback color
        textAlign: 'center',
        fontFamily: '"American Typewriter", sans-serif', // Ensure fallback for font
        fontSize: '48px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '84px', // or lineHeight: '175%', if you prefer percentage
      }}
>100%</Typography>
        <Typography variant="body2" sx={{
        color: '#151515', // Text color
        textAlign: 'center', // Center-align the text
        fontFamily: 'Inter, sans-serif', // Font family with a fallback
        fontSize: '18px', // Font size
        fontStyle: 'normal', // Normal font style (not italicized)
        fontWeight: 500, // Font weight
        lineHeight: '25.6px', // Line height
      }}>5 Star Review </Typography>
      </Box>

      {/* Third Section */}
      <Box textAlign="center">
        <img src='./Logo/map.png' alt="Description" style={{ width: '60px', height: '60px' }} />
        <Typography variant="h6"       sx={{
        color: 'var(--Primary-Green, #333A04)', // Use the CSS variable or fallback color
        textAlign: 'center',
        fontFamily: '"American Typewriter", sans-serif', // Ensure fallback for font
        fontSize: '48px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '84px', // or lineHeight: '175%', if you prefer percentage
      }}
>95+</Typography>
        <Typography variant="body2" sx={{
        color: '#151515', // Text color
        textAlign: 'center', // Center-align the text
        fontFamily: 'Inter, sans-serif', // Font family with a fallback
        fontSize: '18px', // Font size
        fontStyle: 'normal', // Normal font style (not italicized)
        fontWeight: 500, // Font weight
        lineHeight: '25.6px', // Line height
      }}>Itineraries</Typography>
      </Box>
    </Box></div>
  );
};

export default TotalTravel;
