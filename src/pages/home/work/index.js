import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import usePixelateImage from '../../../hooks/usePixelateImage';
import useGlitchEffect from '../../../hooks/useTextGlitch';

// Import your images
import Pareidolia from '../../../assets/images/Pareidolia.png';
import cube from '../../../assets/images/cube.png';
import mountain from '../../../assets/images/MountainImage.jpg';
import forest from '../../../assets/images/forest.jpg';

const WorkMenu = () => {
  const navigate = useNavigate();

  const projects = [
    { id: '001', name: "PAREIDOLIA", description: "Description of Project One", year: "2023", image: Pareidolia},
    { id: '002', name: "PROJECT 2", description: "Description of Project Two", year: "2023", image: cube },
    { id: '003', name: "PORTFOLIO SITE", description: "Description of Project Three", year: "2023", image: mountain },
    { id: '004', name: "CHOCTAW NATION OF OKLAHOMA", description: "Description of Project Three", year: "2017-2023", image: forest }
  ];
  const rowRefs = useRef(projects.map(() => React.createRef()));
  const nameRefs = useRef(projects.map(() => React.createRef()));
  const canvasRefs = usePixelateImage(projects, rowRefs);
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
                                      <canvas ref={canvasRefs[index]} width={400} height={400} className="project-preview-image"></canvas>
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


