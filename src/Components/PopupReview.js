import React, { useState } from 'react';
import { Box, Typography, IconButton, TextField, Button, Rating } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const PopupReview = () => {
  const [rating, setRating] = useState(0);

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
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', flexGrow: 1, textAlign: 'center' }}>
          Write a Review
        </Typography>
        <IconButton aria-label="close" sx={{ borderRadius: '50%', backgroundColor: '#f0f0f0' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Rate Your Experience */}
      <Typography
        sx={{
          color: '#3A3A3A',
          fontFamily: 'Inter',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 600,
          mb: 2,
        }}
      >
        Rate your Experience (required)
      </Typography>
      <Rating
        name="experience-rating"
        value={rating}
        onChange={(event, newValue) => setRating(newValue)}
        sx={{ mb: 2 }}
      />

      {/* Full Name */}
      <TextField
        label="Full Name"
        variant="outlined"
        fullWidth
        defaultValue="Janny Copper"
        sx={{ mb: 2 }}
      />

      {/* Email */}
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        defaultValue="info@gmail.com"
        sx={{ mb: 2 }}
      />

      {/* Leave a Review */}
      <Typography
        sx={{
          color: '#3A3A3A',
          fontFamily: 'Inter',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 600,
          mb: 1,
        }}
      >
        Leave a review
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        sx={{ mb: 2 }}
      />

      {/* Submit Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          sx={{
            padding: '4px 28px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            borderRadius: '53px',
            backgroundColor: '#333A04',
            color: '#fff',
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default PopupReview;
