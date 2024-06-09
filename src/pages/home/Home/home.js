import React, { useRef, useContext } from 'react';
import Header from '../header'; 
import Work from '../work/index'
import Contact from '../contact/index'
import Skills from '../skills/index'
import AboutMe from '../about';
import { BlurContext } from '../../../Context/BlurContext';


const Home = ({ homeRef, aboutRef, workRef, contactRef }) => {
  const blurRef = useContext(BlurContext);

  return (
    <div>
      <div className='blur-section' ref={blurRef}>
        <div ref={homeRef} id='home'>
          <Header />
        </div>
        <div ref={aboutRef} id='about'>
          <AboutMe />
          <Skills />
        </div>
        <div ref={workRef} id="work">
          <Work />
        </div>
        <div ref={contactRef} id="contact">
          <Contact />
        </div>  
      </div>
    </div>
  );
};

  
export default Home;  
