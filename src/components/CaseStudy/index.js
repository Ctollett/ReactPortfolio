import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import projects, { getProjectById } from '../Projects';
import AboutProject from '../../components/aboutProject/index'
import ImageGrid from '../../components/aboutProject/PhotoComponent/index'
import './index.css';
import mountain from '../../assets/images/MountainImage.jpg'; 
import useScrollToTop from '../../hooks/index';
import arrow from '../../assets/svgs/arrow.svg'

const CaseStudy = () => {
    useScrollToTop();
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      console.log("Fetching project with ID:", id);
      const projectData = await getProjectById(id);
      console.log("Fetched project data:", projectData);
      if (projectData) {
        setProject(projectData);
      } else {
        console.log(`No project found with ID ${id}`);
      }
    };
  
    fetchProjectData();  
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  // Display project details
  const currentIndex = projects.findIndex(p => p.id === id);
  const nextProjectIndex = (currentIndex >= 0 && currentIndex < projects.length - 1) ? currentIndex + 1 : null;
  const nextProject = nextProjectIndex !== null ? projects[nextProjectIndex] : null;

  return (
    <div className="case-study">
      <div className='title-section'>
    <div className='project-id-box'>
      <p>{"project-" + project.id}</p>
      <div className='corner-wrapper'>
        <div className='corner-inner'></div>
      </div>
    </div>
    <h1>{project.title}</h1>
  </div>
      <div className='image-section'>
         <img src={project.headerImage}></img>
      </div>
      <div className='desc-section'>
        <div className='desc-entries'>
        <p id='siteLink' className='siteLink'> {project.siteUrl ? (
            <a href={project.siteUrl} target="_blank" rel="noopener noreferrer">
              {project.site}
            </a>
          ) : (
            project.site
          )}</p>
        <div className='desc-entry'>
            <p>Year<div id='line'></div><br></br>{project.date}</p>
        </div>
        <div className='desc-entry'>
            <p>Role <div id='line'></div><br></br>{project.role}</p>
        </div>
        <div className='desc-entry'>
    <p>Tech <div id='line'></div><br></br>
        <div className='tech-stack'>
            {project.techStack.map(tech => (
                <span key={tech}>{tech}</span>
            ))}
        </div>
    </p>
</div>
</div>
            </div>
            <div className='about-project-section'>
                <AboutProject overview={project.overview} headline = {project.headline} />
            </div>
            <div className='project-image-section'>
                <ImageGrid images={project.images}/>
            </div>
            {nextProject && (
            <div className='next-project-section'>
                <div className='next-project-box'>
             <p>Next Project</p>
             <div className='corner-wrapper'>
            <div className='corner-inner'></div>
           </div>
            
      </div>
      <Link className= "next-project-link" to={`/work/${projects[nextProjectIndex].id}`}>
    <div className='next-project-title'>
      <h2>{nextProject.title}</h2>
      <div className='project-arrow'>
                <img src={arrow}></img>
                </div>
                </div>
      </Link>
            </div>
      
                )}
    </div>   
  );
}; 

export default CaseStudy;

  