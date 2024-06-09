import React, { useEffect, useRef } from 'react';
import { ThemeProvider } from './Context/ThemeContext.js';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home/home.js'; 
import Navbar from './components/NavBar/Navbar.js';
import CaseStudy from './components/CaseStudy/index.js';
import useActiveSection from './hooks/useActiveSection.js';
import DevPlayground from './components/devplayground.js';
import { ScrollTriggerProvider } from './Context/ScrollTriggerContext.js';
import { BlurProvider } from './Context/BlurContext.js';




function App() {
  const homeRef = useRef(null); 
  const aboutRef =useRef(null);
  const blurRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const activeSection = useActiveSection(['home', 'about', 'work', 'contact']);

  const handleScrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (

      <div className="App">
         <BlurProvider>
        <ThemeProvider>
        <ScrollTriggerProvider>
        <Navbar onMenuSelect={handleScrollToSection} aboutRef={aboutRef} workRef={workRef} homeRef={homeRef} contactRef={contactRef} activeSection={activeSection} />
        <Routes>
          <Route path="/" element={<Home homeRef={homeRef} aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} />} />
          <Route path="/work/:id" element={<CaseStudy />} />
        </Routes>
        </ScrollTriggerProvider>
        </ThemeProvider>
        </BlurProvider>
      </div>
  );
}

export default App;


    
  