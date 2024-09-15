import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue color
    },
    secondary: {
      main: '#dc004e', // Red color
    },
    background: {
      default: '#f5f5f5', // Light grey background
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h4: {
      textAlign: 'center',
      marginTop: '100px',
    },
    h5: {
      color: 'white',
      textDecoration: 'none',
    },
    h6: {
      textAlign: 'center',
    },
    body1: {
      color: '#6a6a6a', // Grey color
    },
  },
});

export default theme;