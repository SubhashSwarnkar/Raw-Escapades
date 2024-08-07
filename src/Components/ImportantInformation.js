import React from 'react';
import { Box, Tabs, Tab, Typography, Grid } from '@mui/material';
import PropTypes from 'prop-types';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 2, md: 3 } }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const ImportantInformation = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const items = [
    { icon: 'Logo/bus11.svg', text: 'Travel in Force Traveller.' },
    { icon: 'Logo/bus12.svg', text: 'Accommodation 3 person sharing' },
    { icon: 'Logo/bus13.svg', text: 'Meals according to itinerary' },
    { icon: 'Logo/bus14.svg', text: 'Oxygen.' },
    { icon: 'Logo/bus15.svg', text: 'Expertise Charges.' },
    { icon: 'Logo/bus16.svg', text: 'Back up supplies.' },
    { icon: 'Logo/bus17.svg', text: 'Medical kit.' },
    { icon: 'Logo/bus8.svg', text: 'Permits.' },
    { icon: 'Logo/bus9.svg', text: 'Fuel and maintenance.' },
  ];

  return (
    <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.46)', padding: { xs: '20px', md: '30px 40px' }, borderRadius: '12px' }}>
      <Typography variant="h4" gutterBottom>
        Important Information
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="important information tabs"
        variant="scrollable"
        scrollButtons="auto"
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <Tab label="Inclusion" {...a11yProps(0)} />
        <Tab label="Exclusions" {...a11yProps(1)} />
        <Tab label="Must Carry" {...a11yProps(2)} />
        <Tab label="Things to Carry" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={item.icon} alt={`Icon ${index}`} style={{ width: 56, height: 56, marginRight: 8 }} />
                <Typography
                  sx={{
                    color: '#333',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '1.5',
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Exclusions content goes here.</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Must Carry content goes here.</Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography>Things to Carry content goes here.</Typography>
      </TabPanel>
    </Box>
  );
};

export default ImportantInformation;
