import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#ff1744',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.2rem',
    },
    h2: {
      fontSize: '1.8rem',
    },
    // Other variants...
  },
  components: {
    // Override styles for the Container component
    MuiContainer: {
      styleOverrides: {
        root: {
          // Define default maxWidth for each breakpoint
          '@media (min-width:0px) and (orientation: landscape)': {
            maxWidth: '100%', // default for xs breakpoint
          },
          '@media (min-width:600px)': {
            maxWidth: '80%', // sm breakpoint
          },
          '@media (min-width:900px)': {
            maxWidth: '60%', // md breakpoint
          },
          // You can continue with other breakpoints (lg, xl) if needed
          // '@media (min-width:1200px)': {
          //   maxWidth: 'whateverValueYouWant', // lg breakpoint
          // },
          // '@media (min-width:1536px)': {
          //   maxWidth: 'whateverValueYouWant', // xl breakpoint
          // },
        },
      },
    },
  },
  // Other custom theme settings can be added here
});

export default theme;
