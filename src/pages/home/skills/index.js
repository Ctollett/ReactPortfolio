import React, { useRef } from 'react';
import './index.css';
import useScrollFixedReveal from '../../../hooks/useScrollFixedReveal';
import LowPolyLines from '../../../components/LowPolyLines/LowPolyLines';

const Skills = () => {
    const containerRef = useRef(null);  // Ensure this is initialized correctly
    const languageRef = useRef(null);
    const frameworksRef = useRef(null);
    const devToolsRef = useRef(null);
    const librariesRef = useRef(null);
    const designToolsRef = useRef(null);

    // Now pass these refs to your hook
    useScrollFixedReveal({ containerRef, languageRef });

    return (
        <div ref={containerRef} className="scroll-container">
            <h2 className='scroll-title'>TECHNOLOGIES</h2>
            <div className='scroll-graphic-container'>

                    <LowPolyLines />
               
            </div>
            <div className="scroll-content">
                <section ref={languageRef}>
                    <h3>Languages</h3>
                    <ul>
                        <li>Java</li>
                        <li>Javascript/HTML/CSS</li>  
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                    </ul>
                </section>
                {/* Other sections... */}
            </div>
        </div>
    );
};

export default Skills;



 