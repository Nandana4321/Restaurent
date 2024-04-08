import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';


import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';




const Navbar = () => {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"ButtonText"}}>
        
        <Toolbar>
          <IconButton
          size="large"
            edge="start"
            color="success"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <FastfoodOutlinedIcon/>&nbsp;&nbsp;
            Restaurent App
          </Typography>
          
          <Button> 
            <Link to='/'style={{color:"white",textDecoration:"none"}} >HOME</Link></Button>
        
           {/* <Button> 
            <Link to='/login'style={{color:"white",textDecoration:"none"}} >LOGIN</Link></Button> */}



<Button
            component={RouterLink}
            to="/login" 
            style={{color:"white",textDecoration:"none"}}
            
          >
            Login
          </Button>
            <Button>
            
            <Link to='/signup'style={{color:"white",textDecoration:"none"}} >SIGN UP</Link></Button>
            {/* <Button> 
            <Link to='/d'style={{color:"white",textDecoration:"none"}} >DASHBOARD</Link></Button>
             */}
            <Button> 
            <Link to='/o'style={{color:"white",textDecoration:"none"}} >ORDER</Link></Button>
            <Button> 
            <Link to='/f'style={{color:"white",textDecoration:"none"}} >FEEDBACK</Link></Button>
            {/* <Button> 
            <Link to='/m'style={{color:"white",textDecoration:"none"}} >MENU</Link></Button> */}
            <Button> 
            <Link to='/c'style={{color:"white",textDecoration:"none"}} >CART</Link></Button>
            {/* <Button> 
            <Link to='/admin'style={{color:"white",textDecoration:"none"}} >Admin</Link></Button> */}
            
            
            
              
            
            
            
            
            
             

        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;


























