import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import getTheme from './theme';
import headshot from './assets/headshot.jpg';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState(localStorage.getItem('themeMode') || 'light');
  const [enableTransition, setEnableTransition] = useState(false);

  useEffect(() => {
    ReactGA.initialize('G-E2XDJ712SJ');
  }, []);

  const location = useLocation();

useEffect(() => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
}, [location]);

  useEffect(() => {
    const timeoutId = setTimeout(() => setEnableTransition(true), 100);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const theme = getTheme(mode, enableTransition);

  const handleModeToggle = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className={enableTransition ? '' : 'no-transition'}>
          <Navbar onToggle={handleModeToggle} />
          <Container sx={{ my: 4 }}>
            <Header headshot={headshot} />
            <Education />
            <Experience />
            <Projects />
            <TechnicalSkills />
            {/* More components can be added here as needed */}
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
}


export default App;
