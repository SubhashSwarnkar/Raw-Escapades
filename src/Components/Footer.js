import React from 'react';
import { Box, Grid, Typography, Link, IconButton, Container } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: '#333A04', color: 'white', padding: 10,marginTop: 20, }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Logo Column */}
            <Grid item xs={12} sm={6} md={3}>
              <Box p={1} display="flex" justifyContent="center">
                <img src='./Logo/logo.svg' alt="Logo" style={{ maxWidth: '150px' }} />
              </Box>
            </Grid>

            {/* Travel Styles Column */}
            <Grid item xs={12} sm={6} md={3} sx={{padding:"10px"}}>
              <Typography variant="h6" gutterBottom>
                Travel Styles
              </Typography>
              <Typography variant="body2" sx={{paddingTop:"10px"}}>Bike Tour</Typography>
              <Typography variant="body2" sx={{paddingTop:"10px"}}>Camping</Typography>
              <Typography variant="body2" sx={{paddingTop:"10px"}}>Forest</Typography>
              <Typography variant="body2" sx={{paddingTop:"10px"}}>Adventure</Typography>
              <Typography variant="body2" sx={{paddingTop:"10px"}}>Customized Tours</Typography>
            </Grid>

            {/* Our Tours Column */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Our Tours
              </Typography>
              <Typography variant="body2" sx={{paddingTop:"10px"}}>Bike Tour</Typography>
              <Typography variant="body2" sx={{paddingTop:"10px"}}>Camping</Typography>
              <Typography variant="body2" sx={{paddingTop:"10px"}}>Forest</Typography>
              <Typography variant="body2" sx={{paddingTop:"10px"}}>Adventure</Typography>
              <Typography variant="body2" sx={{paddingTop:"10px"}}>Customized Tours</Typography>
            </Grid>

            {/* Quick Links Column */}
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography >
              <Link href="/" color="inherit" underline="hover" sx={{paddingTop:"10px"}}>
                Home
              </Link>
              <br />
              <Link href="/about" color="inherit" underline="hover" sx={{paddingTop:"10px"}}>
                About Us
              </Link>
              <br />
              <Link href="/testimonials" color="inherit" underline="hover" sx={{paddingTop:"10px"}}>
                Testimonials
              </Link>
              <br />
              <Link href="/contact" color="inherit" underline="hover" sx={{marginTop:"20px"}}>
                Contact Us
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      <Box sx={{ backgroundColor: 'white', color: '#333A04', padding: 2 }}>
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body2">
              © 2021 All Rights Reserved Rawescapades
            </Typography>
            <Box>
              <IconButton sx={{ color: 'green', backgroundColor: 'white', borderRadius: '50%', margin: 0.5 }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: 'green', backgroundColor: 'white', borderRadius: '50%', margin: 0.5 }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: 'green', backgroundColor: 'white', borderRadius: '50%', margin: 0.5 }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: 'green', backgroundColor: 'white', borderRadius: '50%', margin: 0.5 }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
