import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SummerSpiti from './Summerspiti';
import Bar from './Bar';
import Description from './Description';
import Book from './Book';
import TourHighlight from './TourHighlight';
import ImportantInformation from './ImportantInformation';
import Itinerary from './Itinerary';
import Covid19 from './Covid-19';
import OurPolicies from './OurPolicies';
import Map from './Map';
import Reviews from './Reviews';
import { Box, useMediaQuery, useTheme } from '@mui/material';

import Footer from './Footer';



export default function Summer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div>
      <Box
        sx={{
          backgroundImage: 'url(./images/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'center' : 'flex-start',
          justifyContent: isMobile ? 'center' : 'flex-start',
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        <SummerSpiti />
        <Bar />
        <div className={`container d-flex ${isMobile ? 'flex-column align-items-center' : ''}`}>
          <div className={`${isMobile ? 'w-100' : 'w-75'} py-5`}>
            <div className='py-1'><Description /></div>
            {isMobile && (
              <div className='py-4'>
                <Book />
              </div>
            )}
            <div className='py-4'><TourHighlight /></div>
            <div className='py-4'><ImportantInformation /></div>
            <div className='py-4'><Itinerary /></div>
            <div className='py-4'><Covid19 /></div>
            <div className='py-4'><OurPolicies /></div>
            <div className='py-4'><Map /></div>
          </div>
          
          {!isMobile && (
            <div className='d-flex justify-content-center w-50'>
              <Book />
            </div>
          )}
        </div>
        <Reviews />
       
        
       
      </Box>
      <Footer />
    </div>
  );
}
