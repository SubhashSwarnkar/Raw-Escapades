// src/Components/Onboarding.js
import React, { useState } from 'react';
import { TextField, Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Explore from './Explore'; // Adjusted path to import Explore from Components folder
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const handleEnterClick = () => {
    setShowSearch(true);
  };

  const handleImageClick = () => {
    navigate('/home');
  };

  const renderSearchBar = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
      <TextField
        sx={{ borderRadius: '50px', border: 'none' }}
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <Button variant="contained" style={{ padding: "10px 30px", borderRadius: '50px', backgroundColor: '#333A04', color: '#fff' }}>
              Search
            </Button>
          ),
        }}
        style={{ width: '400px', backgroundColor: 'white' }} // Background white
      />
    </div>
  );

  return (
    <div
      style={{
        backgroundImage: 'url(./images/background.jpg)', // Replace with your background image URL
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#333A04',
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        <img src="./logo/logo1.svg" alt="Logo" onClick={handleImageClick} /> {/* Added onClick event */}
      </div>
      {!showSearch && (
        <div style={{ fontFamily: 'American Typewriter', fontSize: '62px', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
          Your adventure is here...
        </div>
      )}
      {!showSearch ? (
        <Button
          onClick={handleEnterClick}
          variant="contained"
          style={{
            marginTop: '5%',
            borderRadius: '76.782px',
            border: '2.897px solid #333A04',
            backgroundColor: '#333A04',
            color: '#fff',
            padding: '10px 20px',
            fontSize: '18px',
            width: '312px',
            height: '75.333px',
          }}
        >
          Enter
        </Button>
      ) : (
        <div className='container px-4'>
          {renderSearchBar()}
          <Explore onImageClick={handleImageClick} /> {/* Passing the click handler to Explore */}
        </div>
      )}
    </div>
  );
};

export default Onboarding;
