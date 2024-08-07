// src/components/Admin/Admin.js
import React from 'react';
import {  Box, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText,Toolbar } from '@mui/material';
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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
          <Box sx={{ flex: 1, mr: 2 }}>
            <Typography variant="h6" gutterBottom>
              Section 1
            </Typography>
            <Typography variant="body1">
              Content for section 1. Here you can add various admin functionalities.
            </Typography>
          </Box>
          <Box sx={{ flex: 1, ml: 2 }}>
            <Typography variant="h6" gutterBottom>
              Section 2
            </Typography>
            <Typography variant="body1">
              Content for section 2. Here you can add various admin functionalities.
            </Typography>
          </Box>
        </Box>
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
    </Box>
  );
};

export default Admin;
