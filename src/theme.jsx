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
        root: ({ theme }) => ({
          [theme.breakpoints.only('xs')]: {
            maxWidth: '100%', // default for xs breakpoint
          },
          [theme.breakpoints.up('sm')]: {
            maxWidth: '80%', // sm breakpoint
          },
          [theme.breakpoints.up('md')]: {
            maxWidth: '60%', // md breakpoint
          },
          // You can continue with other breakpoints (lg, xl) if needed
          // [theme.breakpoints.up('lg')]: {
          //   maxWidth: 'whateverValueYouWant', // lg breakpoint
          // },
          // [theme.breakpoints.up('xl')]: {
          //   maxWidth: 'whateverValueYouWant', // xl breakpoint
          // },
        }),
      },
    },
  },
  // Other custom theme settings can be added here
});

export default theme;
