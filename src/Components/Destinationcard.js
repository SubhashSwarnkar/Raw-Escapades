import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const DestinationCard = () => {
  return (
    <Box 
      className="container" 
      sx={{ 
        position: 'relative', 
        padding: { xs: '0px', md: '0px' }, 
        marginTop: '40px', 
        display: 'flex', 
        justifyContent: 'center' 
      }}
    >
      <img 
        src="./Images/grid3.png" 
        alt="Kaziranga and Meghalaya" 
        style={{ width: '100%', height: 'auto' }} 
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: '10%', md: '25%' },
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#fff',
          textAlign: 'center',
          width: { xs: '90%', md: 'auto' }
        }}
      >
        <Typography 
          variant="h4" 
          sx={{ fontWeight: 'bold', fontSize: { xs: '24px', md: '34px' } }}
        >
          Kaziranga and Meghalaya
        </Typography>
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            mt: 1, 
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 1, md: 2 }
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccessTimeIcon />
            <Typography variant="body1" sx={{ ml: 1 }}>
              6D-7N
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: { xs: 1, md: 0 } }}>
            <EventIcon />
            <Typography variant="body1" sx={{ ml: 1 }}>
              STARTS 17 Dec
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: { xs: 1, md: 0 } }}>
            <AttachMoneyIcon />
            <Typography variant="body1" sx={{ ml: 1 }}>
              STARTS AT $14000
            </Typography>
          </Box>
        </Box>
        <Button
          variant="outlined"
          sx={{
            mt: 2,
            borderBottom: '2px solid #fff',
            backgroundColor: 'transparent',
            color: '#fff',
            width: { xs: '100%', md: 'auto' },
            '&:hover': {
              borderBottom: '2px solid #fff',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
          endIcon={<ArrowForwardIcon />}
        >
          Get Details
        </Button>
      </Box>
    </Box>
  );
};

export default DestinationCard;
