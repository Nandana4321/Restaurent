import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const Signup = () => {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("saved successfully");
    console.log(data); 
    try {
      await axios.post('http://localhost:3001/signup', data);
      console.log("sign in successful");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={inputHandler}
          sx={{ color: 'black' }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={inputHandler}
          sx={{ color: 'black' }}
        />
        <Button
          type="submit" // Specify type="submit" to trigger form submission
          
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          style={{backgroundColor:"black"}}
          
        >
          Sign in
        </Button>
      </form>
    </Box>
  );
};

export default Signup
