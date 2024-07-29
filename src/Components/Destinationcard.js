import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const DestinationCard = () => {
  return (
    <Box className='container ' sx={{ position: 'relative', paddingLeft: '0px', marginTop: '40px' ,display:'flex',justifyContent:'center'}}>
      <img src='./images/grid3.png' alt='Kaziranga and Meghalaya' style={{ width: '100%', height: 'auto' }} />
      <Box
        sx={{
          position: 'absolute',
          bottom: '25%',
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
          Kaziranga and Meghalaya
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }}>
          <AccessTimeIcon />
          <Typography variant='body1' sx={{ ml: 1 }}>
            6D-7N
          </Typography>
          <EventIcon sx={{ ml: 2 }} />
          <Typography variant='body1' sx={{ ml: 1 }}>
            STARTS 17 Dec
          </Typography>
          <AttachMoneyIcon sx={{ ml: 2 }} />
          <Typography variant='body1' sx={{ ml: 1 }}>
            STARTS AT $14000
          </Typography>
        </Box>
        <Button
          variant='outlined'
          sx={{
            mt: 2,
            borderBottom: '2px solid #fff',
            backgroundColor: 'transparent',
            color: '#fff',
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
