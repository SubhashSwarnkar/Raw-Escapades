import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Explore from './Components/Explore';
import Home from './Components/Home';
import Onboarding from './Components/Onboarding';
import Summer from './Components/Summer';
import ContactUs from './Components/ContactUs';
import Destinatinpage from './Components/Destinatinpage';
import Book from './Components/Book';
import CustomizeTour from './Components/CustomizeTour';
import Events from './Components/Events';
import AboutUs from './Components/AboutUs';
import Login from './Components/Login';
import Admin from './Components/Admin';
import ProtectedRoute from './Components/ProtectedRoute';
import { AuthProvider } from './Components/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Box
        sx={{
          backgroundImage: 'url(./images/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/onboarding" element={<ProtectedRoute><Onboarding /></ProtectedRoute>} />
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/explore" element={<ProtectedRoute><Explore /></ProtectedRoute>} />
            <Route path="/Summer" element={<ProtectedRoute><Summer /></ProtectedRoute>} />
            <Route path="/ContactUs" element={<ProtectedRoute><ContactUs /></ProtectedRoute>} />
            <Route path="/Book" element={<ProtectedRoute><Book /></ProtectedRoute>} />
            <Route path="/Destinatinpage" element={<ProtectedRoute><Destinatinpage /></ProtectedRoute>} />
            <Route path="/CustomizeTour" element={<ProtectedRoute><CustomizeTour /></ProtectedRoute>} />
            <Route path="/Events" element={<ProtectedRoute><Events /></ProtectedRoute>} />
            <Route path="/AboutUs" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute role="admin"><Admin /></ProtectedRoute>} />
          </Routes>
        </Router>
      </Box>
    </AuthProvider>
  );
};

export default App;
