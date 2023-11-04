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
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  
  const theme = getTheme(mode);

  const handleModeToggle = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar onToggle={handleModeToggle} />
        <Container sx={{ my: 4 }}>
          <Header headshot={headshot} />
          <Education />
          <Experience />
          <Projects />
          <TechnicalSkills />
          {/* All other components will also appear here */}
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;