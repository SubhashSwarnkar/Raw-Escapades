import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, CardMedia, Typography, Button, Box, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const highlightedCards = [
  {
    image: `${process.env.PUBLIC_URL}/images/mega2.png`,
    title: 'Special Highlight Tour 1',
    days: 5,
    nights: 4,
    startDay: '1 Aug',
    mrp: '$700',
    discountedPrice: '$600',
    rating: 4.8,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/mega3.png`,
    title: 'Special Highlight Tour 2',
    days: 6,
    nights: 5,
    startDay: '5 Aug',
    mrp: '$900',
    discountedPrice: '$750',
    rating: 4.9,
  },
  {
    image:`${process.env.PUBLIC_URL}/images/mega4.png`,
    title: 'Special Highlight Tour 3',
    days: 4,
    nights: 3,
    startDay: '10 Aug',
    mrp: '$500',
    discountedPrice: '$450',
    rating: 4.7,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/mega3.png`,
    title: 'Special Highlight Tour 4',
    days: 8,
    nights: 7,
    startDay: '15 Aug',
    mrp: '$1100',
    discountedPrice: '$950',
    rating: 5.0,
  },
  {
    image:`${process.env.PUBLIC_URL}/images/mega.png`,
    title: 'Special Highlight Tour 5',
    days: 7,
    nights: 6,
    startDay: '20 Aug',
    mrp: '$1000',
    discountedPrice: '$850',
    rating: 4.9,
  },
];

const HighlightedTour = (props) => {
  const settings = {
    infinite: true,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (<>
    
    <Box sx={{ padding: 2 }}>
    <div className="container"> <Typography sx={{ marginBottom: 2, color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 600, letterSpacing: '1.8px', textTransform: 'uppercase' }}>
    PLAN YOUR TRIP
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography sx={{ color: '#000', fontFamily: '"American Typewriter", sans-serif', fontSize: '62px', fontWeight: 400 }}>
          {props.heading}
        </Typography>
        <Box>
          <IconButton 
            onClick={() => document.querySelector('.highlighted-slick-prev').click()} 
            sx={{ mr: 1, borderRadius: '50%', border: '1px solid rgba(0, 0, 0, 0.23)' }}
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton 
            onClick={() => document.querySelector('.highlighted-slick-next').click()} 
            sx={{ borderRadius: '50%', border: '1px solid rgba(0, 0, 0, 0.23)' }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Box></div>
      <Slider {...settings} className="highlighted-slider">
        {highlightedCards.map((card, index) => (
          <Card key={index} sx={{ maxWidth: 295 }}>
            <Box position="relative">
              <CardMedia
                component="img"
                height="260"
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
              <Typography gutterBottom variant="h6" component="div" sx={{ color: '#333A04', fontFamily: 'Inter', fontSize: '16px', fontWeight: '600' }}>
                {card.title}
              </Typography>
              <Box display="flex" gap={2}>
                <Typography variant="body2" color="textSecondary" sx={{ color: '#333A04', fontFamily: 'Inter', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                  <AccessTimeIcon sx={{ mr: 1 }} /> {card.days}D - {card.nights}N
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ color: '#333A04', fontFamily: 'Inter', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                  <EventIcon sx={{ mr: 1 }} /> START {card.startDay}
                </Typography>
              </Box>
              <Box display="flex" gap={2} mt={1}>
                <Typography variant="body2" color="textSecondary" sx={{ color: '#000', textDecoration: 'line-through', fontSize: '16px', lineHeight: '35.874px' }}>
                  {card.mrp}
                </Typography>
                <Typography variant="body1" color="textPrimary" sx={{ color: '#000', fontFamily: 'Inter', fontSize: '24px', fontWeight: 700, lineHeight: '35.874px' }}>
                  {card.discountedPrice}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Button size="small" variant="contained" color="success" sx={{ borderRadius: "40px", width: '124.439px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  Get Details
                </Button>
                <Button size="small" variant="outlined" color="success" sx={{ borderRadius: "40px", width: '124.439px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  Book Now
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box></>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} highlighted-slick-next`}
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} highlighted-slick-prev`}
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  );
};

export default HighlightedTour;
