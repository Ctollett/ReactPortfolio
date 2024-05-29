import React, { useState, useRef } from 'react';
import useGlitchEffect from '../../../hooks/useTextGlitch';
import './index.css';

const AboutMeSection = () => {
    const [expandedCard, setExpandedCard] = useState(null);
    const experienceRef = useRef(null);
    const educationRef = useRef(null);
    const skillsRef = useRef(null);

    const { startGlitchEffect, stopGlitchEffect } = useGlitchEffect({
        experience: experienceRef,
        education: educationRef,
        skills: skillsRef
    });

    const toggleCard = (card) => {
        setExpandedCard(expandedCard === card ? null : card);
    };

    return (
        <div className="about-me-section">
            <h1 className="about-title">ABOUT</h1>
            <div className="card-container">
                <div className={`card ${expandedCard === 'experience' ? 'expanded' : ''}`}>
                    <div 
                        className="card-header" 
                        onClick={() => toggleCard('experience')}
                        onMouseEnter={() => startGlitchEffect(document.getElementById('experience-title'))}
                        onMouseLeave={() => stopGlitchEffect(document.getElementById('experience-title'))}
                    >
                        <h2 id="experience-title">Experience</h2>
                        <button className="toggle-button">{expandedCard === 'experience' ? '-' : '+'}</button>
                    </div>
                    <div className="card-content">
                        <ul className="list">
                            <li>Software Engineer at Company A (2021 - Present)</li>
                            <li>Frontend Developer at Company B (2019 - 2021)</li>
                            <li>Intern at Company C (2018 - 2019)</li>
                        </ul>
                    </div>
                </div>
                <div className={`card ${expandedCard === 'education' ? 'expanded' : ''}`}>
                    <div 
                        className="card-header" 
                        onClick={() => toggleCard('education')}
                        onMouseEnter={() => startGlitchEffect(document.getElementById('education-title'))}
                        onMouseLeave={() => stopGlitchEffect(document.getElementById('education-title'))}
                    >
                        <h2 id="education-title">Education</h2>
                        <button className="toggle-button">{expandedCard === 'education' ? '-' : '+'}</button>
                    </div>
                    <div className="card-content">
                        <ul className="list">
                            <li>Bachelor's in Computer Science from University X (2015 - 2019)</li>
                            <li>Master's in Software Engineering from University Y (2019 - 2021)</li>
                        </ul>
                    </div>
                </div>
                <div className={`card ${expandedCard === 'skills' ? 'expanded' : ''}`}>
                    <div 
                        className="card-header" 
                        onClick={() => toggleCard('skills')}
                        onMouseEnter={() => startGlitchEffect(document.getElementById('skills-title'))}
                        onMouseLeave={() => stopGlitchEffect(document.getElementById('skills-title'))}
                    >
                        <h2 id="skills-title">Skills</h2>
                        <button className="toggle-button">{expandedCard === 'skills' ? '-' : '+'}</button>
                    </div>
                    <div className="card-content">
                        <ul className="list">
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>  
                            <li>CSS & HTML</li>  
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMeSection;






    
  
   
    