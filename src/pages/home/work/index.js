import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import useGlitchEffect from '../../../hooks/useTextGlitch';

// Import your images
import Pareidolia from '../../../assets/images/Pareidolia.png';
import Portfolio from '../../../assets/images/Portfolio/Home.png';
import Casino from '../../../assets/images/ChoctawNation/casino.jpg';

const WorkMenu = () => {
  const navigate = useNavigate();

  const projects = [
    { id: '001', name: "PAREIDOLIA", description: "Full-Stack Development", year: "2023", image: Pareidolia },
    { id: '002', name: "PORTFOLIO", description: "Front-End Development", year: "2023-2024", image: Portfolio },
    { id: '003', name: "CHOCTAW NATION OF OKLAHOMA", description: "Graphic/Digital Design", year: "2017-2023", image: Casino }
  ];

  const rowRefs = useRef(projects.map(() => React.createRef()));
  const nameRefs = useRef(projects.map(() => React.createRef()));
  const { startGlitchEffect, stopGlitchEffect } = useGlitchEffect(nameRefs.current);

  return (
    <div className="work-menu">
      {projects.map((project, index) => {
        return (
          <div className="project-row" key={project.id} ref={rowRefs.current[index]}
            onMouseEnter={() => startGlitchEffect(nameRefs.current[index].current)}
            onMouseLeave={() => stopGlitchEffect(nameRefs.current[index].current)}
            onClick={() => navigate(`/work/${project.id}`)}>
            <div className='project-detail'>  
              <div className='project-title'>
                <p className="project-number">{project.id}</p>
                <div className='project-name-row'>
                  <div className="image-container">
                    <img src={project.image} alt={project.name} className="project-preview-image" />
                  </div>
                  <span ref={nameRefs.current[index]} id={`project-name-${project.id}`} className="project-name">{project.name}</span>
                </div>
              </div>
              <div className='project-link-section'>
                <h4 className="project-year">{project.year}</h4>
                <span className="project-description">{project.description}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkMenu;



