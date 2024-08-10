import React from 'react';
import { 
  Box, 
  Typography, 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Toolbar, 
  Tab, 
  Tabs, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Button,
  Card,
  CardContent,
  Grid
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const drawerWidth = 240;

const Admin = () => {
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  const [tabIndex, setTabIndex] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Home', 'Analytics', 'Settings'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index === 0 ? <HomeIcon /> : index === 1 ? <BarChartIcon /> : <SettingsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>

        {/* Tabs for switching between sections */}
        <Tabs value={tabIndex} onChange={handleTabChange} aria-label="admin sections">
          <Tab label="Overview" />
          <Tab label="Analytics" />
          <Tab label="User Management" />
          <Tab label="Settings" />
        </Tabs>

        {/* Content for each Tab */}
        <Box sx={{ mt: 4 }}>
          {tabIndex === 0 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Website Overview
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5">Total Users</Typography>
                      <Typography variant="h2">1500</Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5">New Signups</Typography>
                      <Typography variant="h2">300</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          )}
          {tabIndex === 1 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Analytics
              </Typography>
              <BarChart
                width={600}
                height={300}
                data={data}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </Box>
          )}
          {tabIndex === 2 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                User Management
              </Typography>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>User 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Details about User 1.
                  </Typography>
                  <Button variant="contained" color="secondary">Deactivate</Button>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>User 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Details about User 2.
                  </Typography>
                  <Button variant="contained" color="secondary">Deactivate</Button>
                </AccordionDetails>
              </Accordion>
              {/* Add more Accordions as needed */}
            </Box>
          )}
          {tabIndex === 3 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Settings
              </Typography>
              <Button variant="contained" color="primary">Change Website Theme</Button>
              <Button variant="contained" color="secondary" sx={{ ml: 2 }}>Manage Admins</Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;
