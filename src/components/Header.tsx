import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg">
          <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
            <Typography variant="h5" component={Link} to="/directory">
              BOOKS LIBRARY
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Button color="inherit" component={Link} to="/mybooks">
                <PersonIcon sx={{ mr: 1 }} /> My Books
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;