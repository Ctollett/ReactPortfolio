import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import useGlitchEffect from '../../hooks/useTextGlitch';
import { useTheme } from '../../Context/ThemeContext'; 


const Navbar = ({ onMenuSelect, aboutRef, workRef, homeRef, contactRef, activeSection}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const { isDarkMode, toggleTheme } = useTheme();

  const location = useLocation();
  const navigate = useNavigate();

  const refs = {
    home: useRef(null),
    about: useRef(null),
    work: useRef(null), 
    contact: useRef(null)
  };
  const { startGlitchEffect, stopGlitchEffect, useGlitchWhenActive } = useGlitchEffect(refs);
  useGlitchWhenActive(activeSection); 

  const handleMenuClick = (sectionRef, path, linkName) => {
    toggleMenu();
    setActiveLink(linkName); 
    if (location.pathname !== path) { 
      navigate(path);
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const toggleMenu = () => setIsOpen(!isOpen);

 
  return (

      <nav className="navbar">
        <div className='logo-container'>
          <div className="logo">CT<span className="reg-mark">&reg;</span>
          </div>
        <div className="themeButton">
          <label class="toggle-switch">
            <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
          <span class="slider round"></span>
        </label>
          </div>
        </div>
        <button onClick={toggleMenu} className={`menu-toggle ${isOpen ? 'open' : ''}`}>
          {isOpen ? 'Close' : 'Menu'}
        </button>
      
        <div className={isOpen ? "navbar-nav open" : "navbar-nav"}>
          <ul>
            <li className="nav-item">
              <div
                id="home-link"
                ref={refs.home}
                className={activeSection === 'home' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleMenuClick(homeRef, '/#home', 'home')}
                onMouseEnter={() => startGlitchEffect(refs.home.current)}
                onMouseLeave={() => stopGlitchEffect(refs.home.current)}
              >
                Home
              </div>
            </li>

            <li className="nav-item">  
              <div
                id="about-link"
                ref={refs.about}
                className={activeSection === 'about' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleMenuClick(aboutRef, '/#about', 'about')}
                onMouseEnter={() => startGlitchEffect(refs.about.current)}
                onMouseLeave={() => stopGlitchEffect(refs.about.current)}
              >
                About
              </div>
            </li>
            <li className="nav-item">
              <div
                id="work-link"
                ref={refs.work}
                className={activeSection === 'work' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleMenuClick(workRef, '/#work', 'work')}
                onMouseEnter={() => startGlitchEffect(refs.work.current)}
                onMouseLeave={() => stopGlitchEffect(refs.work.current)}
              >
                Works
              </div>
            </li>
            <li className="nav-item">
              <div  
                id="contact-link"
                ref={refs.contact}
                className={activeSection === 'contact' ? 'nav-link active' : 'nav-link'}
                onClick={() => handleMenuClick(contactRef, '/#contact', 'contact')}
                onMouseEnter={() => startGlitchEffect(refs.contact.current)}
                onMouseLeave={() => stopGlitchEffect(refs.contact.current)}
              >
                Contact
              </div>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;




  