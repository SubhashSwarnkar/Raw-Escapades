// src/components/Cards2/Cards2.js

import React, { useEffect, useRef } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import { useTheme } from '@mui/material/styles';

// Sample card data
const cardData = [
  { image: `${process.env.PUBLIC_URL}/images/mega2.png`, title: 'Kaziranga and Meghalaya', packages: '10 Packages' },
  { image: `${process.env.PUBLIC_URL}/images/mega3.png`, title: 'Kaziranga and Meghalaya', packages: '10 Packages' },
  { image: `${process.env.PUBLIC_URL}/images/mega4.png`, title: 'Kaziranga and Meghalaya', packages: '10 Packages' },
  { image: `${process.env.PUBLIC_URL}/images/mega5.png`, title: 'Kaziranga and Meghalaya', packages: '10 Packages' },
  { image: `${process.env.PUBLIC_URL}/images/mega2.png`, title: 'Kaziranga and Meghalaya', packages: '10 Packages' },
  { image: `${process.env.PUBLIC_URL}/images/mega3.png`, title: 'Kaziranga and Meghalaya', packages: '10 Packages' },
];

const Cards2 = () => {
  const cardRefs = useRef([]);
  const theme = useTheme();

  // Add scroll animation using Intersection Observer API
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <Box display="flex" flexWrap="wrap" justifyContent="center" mt={4}>
        {cardData.map((card, index) => (
          <Box
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            sx={{
              width: { xs: '90%', sm: '45%', md: '42%' }, // Adjust card width for mobile
              padding: 0,
              margin: 2,
              borderRadius: '8.969px',
              background: '#E7D4BA',
              boxShadow: '0px 8.969px 59.79px 0px rgba(51, 58, 4, 0.47)',
              overflow: 'hidden',
              opacity: 0, // Initial state for animation
              transform: 'translateY(20px)', // Initial position for animation
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
              '&.fade-in': {
                opacity: 1,
                transform: 'translateY(0)',
              },
              [theme.breakpoints.down('sm')]: {
                '&:hover': {
                  transform: 'none', // Disable hover effect on mobile
                  boxShadow: '0px 8px 30px rgba(51, 58, 4, 0.2)', // Lighter shadow on mobile
                },
              },
              '&:hover': {
                transform: 'translateY(-10px)', // Hover effect
                boxShadow: '0px 12px 50px rgba(51, 58, 4, 0.5)',
              },
            }}
          >
            <Box
              component="img"
              src={card.image}
              alt={card.title}
              sx={{
                width: '100%',
                height: { xs: 'auto', md: '323px' },
                borderRadius: '8.969px 8.969px 0 0',
                objectFit: 'cover',
              }}
            />
            <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" p={2}>
              <Typography
                sx={{
                  color: '#000',
                  fontFamily: 'Inter',
                  fontSize: '20px',
                  fontWeight: 600,
                  textAlign: 'center',
                  mb: 1,
                  [theme.breakpoints.down('sm')]: {
                    fontSize: '18px', // Adjust font size for mobile
                  },
                }}
              >
                {card.title}
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                <BookIcon sx={{ color: '#333A04', mr: 1 }} />
                <Typography
                  sx={{
                    color: '#333A04',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 600,
                    letterSpacing: '1.6px',
                    textTransform: 'uppercase',
                  }}
                >
                  {card.packages}
                </Typography>
              </Box>
              <Button
                sx={{
                  display: 'flex',
                  padding: '6px 20px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '5px',
                  borderRadius: '30px',
                  backgroundColor: '#333A04',
                  color: '#FFF',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontWeight: 700,
                  lineHeight: '30px',
                  transition: 'background-color 0.3s',
                  '&:hover': {
                    backgroundColor: '#555D04',
                  },
                }}
              >
                See All Packages
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Cards2;
