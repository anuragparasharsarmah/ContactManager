import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" sx={{ marginBottom: '2rem' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Contact Manager
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/add">
          Add Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
