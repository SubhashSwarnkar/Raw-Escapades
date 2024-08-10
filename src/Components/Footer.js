import React from 'react';
import { Box, Grid, Typography, Link, IconButton, Container } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: '#333A04', color: 'white', padding: 10, marginTop: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Logo Column */}
            <Grid item xs={12} sm={6} md={3}>
              <Box p={1} display="flex" justifyContent={{ xs: 'center', md: 'flex-start' }}>
                <img src='./Logo/logo.svg' alt="Logo" style={{ maxWidth: '150px' }} />
              </Box>
            </Grid>

            {/* Travel Styles Column */}
            <Grid item xs={12} sm={6} md={3} sx={{ padding: "10px" }}>
              <Box textAlign={{ xs: 'center', md: 'left' }}>
                <Typography variant="h6" gutterBottom>
                  Travel Styles
                </Typography>
                <Typography variant="body2" sx={{ paddingTop: "10px" }}>Bike Tour</Typography>
                <Typography variant="body2" sx={{ paddingTop: "10px" }}>Camping</Typography>
                <Typography variant="body2" sx={{ paddingTop: "10px" }}>Forest</Typography>
                <Typography variant="body2" sx={{ paddingTop: "10px" }}>Adventure</Typography>
                <Typography variant="body2" sx={{ paddingTop: "10px" }}>Customized Tours</Typography>
              </Box>
            </Grid>

            {/* Our Tours Column */}
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign={{ xs: 'center', md: 'left' }}>
                <Typography variant="h6" gutterBottom>
                  Our Tours
                </Typography>
                <Typography variant="body2" sx={{ paddingTop: "10px" }}>Bike Tour</Typography>
                <Typography variant="body2" sx={{ paddingTop: "10px" }}>Camping</Typography>
                <Typography variant="body2" sx={{ paddingTop: "10px" }}>Forest</Typography>
                <Typography variant="body2" sx={{ paddingTop: "10px" }}>Adventure</Typography>
                <Typography variant="body2" sx={{ paddingTop: "10px" }}>Customized Tours</Typography>
              </Box>
            </Grid>

            {/* Quick Links Column */}
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign={{ xs: 'center', md: 'left' }}>
                <Typography variant="h6" gutterBottom>
                  Quick Links
                </Typography >
                <Link href="/" color="inherit" underline="hover" sx={{ display: 'block', paddingTop: "10px" }}>
                  Home
                </Link>
                <Link href="/AboutUs" color="inherit" underline="hover" sx={{ display: 'block', paddingTop: "10px" }}>
                  About Us
                </Link>
                <Link href="/testimonials" color="inherit" underline="hover" sx={{ display: 'block', paddingTop: "10px" }}>
                  Testimonials
                </Link>
                <Link href="/contact" color="inherit" underline="hover" sx={{ display: 'block', paddingTop: "10px" }}>
                  Contact Us
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: 'white', color: '#333A04', padding: 2 }}>
        <Container maxWidth="lg">
          <Box display="flex" justifyContent={{ xs: 'center', md: 'space-between' }} alignItems="center" flexDirection={{ xs: 'column', md: 'row' }}>
            <Typography variant="body2" textAlign={{ xs: 'center', md: 'left' }}>
              © 2021 All Rights Reserved Rawescapades
            </Typography>
            <Box mt={{ xs: 2, md: 0 }}>
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
