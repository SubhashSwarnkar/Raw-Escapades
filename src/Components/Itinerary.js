import React from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TripOriginIcon from '@mui/icons-material/TripOrigin';

const Itinerary = () => {
  const itineraryItems = [
    {
      day: 'Day 1',
      time: '10:00 AM',
      heading: 'Delhi to Manali - Enjoy your trip',
      content: 'You will have time to explore Manali on your own. You can visit sights and venues like Mall Road, Old Manali, Hadimba Temple, Vashist, Jogini Falls, Cafe Exploration, Hot Air Balloon and others. Overnight Stay in Manali Hotel.',
      images: ['src/image/image1.jpg', 'src/image/image2.jpg', 'src/image/image3.jpg'],
    },
    {
      day: 'Day 3',
      time: '11:00 AM',
      heading: 'Manali Local Sightseeing',
      content: 'Explore local sights in Manali including Solang Valley, Rohtang Pass, and more. Overnight stay in Manali Hotel.',
      images: ['src/image/image4.jpg', 'src/image/image5.jpg', 'src/image/image6.jpg'],
    },
    {
      day: 'Day 4',
      time: '09:00 AM',
      heading: 'Manali to Kasol',
      content: 'Travel from Manali to Kasol and explore the local cafes, Parvati Valley, and Chalal Village. Overnight stay in Kasol.',
      images: ['src/image/image7.jpg', 'src/image/image8.jpg', 'src/image/image9.jpg'],
    },
    {
      day: 'Day 5',
      time: '08:00 AM',
      heading: 'Kasol to Kheerganga Trek',
      content: 'Start your trek from Kasol to Kheerganga. Enjoy the hot springs and beautiful views. Overnight stay in Kheerganga.',
      images: ['src/image/image10.jpg', 'src/image/image11.jpg', 'src/image/image12.jpg'],
    },
    {
      day: 'Day 6',
      time: '07:00 AM',
      heading: 'Kheerganga to Manikaran to Delhi',
      content: 'Descend from Kheerganga, visit Manikaran, and return to Delhi. End of trip.',
      images: ['src/image/image13.jpg', 'src/image/image14.jpg', 'src/image/image15.jpg'],
    },
  ];

  return (
    <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.46)',padding:'30px 40px',borderRadius:'12px'}}>
      {itineraryItems.map((item, index) => (
        <Box key={index} sx={{ display: 'flex', mb: 2 }}>
          <Box sx={{ width: '20%', pr: 2, textAlign: 'center', borderRight: '2px dotted #000' }}>
            <Typography variant="body1">{item.day}</Typography>
            <Typography variant="body2">{item.time}</Typography>
          </Box>
          <Box sx={{ width: '80%', }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box sx={{ display: 'flex', alignItems: 'center' ,}}>
                  <TripOriginIcon sx={{ mr: 1 ,}} />
                  <Typography variant="h6">{item.heading}</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ mb: 2 }}>{item.content}</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {item.images.map((image, imgIndex) => (
                    <img key={imgIndex} src={image} alt={`Day ${index + 1} imagee ${imgIndex + 1}`} style={{ width: '30%' }} />
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      ))}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button variant="contained" color="primary">Download Itinerary</Button>
      </Box>
    </Box>
  );
};

export default Itinerary;
