// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, } from '@mui/material';
import Explore from './Components/Explore';
import Home from './Components/Home';





import Onboarding from './Components/Onboarding';
import Summer from './Components/Summer';
import ContactUs from './Components/ContactUs';
import Destinatinpage from './Components/Destinatinpage';
import Book from './Components/Book';
import CustomizeTour from './Components/CustomizeTour';

import Events from  './Components/Events';



const App = () => {
  return (<Box
    sx={{
      backgroundImage: 'url(./images/background.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/Summer" element={<Summer/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/Book" element={<Book/>} />
        <Route path="/Destinatinpage" element={<Destinatinpage/>} />
        <Route path="/CustomizeTour" element={<CustomizeTour/>} />
        <Route path="/Events" element={<Events/>} />
      </Routes>
    </Router></Box>
  );
};

export default App;



