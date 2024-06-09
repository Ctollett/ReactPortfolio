import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import useScrollToTop from '../../hooks/useScrollToTop';


const AboutProject = ({ overview, headline }) => {

    useScrollToTop(); 
    return (
        <div className="overview-section">
            <div className='about-section'>
            <h2>Overview</h2>
            <p>{overview}</p>
            </div>
    <div className='headline-section'>
            <div className='header-box'>
            <h1>{headline}</h1>
            <div className='corner-wrapper'>
        <div className='corner-inner'></div>
      </div>
    </div>
    </div>
    </div>
    );
};

AboutProject.propTypes = {
    overview: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired
};

export default AboutProject;
