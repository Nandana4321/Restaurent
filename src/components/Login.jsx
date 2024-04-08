import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const Login = () => {
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
    alert("button clicked");
    console.log(data); 
    try {
      await axios.post('http://localhost:3001/login', data);
      console.log("Login successful");
    } catch (error) {
      console.error("Error:", error.message);
    }
    // try {
    //   const res = await axios.post('/api/auth', { email, password });
    //   localStorage.setItem('token', res.data.token);
    //   // Redirect to admin dashboard or perform necessary actions
    // } catch (err) {
    //   console.error(err.response.data.msg);
    // }
  };
  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post('/api/auth', { email, password });
  //     localStorage.setItem('token', res.data.token);
  //     // Redirect to admin dashboard or perform necessary actions
  //   } catch (err) {
  //     console.error(err.response.data.msg);
  //   }
  // };
  
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
        Login
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
          InputLabelProps={{
            sx: { color: 'black' } // Change 'red' to your desired label color
          }}
          InputProps={{
            sx: { Color: 'black' } // Change 'blue' to your desired underline color
          }}
          
          
          
        />
        <Button
          type="submit" // Specify type="submit" to trigger form submission
          
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          style={{backgroundColor:"black"}}
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
