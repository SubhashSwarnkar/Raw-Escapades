// src/components/LogIn/LogIn.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Box, TextField, Button, Typography } from '@mui/material';

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'url("your-background-image-url") center/cover no-repeat',
      }}
    >
      <Container
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          maxWidth: '400px',
          background: 'rgba(255, 255, 255, 0.8)',
          padding: '2rem',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Log In
        </Typography>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Invalid email address',
            },
          })}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters long',
            },
          })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ''}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            marginTop: '1rem',
            padding: '0.75rem',
            borderRadius: '8px',
            backgroundColor: 'primary.main',
          }}
        >
          Log In
        </Button>
      </Container>
    </Box>
  );
};

export default LogIn;
