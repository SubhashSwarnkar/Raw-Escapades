import React from 'react';
import { Box, Grid, Typography, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const reviews = [
  {
    name: 'Arlene McCoy',
    date: 'November 2021',
    rating: 4.5,
    title: 'Magic, Incredible, Adventure, Funny, Amazing',
    content: 'It was an incredible and magic experience, everything was just perfect since the weather till the excellent service from the crew members and of course the Vural Gül (the pilot) we had an amazing and very funny flight.',
    avatar: 'Images/review1.svg', // replace with actual image path
  },
  {
    name: 'Brooklyn Simmons',
    date: 'November 2021',
    rating: 4.5,
    title: 'Magic, Incredible, Adventure, Funny, Amazing',
    content: 'would always prefer this stay if visiting Shimla, I have been working from here without any issues :)',
    avatar: 'Images/review2.svg', // replace with actual image path
  },
  {
    name: 'Ralph Edwards',
    date: 'November 2021',
    rating: 4.5,
    title: 'Magic, Incredible, Adventure, Funny, Amazing',
    content: 'Sulabh and his adorable family had the most refreshing holiday experience in Seychelles. From scaling breathtaking beaches to hiking amid lush greens, here what they did on their leisurely vacation.',
    avatar: 'Images/review3.svg', // replace with actual image path
  },
  {
    name: 'Cody Fisher',
    date: 'November 2021',
    rating: 4.5,
    title: 'Magic, Incredible, Adventure, Funny, Amazing',
    content: 'If cancellations are made 30 days before the start date of the trip, 50% of the trip cost will be charged as cancellation fees.',
    avatar: 'Images/review4.svg', // replace with actual image path
  },
  // Add more reviews here
];

const Review = ({ review }) => (<div className='d-flex justify-content-center'>
  <Box sx={{width:'70%', mb: 4 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Avatar alt={review.name} src={review.avatar} sx={{ width: 56, height: 56, mr: 2 }} />
      <Box>
        <Typography sx={{ color: '#000', fontFamily: 'Inter', fontSize: 18, fontWeight: 600, lineHeight: '32px' }}>
          {review.name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#666' }}>
          {review.date}
        </Typography>
      </Box>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      {[...Array(Math.floor(review.rating))].map((_, index) => (
        <StarIcon key={index} sx={{ color: 'yellow' }} />
      ))}
      <Typography variant="body2" sx={{ ml: 1 }}>
        {review.rating}
      </Typography>
    </Box>
    <Typography sx={{ color: '#000', fontFamily: 'Inter', fontSize: 18, fontWeight: 600, lineHeight: '32px', mb: 1 }}>
      {review.title}
    </Typography>
    <Typography sx={{ color: '#333', fontFamily: 'Inter', fontSize: 16, fontWeight: 400, lineHeight: '30px' }}>
      {review.content}
    </Typography>
  </Box></div>
);

const Reviews = () => (<div className='container'>
  <Box  sx={{ p: 4, backgroundColor: 'rgba(255, 255, 255, 0.46)' }}>
    <Typography variant="h4" sx={{ mb: 4 }}>
      4.5 (102 reviews)
    </Typography>
    <Grid container spacing={2}>
      {reviews.map((review, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Review review={review} />
        </Grid>
      ))}
    </Grid>
  </Box></div>
);

export default Reviews;
