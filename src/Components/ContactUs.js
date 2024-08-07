// src/components/ContactUs/ContactUs.js
import React from 'react';
import { Container, Box, Typography, TextField, Button } from '@mui/material';
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
    <Box>
    <HeroSection2 heading='Contact Us'/>
    

      {/* Main Content */}
      <Container sx={{ display: 'flex', mt: 10 }}>
       <div >
       
        <Box sx={{ flex: 1, pr: 2 }}>
          <Typography
            sx={{
              color: '#000',
              fontFamily: 'American Typewriter',
              fontSize: '48px',
              fontWeight: 400,
              lineHeight: '52px',
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            sx={{
              color: 'var(--Primary-Green, #333A04)',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '25.6px',
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
                fontSize: '18px',
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
                fontSize: '18px',
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
                fontSize: '18px',
                fontWeight: 500,
                ml: 1,
              }}
            >
              Address: San Francisco
            </Typography>
          </Box>
          
         
        </Box>
        <div > <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 12, width: '150px' }}>
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
          </Box></div>
        </div>

        {/* Contact Form */}
        <Box
          component="form"
          sx={{
            flex: 1,
            background: 'rgba(255, 255, 255, 0.46)',
            p: 4,
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
            sx={{
              display: 'flex',
              width: '520px',
              padding: '4px 28px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '53px',
              background: 'var(--Primary-Green, #333A04)',
              color: '#fff',
              mt: 2,
            }}
          >
            Book Now
          </Button>
        </Box>
      </Container>
      <Footer/>
    </Box>
  );
};

export default ContactUs;
