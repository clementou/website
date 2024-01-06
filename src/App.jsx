import './App.css';
import Navbar from './components/sections/Navbar';
import Social from './components/sections/Social';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Coursework from './components/sections/Coursework';
import Experience from './components/sections/Experience';
import Leadership from './components/sections/Leadership';
// import Projects from './components/sections/Projects';
import AboutMobile from './components/sections/AboutMobile';
import CourseworkMobile from './components/sections/CourseworkMobile';
import ExperienceMobile from './components/sections/ExperienceMobile';
import LeadershipMobile from './components/sections/LeadershipMobile';
// import ProjectsMobile from './components/sections/ProjectsMobile';
import SocialMobile from './components/sections/SocialMobile';
import { useState, useEffect } from 'react';
import { useScrollPosition } from './hooks/useScrollPosition';
import { trackPageview } from './analytics';

function App() {
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [])

  useEffect(() => {
    trackPageview(window.location.pathname);

    const handleHistoryChange = () => {
      trackPageview(window.location.pathname);
    };

    window.addEventListener('popstate', handleHistoryChange);

    return () => {
      window.removeEventListener('popstate', handleHistoryChange);
    };
  }, []);


  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsive = {
    desktop: width > 1023
  }

  const scrollPosition = useScrollPosition()

  return (
    <div className={responsive.desktop ? "App" : "App-mobile"}>
      <Navbar desktop={responsive.desktop} scrollPosition={scrollPosition} />
      {responsive.desktop ? <Social /> : <div className="placeholder" />}
      <Home desktop={responsive.desktop} />
      {responsive.desktop ? <About /> : <AboutMobile />}
      {responsive.desktop ? <Coursework /> : <CourseworkMobile />}
      {responsive.desktop ? <Experience desktop={responsive.desktop} /> : <ExperienceMobile desktop={responsive.desktop} />}
      {responsive.desktop ? <Leadership desktop={responsive.desktop} /> : <LeadershipMobile desktop={responsive.desktop} />}
      {/* {responsive.desktop ? <Projects /> : <ProjectsMobile />} */}
      {responsive.desktop ? (<div className="placeholder" />) : (<SocialMobile />)}
    </div>
  );
}

export default App;
