import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import './App.css';
import { ThemeProvider, createTheme, Box, Typography, Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Router>
        <div className="App">
          {/* --- NEW HEADER SECTION --- */}
          <Box sx={{ pt: 4, pb: 2 }}>
            {/* Title with Icon */}
            <Typography 
              variant="h3" 
              component="div" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'white', 
                fontWeight: 'bold', 
                textShadow: '2px 2px 8px rgba(0,0,0,0.8)' 
              }}
            >
              <FitnessCenterIcon sx={{ fontSize: 'inherit', mr: 1.5 }} />
              Gym Management System
            </Typography>

            {/* Navigation Links as Buttons */}
            <Box sx={{ mt: 2 }}>
              <Button component={Link} to="/register" variant="contained" sx={{ mr: 2 }}>
                Register
              </Button>
              <Button component={Link} to="/login" variant="contained" color="secondary">
                Login
              </Button>
            </Box>
          </Box>

          {/* --- ROUTES FOR PAGES --- */}
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;