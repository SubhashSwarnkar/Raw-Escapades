import React, { useState } from 'react';
import { TextField, Button, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import Explore from './Explore'; // Adjusted path to import Explore from Components folder
import { useNavigate } from 'react-router-dom';

// Styled components
const Container = styled('div')(({ theme }) => ({
  backgroundImage: 'url(./images/background.jpg)', // Replace with your background image URL
  height: '120vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: '#333A04',
  padding: '0 10px',
  overflow: 'hidden',
  transition: 'all 0.6s ease',
}));

const Logo = styled('img')({
  marginBottom: '20px',
  cursor: 'pointer',
  maxWidth: '100%',
  height: 'auto',
});

const Title = styled('div')(({ theme }) => ({
  fontFamily: 'American Typewriter',
  fontSize: '62px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  opacity: 1,
  transition: 'opacity 0.6s ease',
  [theme.breakpoints.down('sm')]: {
    fontSize: '32px', // Adjust font size for mobile screens
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '5%',
  borderRadius: '76.782px',
  border: '2.897px solid #333A04',
  backgroundColor: '#333A04',
  color: '#fff',
  padding: '10px 20px',
  fontSize: '18px',
  width: '312px',
  height: '75.333px',
  transition: 'background-color 0.3s, transform 0.3s',
  '&:hover': {
    backgroundColor: '#555D04',
    transform: 'translateY(-2px)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '80%', // Adjust button width for mobile screens
    height: 'auto',
    fontSize: '16px',
    padding: '10px 0',
  },
}));

const SearchContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  borderRadius: '50px',
  border: 'none',
  width: '400px',
  backgroundColor: 'white',
  [theme.breakpoints.down('sm')]: {
    width: '80%', // Adjust width for mobile screens
  },
}));

const ExploreContainer = styled('div')({
  width: '100%',
  height: '100vh',
  opacity: 0,
  transform: 'translateY(20px)',
  transition: 'opacity 0.6s ease, transform 0.6s ease',
  '&.visible': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

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
    <SearchContainer>
      <StyledTextField
        placeholder="Search..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <Button
              variant="contained"
              sx={{
                padding: '10px 30px',
                borderRadius: '50px',
                backgroundColor: '#333A04',
                color: '#fff',
                marginLeft: '8px',
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: '#555D04',
                },
              }}
            >
              Search
            </Button>
          ),
        }}
      />
    </SearchContainer>
  );

  return (
    <Container>
      <Logo src="./logo/logo1.svg" alt="Logo" onClick={handleImageClick} />
      {!showSearch && <Title>Your adventure is here...</Title>}
      {!showSearch ? (
        <StyledButton onClick={handleEnterClick}>
          Enter
        </StyledButton>
      ) : (
        <ExploreContainer className={showSearch ? 'visible' : ''}>
          {renderSearchBar()}
          <Explore onImageClick={handleImageClick} /> {/* Passing the click handler to Explore */}
        </ExploreContainer>
      )}
    </Container>
  );
};

export default Onboarding;
