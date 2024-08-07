import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const PhotosAndVideos = () => {
  return (
    <Box sx={{ width: '80%', margin: 'auto', textAlign: 'center', padding: 2, border: '1px solid #ddd', borderRadius: 2 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <img src="logo.png" alt="Logo" style={{ height: 40 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', ml: 2 }}>
          Photos and Videos
        </Typography>
        <IconButton aria-label="close">
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Video */}
      <Box sx={{ position: 'relative', mb: 2 }}>
        <img src="video-thumbnail.jpg" alt="Video Thumbnail" style={{ width: '100%', borderRadius: 8 }} />
        <IconButton
          sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}
          aria-label="play"
        >
          <PlayCircleOutlineIcon style={{ fontSize: 60 }} />
        </IconButton>
      </Box>

      {/* Image Grid */}
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img src="image1.jpg" alt="Image 1" style={{ width: '100%', borderRadius: 8 }} />
        </Grid>
        <Grid item xs={4}>
          <img src="image2.jpg" alt="Image 2" style={{ width: '100%', borderRadius: 8 }} />
        </Grid>
        <Grid item xs={4}>
          <img src="image3.jpg" alt="Image 3" style={{ width: '100%', borderRadius: 8 }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PhotosAndVideos;
