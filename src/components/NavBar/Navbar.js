import React, { useState, useRef, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import useGlitchEffect from '../../hooks/useTextGlitch';
import { useTheme } from '../../Context/ThemeContext'; 
import  gsap  from 'gsap';
import { BlurContext } from '../../Context/BlurContext';
import useGlitchMenu from '../../hooks/useGlitchMenu';

const Navbar = ({ onMenuSelect, aboutRef, workRef, homeRef, contactRef, activeSection}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const { isDarkMode, toggleTheme } = useTheme();
  const menuRef = useRef();
  const toggleButtonRef = useRef();
  const blurRef = useContext(BlurContext);
  const { canvasRef, fillSquares, clearSquares } = useGlitchMenu(); 
  const location = useLocation();
  const navigate = useNavigate();

  const refs = {
    home: useRef(null),
    about: useRef(null),
    work: useRef(null), 
    contact: useRef(null)
  };

  const navRefs = {
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
  


  const toggleMenu = () => {
    setIsOpen(prevState => {
        const newState = !prevState;
        if (newState) {
            console.log("fill squares called")
            fillSquares();  
        } else {
          console.log("clear squares called")
            clearSquares();  
        }
        return newState;
    });
};



useEffect(() => {
  const navLinks = [refs.home.current, refs.about.current, refs.work.current, refs.contact.current];
  const navContainers = [navRefs.home.current, navRefs.about.current, navRefs.work.current, navRefs.contact.current];
  const tl = gsap.timeline();

  if (isOpen) {
    // Applying the blur
    tl.to(blurRef.current, { filter: 'blur(5px)', duration: 0.1, ease: 'power2.in' })
      .to(navContainers, {
        autoAlpha: 1,
        duration: 0.5,
        ease: 'power1.inOut',
        stagger: 0.1,
        onStart: () => {
          navLinks.forEach((link, index) => {
            gsap.to(link, {onStart: startGlitchEffect, onStartParams: [link], delay: index * 0.1});
          });
        }
      }, "<0.5") 
      .to(blurRef.current, { filter: 'blur(0px)', duration: 0.3, ease: 'power2.out' }, ">0.1");
  } else {
    tl.to(blurRef.current, { filter: 'blur(5px)', duration: 0.1, ease: 'power2.in' })
      .to(navContainers, { autoAlpha: 0, duration: 0.3, ease: 'power1.out', stagger: 0.1 }, "<0.1")
      .to(blurRef.current, { filter: 'blur(0px)', duration: 0.5, ease: 'power2.out' }, "<0.1");

    navLinks.forEach(link => {
      gsap.to(link, {onComplete: stopGlitchEffect, onCompleteParams: [link]});
    });
  }
}, [isOpen, startGlitchEffect, stopGlitchEffect, blurRef, toggleButtonRef, refs]);


   


  
  
  

  return (
    <>
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
        <button  ref={toggleButtonRef} onClick={toggleMenu} className={`menu-toggle ${isOpen ? 'open' : ''}`}>
    <div className={`inner-border ${isOpen ? 'open' : ' '}`}>
        {isOpen ? 'Close' : 'Menu'}
    </div>
</button>

      
        <div className={isOpen ? "navbar-nav open" : "navbar-nav"}>
        <canvas className={`canvas ${isOpen ? 'open' : ''}`} ref={canvasRef}></canvas>
          <ul>
            <li ref={navRefs.home} className="nav-item">
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
              <p>01</p>
            </li>

            <li ref={navRefs.about} className="nav-item">  
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
              <p>02</p>
            </li>
            <li ref={navRefs.work} className="nav-item">
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
              <p>03</p>
            </li>
            <li ref={navRefs.contact} className="nav-item">
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
              <p>04</p>
            </li>
          </ul>
        </div>
        
      </nav>
       </>
  );
};

export default Navbar;




  