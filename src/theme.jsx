import { createTheme } from '@mui/material/styles';

const transitionSetting = 'background-color 300ms ease-out, color 300ms ease-out';

const commonThemeSettings = {
  transitions: {
    create: () => transitionSetting,
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.2rem',
    },
    h2: {
      fontSize: '1.8rem',
    },
    // ... other variants
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: transitionSetting,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          [theme.breakpoints.only('xs')]: {
            maxWidth: '100%',
          },
          [theme.breakpoints.up('sm')]: {
            maxWidth: '80%',
          },
          [theme.breakpoints.up('md')]: {
            maxWidth: '60%',
          },
          // ... other breakpoints
        }),
      },
    },
    // ... transitions for other components can be defined similarly
  },
};

// Light theme specific settings
const lightTheme = createTheme({
  ...commonThemeSettings,
  palette: {
    mode: 'light',
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
      paper: '#f5f5f5',
    },
    text: {
      primary: '#2e2e2e',
      secondary: 'rgba(46, 46, 46, 0.7)',
      disabled: 'rgba(46, 46, 46, 0.5)',
      hint: 'rgba(46, 46, 46, 0.5)',
    },
    // ... additional color settings for light mode
  },
  // ... any additional customizations for light theme
});

// Dark theme specific settings
const darkTheme = createTheme({
  ...commonThemeSettings,
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#121212',
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
    },
    // ... additional color settings for dark mode
  },
  // ... any additional customizations for dark theme
});

// Function to get the theme based on mode
export const getTheme = (mode) => (mode === 'dark' ? darkTheme : lightTheme);

// Export the light theme by default
export default getTheme;
