import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Box, Typography, Container, Paper } from '@mui/material';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append('username', email);
    params.append('password', password);

    try {
      const response = await axios.post('http://localhost:8000/token', params);
      localStorage.setItem('token', response.data.access_token);
      setMessage('Login successful!');
      alert('Login Successful! Token has been saved.');
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.detail || 'Incorrect email or password');
      } else {
        setMessage('Could not connect to the server. Please make sure the backend is running.');
      }
      console.error('There was an error!', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} sx={{ marginTop: 4, padding: 3, borderRadius: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
          {message && <Typography color="textSecondary" align="center">{message}</Typography>}
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;