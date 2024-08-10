import React from 'react';
import { Container, Box, Typography, TextField, Button, Grid } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import HeroSection2 from './HeroSection2';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <Box >
     <div className='container'></div> <HeroSection2 heading='Contact Us' />
      {/* Main Content */}
      <Container sx={{ mt: { xs: 5, md: 10 } }}> {/* Adjust top margin for mobile screens */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                sx={{
                  color: '#000',
                  fontFamily: 'American Typewriter',
                  fontSize: { xs: '28px', md: '48px' }, // Responsive font size
                  fontWeight: 400,
                  lineHeight: '1.2',
                }}
              >
                Get in Touch
              </Typography>
              <Typography
                sx={{
                  color: 'var(--Primary-Green, #333A04)',
                  fontFamily: 'Inter',
                  fontSize: { xs: '14px', md: '16px' }, // Responsive font size
                  fontWeight: 400,
                  lineHeight: '1.6',
                  mt: 2,
                }}
              >
                Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 8 }}>
                <PhoneIcon />
                <Typography
                  sx={{
                    color: '#292D32',
                    fontFamily: 'Inter',
                    fontSize: { xs: '14px', md: '18px' }, // Responsive font size
                    fontWeight: 500,
                    ml: 1,
                  }}
                >
                  Call Us : 1800-600-5555
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                <EmailIcon />
                <Typography
                  sx={{
                    color: '#292D32',
                    fontFamily: 'Inter',
                    fontSize: { xs: '14px', md: '18px' }, // Responsive font size
                    fontWeight: 500,
                    ml: 1,
                  }}
                >
                  Email: info@example.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                <LocationOnIcon />
                <Typography
                  sx={{
                    color: '#292D32',
                    fontFamily: 'Inter',
                    fontSize: { xs: '14px', md: '18px' }, // Responsive font size
                    fontWeight: 500,
                    ml: 1,
                  }}
                >
                  Address: San Francisco
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 12 }}>
                <Box
                  sx={{
                    background: 'var(--Primary-Green, #333A04)',
                    borderRadius: '50%',
                    color: '#fff',
                    p: 1,
                  }}
                >
                  <FacebookIcon />
                </Box>
                <Box
                  sx={{
                    background: 'var(--Primary-Green, #333A04)',
                    borderRadius: '50%',
                    color: '#fff',
                    p: 1,
                  }}
                >
                  <TwitterIcon />
                </Box>
                <Box
                  sx={{
                    background: 'var(--Primary-Green, #333A04)',
                    borderRadius: '50%',
                    color: '#fff',
                    p: 1,
                  }}
                >
                  <InstagramIcon />
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              sx={{
                background: 'rgba(255, 255, 255, 0.46)',
                p: { xs: 2, md: 4 }, // Responsive padding
                borderRadius: '10px',
              }}
            >
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Contact Number"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  padding: { xs: '8px 20px', md: '10px 28px' }, // Responsive padding
                  borderRadius: '53px',
                  background: 'var(--Primary-Green, #333A04)',
                  color: '#fff',
                  mt: 2,
                }}
              >
                Book Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default ContactUs;
