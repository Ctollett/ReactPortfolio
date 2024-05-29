import React from 'react';
import './index.css';
import useScrollFixedReveal from '../../../hooks/useScrollFixedReveal';
import LowPolyLines from '../../../components/LowPolyLines/LowPolyLines';

const Skills = () => {
    const { titleRef, contentRef, graphicRef } = useScrollFixedReveal();

    return (
        <div className="scroll-container">
             <h2 ref={titleRef} className='scroll-title'>TECHNOLOGIES</h2>
            <div className='scroll-graphic-container'>
             <div ref={graphicRef} className='scroll-graphic'>
                <LowPolyLines />
            </div>
            </div>
            <div ref={contentRef} className="scroll-content">
                <section>
                    <h3>Languages</h3>
                    <ul>
                        <li>Java</li>
                        <li>Javascript/HTML/CSS</li>  
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                    </ul>
                </section>
                <section>
                    <h3>Frameworks</h3>
                    <ul>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>ASP.NET</li>
                        <li>Springboot</li>
                        <li>Bootstrap</li>
                        <li>Tailwind-UI</li>
                    </ul>
                </section>
                <section>
                    <h3>Dev Tools</h3>
                    <ul>
                        <li>Github</li>
                        <li>VS Code</li>
                        <li>Visual Studio</li>
                        <li>Netbeans</li>
                        <li>Google Cloud Platform</li>
                        <li>Digital Ocean</li>
                    </ul>
                </section>
                <section>  
                    <h3>Libraries</h3>
                    <ul>
                        <li>GSAP</li>
                        <li>Locomotive Scroll</li>
                        <li>JavaFX</li>
                        <li>Three.js</li>
                    </ul>
                </section>
                <section>
                    <h3>Design Tools</h3>
                    <ul>
                        <li>Photoshop</li>
                        <li>InDesign</li>
                        <li>Illustrator</li>
                        <li>Adobe XD</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Skills;

 