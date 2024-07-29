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

const CardCarousel = (props) => {
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

  return (
    <Box sx={{ padding: 2 }}>
      <div className='container'><Typography  sx={{ marginBottom: 2 , color: '#000',
        
        fontFamily: 'Inter, sans-serif',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 'normal',
        letterSpacing: '1.8px',
        textTransform: 'uppercase'}}>
        Plan your trip
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography sx={{color: '#000',
        textAlign: 'center',
        fontFamily: '"American Typewriter", sans-serif',
        fontSize: '62px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal'}}>{props.heading}</Typography>
        <Box>
      <IconButton 
        onClick={() => document.querySelector('.slick-prev').click()} 
        sx={{ 
          mr: 1, 
          borderRadius: '50%',
          border: '1px solid rgba(0, 0, 0, 0.23)'
        }}
      >
        <ArrowBackIcon />
      </IconButton>
      <IconButton 
        onClick={() => document.querySelector('.slick-next').click()} 
        sx={{ 
          borderRadius: '50%',
          border: '1px solid rgba(0, 0, 0, 0.23)'
        }}
      >
        <ArrowForwardIcon />
      </IconButton>
    </Box>
      </Box></div>
      <Slider {...settings}>
        {staticCards.map((card, index) => (
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
              <Typography gutterBottom variant="h6" component="div" sx={{ color: '#333A04', fontfamily: 'Inter', fontsize: '16px', fontstyle: 'normal', fontweight: '600', lineheight: 'normal' }}>
                {card.title}
              </Typography>
              <div className='d-flex gap-4 aling-items-center '>
              <Typography variant="body2" color="textSecondary" sx={{ color: '#333A04', fontFamily: 'Inter', fontSize: '14px', fontStyle: 'normal', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                <AccessTimeIcon sx={{ mr: 1 }} /> {card.days}D - {card.nights}N
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ color: '#333A04', fontFamily: 'Inter', fontSize: '14px', fontStyle: 'normal', fontWeight: 600, display: 'flex', alignItems: 'center',}}>
                <EventIcon sx={{ mr: 1 }} /> START {card.startDay}
              </Typography></div>
              <div className='d-flex gap-4 aling-items-center '>
                 <Typography variant="body2" color="textSecondary" sx={{ color: '#000', textDecoration: 'line-through' ,fontSize: '16px', marginTop: '8px', lineHeight: '35.874px',}}>
                {card.mrp}
              </Typography>
              <Typography variant="body1" color="textPrimary" sx={{ color: '#000', fontFamily: 'Inter', fontSize: '24px', fontStyle: 'normal', fontWeight: 700, marginTop: '8px', lineHeight: '35.874px', }}>
                {card.discountedPrice}</Typography></div>
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Button size="small" variant="contained" color="success" sx={{borderRadius:"40px", display: 'flex',
    width: '124.439px',
   
    justifyContent: 'center',
    alignItems: 'center',
   
   }}><span sx={{    color: '#FFF',
      fontFamily: 'Inter',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '35.874px', // or '224.214%',
  }}>Get Details</span></Button>
                <Button size="small" variant="outlined" color="success" sx={{borderRadius:"40px", display: 'flex',
    width: '124.439px',
    justifyContent: 'center',
    alignItems: 'center',
   
   }}>Book Now</Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  );
};

export default CardCarousel;
