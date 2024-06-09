import React, { useRef } from 'react';
import Header from './header'; 
import Work from './work/index'
import Contact from './contact/index'
import Skills from './skills/index'
import AboutMe from './about';


const Home = ({homeRef, aboutRef, workRef, contactRef}) => {


  return (
    <div>
      <div ref={homeRef} id='home'>
      <Header />
      </div>
      <div ref={aboutRef} id='about'>
      <AboutMe />
      <div id='skills'>
      <Skills />
      </div>
    </div>
      <div ref={workRef} id="work">
        <Work/>
      </div>
      <div ref={contactRef} id="contact">
    <Contact/>
    </div>  
    </div>
  );
};
  
export default Home;  
