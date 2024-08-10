import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Cards3 = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Stack cards vertically on mobile screens
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {[1, 2, 3, 4].map((num) => (
          <Box
            key={num}
            sx={{
              width: { xs: '100%', sm: '90%', md: '1040px' }, // Adjust width for responsiveness
              height: { xs: 'auto', md: '309.304px' }, // Auto height on small screens
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens
              flexShrink: 0,
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.46)',
              boxShadow: '0px 8.969px 59.79px 0px rgba(51, 58, 4, 0.47)',
              overflow: 'hidden',
              margin: { xs: '15px 0', md: '30px' }, // Adjust margin for smaller screens
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', md: '550px' }, // Full width on small screens
                height: { xs: '200px', md: '370px' }, // Fixed height for images on small screens
                flexShrink: 0,
                borderRadius: '12px 0 0 12px', // Rounded corners on the left side
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `url(Images/img${num}.png) center / cover no-repeat`,
              }}
            >
              {/* Optional: If you want to include an <img> element */}
              {/* <img src={`Images/img${num}.png`} alt={`Card ${num}`} style={{ width: '100%', height: 'auto' }} /> */}
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                padding: { xs: '10px', md: '20px' }, // Adjust padding for smaller screens
                width: '100%', // Full width of the parent container
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#000',
                  fontFamily: 'Inter',
                  fontSize: { xs: '24px', md: '32px' }, // Responsive font size
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: { xs: '36px', md: '47.174px' }, // Responsive line height
                }}
              >
                How it All Began - Creatt
              </Typography>
              <Typography
                sx={{
                  color: '#000',
                  fontFamily: 'Inter',
                  fontSize: { xs: '14px', md: '16px' }, // Responsive font size
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '24px',
                  marginTop: '16px',
                }}
              >
                Vel nihil cumque quos dolorem culpa. Deleniti officiis et et quisquam voluptas.
                Asperiores error eum saepe qui omnis at velit […]
              </Typography>
              <Button
                sx={{
                  color: 'var(--Primary-Green, #333A04)',
                  textAlign: 'right',
                  fontFamily: 'Inter',
                  fontSize: { xs: '16px', md: '18px' }, // Responsive font size
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: { xs: '24px', md: '28.304px' }, // Responsive line height
                  letterSpacing: '0.09px',
                  alignSelf: 'flex-start',
                }}
              >
                Read More &gt;
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Cards3;
