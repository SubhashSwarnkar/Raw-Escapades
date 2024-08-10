import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';
import { TextField, Button, Typography, Paper, Box, Grid } from '@mui/material';
import './Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (credentials.username === 'admin' && credentials.password === 'adminpass') {
      login('admin');
      navigate('/admin');  // Redirect to admin page
    } else if (credentials.username === 'user' && credentials.password === 'userpass') {
      login('user');
      navigate('/onboarding');  // Redirect to onboarding page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid 
        item 
        xs={false} 
        sm={4} 
        md={7} 
        sx={{
          backgroundImage: 'url(./images/login.jpg)', // Add your custom background image
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height:'100vh'
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%', // Ensure the Box takes the full height of the container
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            Login
          </Typography>
          <Box component="form" sx={{ mt: 1, width: '100%', maxWidth: '400px' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Log In
            </Button>
          </Box>
          <Box sx={{ mt: 5, textAlign: 'center' }}>
            <Typography variant="subtitle1" color="textSecondary">
              Admin: admin / adminpass
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              User: user / userpass
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
