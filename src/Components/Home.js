


import { Box, } from '@mui/material';
import HeroSection from './HeroSection';
import Seasons from './Seasons';
import Explore from './Explore';

import TotalTravel from './TotalTravel';
import HighlightedTour from './HighlightedTour';
import TourGuide from './Guid';
import Destination from './Destinations';
import DestinationCard from './Destinationcard';
import Footer from './Footer';




function Home() {
  return (
    <>
    <Box
      sx={{
        backgroundImage: 'url(./Images/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}> <HeroSection/>
      <div className='container'><Seasons/>
      <Explore heading='Explore'/></div>
      <HighlightedTour heading = "Popular Tour" heading1="Plan your Trip"/>
      <TotalTravel/>
     
    <HighlightedTour heading=' Highlighted Tours'/>
  <TourGuide/>
     <Destination/>
     <DestinationCard/>
     <Footer/></Box>
   
   </>)
}

export default Home;
