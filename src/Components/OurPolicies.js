import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const OurPolicies = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.46)', padding: '30px 40px', borderRadius: '12px' }}>
      <Typography variant="h4" gutterBottom>
        Our Policies
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ style: { backgroundColor: '#333A04' } }} // Active tab indicator color
        sx={{
          '& .MuiTab-root': {
            color: '#000',
            fontFamily: 'Inter, sans-serif',
            fontWeight: '600',
          },
          '& .Mui-selected': {
            color: '#333A04', 
          },
        }}
      >
        <Tab label="Cancel Policies" />
        <Tab label="Terms and Conditions" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box sx={{ mt: 2 }}>
          <Typography sx={{
           
            fontFamily: 'Inter',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '32px'
          }}>
            No Refund shall be made with respect to the initial booking amount for any cancellations. However:
          </Typography>
          <ul>
            <li>
              <Typography sx={{
               
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '36px'
              }}>
                If cancellations are made 30 days before the start date of the trip, 50% of the trip cost will be charged as cancellation fees.
              </Typography>
            </li>
          </ul>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ mt: 2 }}>
          <Typography >
            The terms and conditions will be specified here.
          </Typography>
        </Box>
      </TabPanel>
    </Box>
  );
};

export default OurPolicies;
