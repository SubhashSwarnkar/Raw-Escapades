import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Divider, Box, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Search as SearchIcon, Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Travel', path: '/Summer' },
    { text: 'Adventure', path: '/Summer' },
    { text: 'Destination', path: '/Destinatinpage' },
    { text: 'Customize', path: '/customizeTour' },
    { text: 'Events', path: '/Events' },
    { text: 'Homes', path: '/Home' },
    { text: 'Resources', path: '/Summer' }
  ];

  return (
    <div className="container">
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img src="./logo/Group.svg" alt="Logo" />
            </Link>
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {isMobile ? (
              <>
                <IconButton color="inherit" edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
                  <MenuIcon />
                </IconButton>
                <IconButton color="inherit">
                  <SearchIcon />
                </IconButton>
                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                  <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                  >
                    <List>
                      {menuItems.map((item) => (
                        <ListItem button key={item.text} component={Link} to={item.path}>
                          <ListItemText primary={item.text} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Drawer>
              </>
            ) : (
              <>
                {menuItems.map((item) => (
                  <Button color="inherit" key={item.text} component={Link} to={item.path}>
                    {item.text}
                  </Button>
                ))}
                <Divider orientation="vertical" flexItem sx={{ mx: 2, borderColor: 'rgba(255,255,255,0.2)' }} />
                <IconButton color="inherit">
                  <SearchIcon />
                </IconButton>
                <Button
                  color="inherit"
                  variant="outlined"
                  component={Link}
                  to="/ContactUs"
                  sx={{
                    ml: 2,
                    color: 'white',
                    backgroundColor: '#D09C57',
                    borderColor: '#FFFFFF',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderRadius: '50px', // Pill shape
                    padding: '5px 15px', // Adjust padding as needed
                  }}
                >
                  Contact Us
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
