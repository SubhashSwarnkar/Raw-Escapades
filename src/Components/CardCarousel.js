import React from 'react';
import { Box, Typography, Grid, Container, Card, CardContent, CardMedia, IconButton, Button } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import Navbar from './Navbar'; // Adjust the import according to your structure
import Explore from './Explore'; // Adjust the import according to your structure

const staticCards = [
  {
    image: `${process.env.PUBLIC_URL}/images/mega2.png`,
    title: 'Kaziranga and Meghalaya',
    days: 5,
    nights: 4,
    startDay: '17 Dec',
    mrp: '$600',
    discountedPrice: '$500',
    rating: 4.5,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/mega3.png`,
    title: 'Kaziranga and Meghalaya',
    days: 7,
    nights: 6,
    startDay: '19 Dec',
    mrp: '$800',
    discountedPrice: '$700',
    rating: 4.7,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/mega4.png`,
    title: 'Kaziranga and Meghalaya',
    days: 3,
    nights: 2,
    startDay: '21 Dec',
    mrp: '$400',
    discountedPrice: '$300',
    rating: 4.3,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/mega3.png`,
    title: 'Kaziranga and Meghalaya',
    days: 10,
    nights: 9,
    startDay: '23 Dec',
    mrp: '$1200',
    discountedPrice: '$1000',
    rating: 4.9,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/mega.png`,
    title: 'Kaziranga and Meghalaya',
    days: 8,
    nights: 7,
    startDay: '25 Dec',
    mrp: '$900',
    discountedPrice: '$800',
    rating: 4.6,
  },
];

const BikeTour = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/path/to/your/background/image.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#FFF',
          minHeight: '100vh',
        }}
      >
        <Navbar />
        
        <Container>
          <Box textAlign="center" mt={8} mb={4}>
            <Typography
              sx={{
                color: '#FFF',
                fontFamily: '"American Typewriter", sans-serif',
                fontSize: '62px',
                fontWeight: 400,
              }}
            >
              Bike Tour
            </Typography>
            <Typography
              sx={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Inter, sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '28px',
                letterSpacing: '0.32px',
                maxWidth: '800px',
                margin: '0 auto',
              }}
            >
              You are looking for a cultural city break, a child friendly family holiday, unlimited adventure, a romantic getaway or just to escape and uncover.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box mt={8}>
        <Explore />
      </Box>

      <Container>
        <Grid container spacing={4} justifyContent="center" mt={4}>
          {staticCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <Box position="relative">
                  <CardMedia
                    component="img"
                    height="200"
                    image={card.image}
                    alt={card.title}
                  />
                  <IconButton
                    aria-label="share"
                    sx={{ width: '32px', height: '32px', position: 'absolute', top: 8, right: 8, color: 'black', backgroundColor: 'white', opacity: "60%" }}
                  >
                    <ShareIcon />
                  </IconButton>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 8,
                      left: 8,
                      backgroundColor: 'white',
                      padding: '2px 8px',
                      borderRadius: '20px',
                      color: 'black',
                      opacity: "60%"
                    }}
                  >
                    <Typography variant="body2">
                      {card.rating} <StarIcon sx={{ fontSize: 14, verticalAlign: 'middle' }} />
                    </Typography>
                  </Box>
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{ color: '#333A04', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: '600', lineHeight: 'normal' }}>
                    {card.title}
                  </Typography>
                  <div className='d-flex gap-4 align-items-center '>
                    <Typography variant="body2" color="textSecondary" sx={{ color: '#333A04', fontFamily: 'Inter', fontSize: '14px', fontStyle: 'normal', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                      <AccessTimeIcon sx={{ mr: 1 }} /> {card.days}D - {card.nights}N
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ color: '#333A04', fontFamily: 'Inter', fontSize: '14px', fontStyle: 'normal', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                      <EventIcon sx={{ mr: 1 }} /> START {card.startDay}
                    </Typography>
                  </div>
                  <div className='d-flex gap-4 align-items-center '>
                    <Typography variant="body2" color="textSecondary" sx={{ color: '#000', textDecoration: 'line-through', fontSize: '16px', marginTop: '8px', lineHeight: '35.874px' }}>
                      {card.mrp}
                    </Typography>
                    <Typography variant="body1" color="textPrimary" sx={{ color: '#000', fontFamily: 'Inter', fontSize: '24px', fontStyle: 'normal', fontWeight: 700, marginTop: '8px', lineHeight: '35.874px' }}>
                      {card.discountedPrice}
                    </Typography>
                  </div>
                  <Box display="flex" justifyContent="space-between" mt={2}>
                    <Button size="small" variant="contained" color="success" sx={{ borderRadius: "40px", display: 'flex', width: '124.439px', justifyContent: 'center', alignItems: 'center' }}>
                      <span style={{ color: '#FFF', fontFamily: 'Inter', fontSize: '16px', fontStyle: 'normal', fontWeight: 700, lineHeight: '35.874px' }}>Get Details</span>
                    </Button>
                    <Button size="small" variant="outlined" color="success" sx={{ borderRadius: "40px", display: 'flex', width: '124.439px', justifyContent: 'center', alignItems: 'center' }}>
                      Book Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BikeTour;
