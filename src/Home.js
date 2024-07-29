
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, } from '@mui/material';
import HeroSection from './Components/HeroSection';
import Seasons from './Components/Seasons';
import Explore from './Explore';
import CardCarousel from './Components/CardCarousel';
import TotalTravel from './Components/TotalTravel';
import HighlightedTour from './Components/HighlightedTour';
import TourGuide from './Components/Guid';
import Destination from './Components/Destinations';
import DestinationCard from './Components/Destinationcard';
import Footer from './Components/Footer';




function App() {
  return (
    <>
    <Box
      sx={{
        backgroundImage: 'url(./images/background.jpg)', // Replace with your background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}> <HeroSection/>
      <div className='container'><Seasons/>
      <Explore/></div>
      <CardCarousel heading = "Popular Tour"/>
      <TotalTravel/>
     
    <HighlightedTour heading=' Highlighted Tours'/>
  <TourGuide/>
     <Destination/>
     <DestinationCard/>
     <Footer/></Box>
   
   </>)
}

export default App;
