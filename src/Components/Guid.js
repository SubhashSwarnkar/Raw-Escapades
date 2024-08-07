import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, Box } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const guideCards = [
  {
    icon: '“',
    description: 'You are looking for a cultural city break, a child friendly family holiday, unlimited adventure, a romantic getaway or just to escape and uncover, we are here to create a seamless experience while handcrafting your bespoke journey.',
    tourName: 'Mountain Adventure',
    guideName: 'John Doe',
  },
  {
    icon: <PersonIcon sx={{ fontSize: 40 }} />,
    description: 'You are looking for a cultural city break, a child friendly family holiday, unlimited adventure, a romantic getaway or just to escape and uncover, we are here to create a seamless experience while handcrafting your bespoke journey.',
    tourName: 'City Explorer',
    guideName: 'Jane Smith',
  },
  {
    icon: <PersonIcon sx={{ fontSize: 40 }} />,
    description: 'You are looking for a cultural city break, a child friendly family holiday, unlimited adventure, a romantic getaway or just to escape and uncover, we are here to create a seamless experience while handcrafting your bespoke journey.',
    tourName: 'Beach Getaway',
    guideName: 'Mike Johnson',
  },
  {
    icon: <PersonIcon sx={{ fontSize: 40 }} />,
    description: 'You are looking for a cultural city break, a child friendly family holiday, unlimited adventure, a romantic getaway or just to escape and uncover, we are here to create a seamless experience while handcrafting your bespoke journey.',
    tourName: 'Desert Safari',
    guideName: 'Sarah Brown',
  },
  {
    icon: <PersonIcon sx={{ fontSize: 40 }} />,
    description: 'You are looking for a cultural city break, a child friendly family holiday, unlimited adventure, a romantic getaway or just to escape and uncover, we are here to create a seamless experience while handcrafting your bespoke journey.',
    tourName: 'Jungle Expedition',
    guideName: 'Chris Wilson',
  },
];

const TourGuide = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box sx={{ padding: 2, position: 'relative' }}>
      <Typography sx={{ marginBottom: 2, color: '#000', fontFamily: 'Inter, sans-serif', fontSize: '18px', fontWeight: 600, letterSpacing: '1.8px', textTransform: 'uppercase' }}>
      </Typography>
      <Box display="flex" alignItems="center" justifyContent="center" mb={2} position="relative">
        <Box 
          onClick={() => document.querySelector('.tourguide-slick-prev').click()}
          sx={{
            position: { xs: 'static', md: 'absolute' },
            left: { md: '10px' },
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            backgroundColor: 'white',
            borderRadius: '50%',
            border: '1px solid rgba(0, 0, 0, 0.23)',
            mt: { xs: 2, md: 0 }, // Add margin-top for mobile
            mx: { xs: 'auto', md: 0 } // Center horizontally for mobile
          }}
        >
          <ArrowBackIcon />
        </Box>
        <Box sx={{ width: { xs: '100%', md: '75%' }, margin: '0 auto' }}>
          <Slider {...settings} className="tourguide-slider">
            {guideCards.map((card, index) => (
              <Card key={index} sx={{ width: '100%' }}>
                <Box position="relative" textAlign="center">
                  <Box sx={{
                    fontFamily: 'SeoulHangang, sans-serif',
                    fontSize: '150px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}>
                    {card.icon}
                  </Box>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" sx={{
                      color: '#1C361F',
                      textAlign: 'center',
                      fontFamily: '"American Typewriter", sans-serif',
                      fontSize: '32px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                    }}>
                      {card.description}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" sx={{ color: '#333A04', fontFamily: 'Inter', fontSize: '16px', fontWeight: '600', mt: 2 }}>
                      {card.tourName}
                    </Typography>
                    <Typography variant="body1" color="textPrimary" sx={{ color: '#000', fontFamily: 'Inter', fontSize: '18px', fontWeight: 700, mt: 1 }}>
                      {card.guideName}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            ))}
          </Slider>
        </Box>
        <Box 
          onClick={() => document.querySelector('.tourguide-slick-next').click()}
          sx={{
            position: { xs: 'static', md: 'absolute' },
            right: { md: '10px' },
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            backgroundColor: 'white',
            borderRadius: '50%',
            border: '1px solid rgba(0, 0, 0, 0.23)',
            mt: { xs: 2, md: 0 }, // Add margin-top for mobile
            mx: { xs: 'auto', md: 0 } // Center horizontally for mobile
          }}
        >
          <ArrowForwardIcon />
        </Box>
      </Box>
    </Box>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} tourguide-slick-next`}
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} tourguide-slick-prev`}
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  );
};

export default TourGuide;
