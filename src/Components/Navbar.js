import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';


const Navbar = () => {
  return (<div className='container'>
    <AppBar position="static"  sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src='./logo/Group.svg' alt='Logo'/>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap:'15px' }}>
          <Button color="inherit">Travel</Button>
          <Button color="inherit">Adventure</Button>
          <Button color="inherit">Destination</Button>
          <Button color="inherit">Customize</Button>
          <Button color="inherit">Events</Button>
          <Button color="inherit">Homes</Button>
          <Button color="inherit">Resources</Button>
          <Divider orientation="vertical" flexItem sx={{ mx: 2, borderColor: 'rgba(255,255,255,0.2)' }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <Button color="inherit" variant="outlined"  sx={{ 
              ml: 2,
              color: '#D09C57',
              borderColor: '#FFFFFF',
              borderWidth: 1,
              borderStyle: 'solid',
              borderRadius: '50px', // Pill shape
              padding: '5px 15px' // Adjust padding as needed
            }}>
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default Navbar;
