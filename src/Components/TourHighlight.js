import React from 'react';
import { Box, Typography, Chip,Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const TourHighlight = () => {
  return (
    <Box sx={{ backgroundColor:'rgba(255, 255, 255, 0.46)',padding:'30px 40px',borderRadius:'12px'}}>
      <Typography variant="h4" gutterBottom>Tour Highlight</Typography>
      <Box display="flex"sx={{paddingTop:'25px'}}>
        {/* First Div - 75% width */}
        <Box flex={3} display="flex" flexDirection="column">
          <Box display="flex" alignItems="center" mb={2}>
            <LocationOnIcon />
            <Typography  sx={{
        color: '#000', // Text color
        fontFamily: 'Inter, sans-serif', // Font family
        fontSize: '18px', // Font size
        fontStyle: 'normal', // Normal font style
        fontWeight: 600, // Font weight
        lineHeight: '34px', // Line height
      }}>Chicham Bridge</Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" gap={1}>
            <Chip label="Spiti river"  />
            <Chip label="Mountains" />
            <Chip label="Snow"  />
            <Chip label="Bubbling rivers"  />
          </Box>
        </Box>
        {/* Second Div - 25% width */}
        <Box flex={1} display="flex" justifyContent="center" alignItems="center">
          <img src="Images/tour.png" alt="Tour Highlight" style={{ width: '100%' }} />
        </Box>
      </Box>
      <Box display="flex" sx={{paddingTop:'25px'}}>
        {/* First Div - 75% width */}
        <Box flex={3} display="flex" flexDirection="column" >
          <Box display="flex" alignItems="center" mb={2}>
            <LocationOnIcon />
            <Typography  sx={{
        color: '#000', // Text color
        fontFamily: 'Inter, sans-serif', // Font family
        fontSize: '18px', // Font size
        fontStyle: 'normal', // Normal font style
        fontWeight: 600, // Font weight
        lineHeight: '34px', // Line height
      }}>Chicham Bridge</Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" gap={1}>
            <Chip label="Spiti river"  />
            <Chip label="Mountains"  />
            <Chip label="Snow"  />
            <Chip label="Bubbling rivers"  />
          </Box>
        </Box>
        {/* Second Div - 25% width */}
        <Box flex={1} display="flex" justifyContent="center" alignItems="center" >
          <img src="Images/tour.png"  alt="Tour Highlight" style={{ width: '100%' }} />
        </Box>
      </Box>
      <Box display="flex" sx={{paddingTop:'25px'}}>
        {/* First Div - 75% width */}
        <Box flex={3} display="flex" flexDirection="column" >
          <Box display="flex" alignItems="center" mb={2}>
            <LocationOnIcon />
            <Typography  sx={{
        color: '#000', 
        fontFamily: 'Inter, sans-serif', 
        fontSize: '18px', 
        fontStyle: 'normal', 
        fontWeight: 600, 
        lineHeight: '34px', 
      }}>Chicham Bridge</Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" gap={1}>
            <Chip label="Spiti river"  />
            <Chip label="Mountains"  />
            <Chip label="Snow"  />
            <Chip label="Bubbling rivers"  />
          </Box>
        </Box>
        {/* Second Div - 25% width */}
        <Box flex={1} display="flex" justifyContent="center" alignItems="center">
          <img src="Images/tour.png"  alt="Tour Highlight" style={{ width: '100%' }} />
        </Box>
      </Box>
      <Box display="flex" sx={{paddingTop:'25px'}}>
        {/* First Div - 75% width */}
        <Box flex={3} display="flex" flexDirection="column" >
          <Box display="flex" alignItems="center" mb={2}>
            <LocationOnIcon />
            <Typography sx={{
        color: '#000', // Text color
        fontFamily: 'Inter, sans-serif', // Font family
        fontSize: '18px', // Font size
        fontStyle: 'normal', // Normal font style
        fontWeight: 600, // Font weight
        lineHeight: '34px', // Line height
      }}>Chicham Bridge</Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" gap={1}>
            <Chip label="Spiti river"  />
            <Chip label="Mountains"  />
            <Chip label="Snow"  />
            <Chip label="Bubbling rivers"  />
          </Box>
        </Box>
        {/* Second Div - 25% width */}
        <Box flex={1} display="flex" justifyContent="center" alignItems="center">
          <img src="Images/tour.png"  alt="Tour Highlight" style={{ width: '100%' }} />
        </Box>
      </Box>
      <Box display="flex" sx={{paddingTop:'25px'}}>
        {/* First Div - 75% width */}
        <Box flex={3} display="flex" flexDirection="column" >
          <Box display="flex" alignItems="center" mb={2}>
            <LocationOnIcon />
            <Typography sx={{
        color: '#000', // Text color
        fontFamily: 'Inter, sans-serif', // Font family
        fontSize: '18px', // Font size
        fontStyle: 'normal', // Normal font style
        fontWeight: 600, // Font weight
        lineHeight: '34px', // Line height
      }}>Chicham Bridge</Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" gap={1}>
            <Chip label="Spiti river" />
            <Chip label="Mountains"  />
            <Chip label="Snow" />
            <Chip label="Bubbling rivers"  />
          </Box>
        </Box>
        {/* Second Div - 25% width */}
        <Box flex={1} display="flex" justifyContent="center" alignItems="center">
          <img src="Images/tour.png" alt="Tour Highlight" style={{ width: '100%' }} />
        </Box>
      </Box>
      <Button
      variant="outlined"
      sx={{
        mr: 2,
        color:'black',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: '1.6px',
        borderRadius: '50px', 
        textTransform: 'none', 
        marginTop:"30px",
      }}
    >
      View More Information
    </Button>
    </Box>
  );
};

export default TourHighlight;
