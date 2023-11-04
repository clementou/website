import {
  ThemeProvider,
  CssBaseline,
  Container,
} from '@mui/material';
import theme from './theme'; // Importing theme from theme.js
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import headshot from './assets/headshot.jpg';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ my: 4 }}>
        <Header headshot={headshot} />
        <Education />
        <Experience />
        <Projects />
        <TechnicalSkills />
      </Container>
    </ThemeProvider>
  );
}

export default App;
