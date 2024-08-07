// src/components/Cards2/Cards2.js

import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';


const cardData = [
  { image: `${process.env.PUBLIC_URL}/images/mega2.png`, title: 'Kaziranga and Meghalaya', packages: '10 Packages' },
  { image: `${process.env.PUBLIC_URL}/images/mega3.png`, title: 'Kaziranga and Meghalaya', packages: '10 Packages' },
  { image: `${process.env.PUBLIC_URL}/images/mega4.png`, title: 'Kaziranga and Meghalaya', packages: '10 Packages' },
  { image: `${process.env.PUBLIC_URL}/images/mega5.png`, title: 'Kaziranga and Meghalaya', packages: '10 Packages' },
  { image: `${process.env.PUBLIC_URL}/images/mega2.png`, title: 'Kaziranga and Meghalaya', packages: '10 Packages' },
  { image: `${process.env.PUBLIC_URL}/images/mega3.png`, title: 'Kaziranga and Meghalaya', packages: '10 Packages' },
];

const Cards2 = () => {
  return (<div>
    <Container>
      <Box display="flex" flexWrap="wrap" justifyContent="center" mt={4}>
        {cardData.map((card, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: '45%', sm: '42%' },
              padding: 0,
              margin:2,
              borderRadius: '8.969px',
              background: '#E7D4BA',
              boxShadow: '0px 8.969px 59.79px 0px rgba(51, 58, 4, 0.47)',
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src={card.image}
              alt={card.title}
              sx={{ width: '100%', height: '323px', borderRadius: '8.969px 8.969px 0 0' }}
            />
            <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
              <Box>
                <Typography
                  sx={{
                    color: '#000',
                    fontFamily: 'Inter',
                    fontSize: '20px',
                    fontWeight: 600,
                  }}
                >
                  {card.title}
                </Typography>
                <Box display="flex" alignItems="center">
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
                }}
              >
                See All Packages
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
      
    </Container>
    
    </div>
    
  );
};

export default Cards2;
