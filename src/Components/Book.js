import React from 'react';
import { Box, Typography, Button, FormControl, InputLabel, Select, MenuItem, Rating, } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Book = () => {
  return (
    <Box sx={{ backgroundColor:'rgba(255, 255, 255, 0.46)',height:'76vh',marginTop:'10%',padding:'30px 40px',borderRadius:'12px'}}>
      <Typography variant="h4" gutterBottom>Summer Spiti</Typography>
      <Typography variant="h6">Fixed Departure</Typography>
      <Box display="flex" className="px-1 gap-5">
      <Box display="flex" alignItems="center" my={1}>
        <AccessTimeIcon />
        <Typography sx={{ ml: 1 }}>6D-7N</Typography>
      </Box>
      <Box display="flex" alignItems="center" my={1}>
        <CalendarTodayIcon />
        <Typography sx={{ ml: 1 }}>17 Dec</Typography>
      </Box>
      <Box display="flex" alignItems="center" my={1}>
        <LocationOnIcon />
        <Typography sx={{ ml: 1 }}>Delhi</Typography>
      </Box>
      </Box>
      <FormControl fullWidth sx={{ my: 2 }}>
        <InputLabel>Select Date</InputLabel>
        <Select defaultValue="">
          <MenuItem value={1}>Date 1</MenuItem>
          <MenuItem value={2}>Date 2</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ my: 2 }}>
        <InputLabel>Select Room Type</InputLabel>
        <Select defaultValue="">
          <MenuItem value={1}>Room Type 1</MenuItem>
          <MenuItem value={2}>Room Type 2</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="h5" alignItems="center" sx={{
        display:'flex',justifyContent:'center',
        color: '#000', // Sets the text color to black
        fontFamily: 'Inter, sans-serif', // Uses the "Inter" font with a fallback to sans-serif
        fontSize: '32px', // Sets the font size
        fontStyle: 'normal', // Normal font style
        fontWeight: 700, // Bold font weight
        lineHeight: '48px', // Line height of 48px, which is 150% of 32px
      }}>$1400</Typography>
      <Box display="flex" alignItems="center" sx={{ display:'flex',justifyContent:'center',}}>
        <Rating value={4.5} precision={0.5} readOnly />
        <Typography sx={{ ml: 1 }}>(120 reviews)</Typography>
      </Box>
      <Box className="py-4"><Button
            variant="contained"
            sx={{
              display: 'flex',
              width: '324px',
              padding: '4px 28px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '53px',
              backgroundColor: '#333A04', // You can replace this with the variable name if using a theme or CSS variable
              
            }}
          >
            Book Now
          </Button></Box>
      
      <Button sx={{display: 'flex',
              width: '324px',
              padding: '4px 28px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              color:'black',
              borderRadius: '53px',
              }}>View Price Chart</Button>
    </Box>
  );
};

export default Book;
