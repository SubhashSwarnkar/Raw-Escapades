import React from 'react';
import { Box} from '@mui/material';


import Explore from './Explore'; // Adjust the import according to your structure
import Footer from './Footer';
import HeroSection2 from './HeroSection2';
import Cards1 from './Cards1';


const Travel = () => {
  return (
    <Box>
      <Box>
        <HeroSection2 heading="Bike Tour"/> 
      </Box>
      <Box mt={8}>
        <div className='container'> <Explore  heading= "Explore"/></div>
      </Box>
     <Cards1/>
      <Box mt={8}>
        <div > <Footer/></div>
      </Box>
    </Box>
  );
};

export default Travel;
