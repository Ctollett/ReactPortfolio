import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import './index.css';
import { useScrollTrigger } from '../../Context/ScrollTriggerContext';

const LowPolyLines = () => {
    const mountRef = useRef(null);
    const cubeRef = useRef();
    const { registerTrigger, unregisterTrigger } = useScrollTrigger();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); // Background color transparent

        mountRef.current.appendChild(renderer.domElement);
        camera.position.z = 5;

        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshBasicMaterial({ color: 0xFA4C14, wireframe: true });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        cubeRef.current = cube; // Store the cube in the ref

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        const scrollTrigger = registerTrigger({
            onUpdate: self => {
                if (cubeRef.current) {
                    const rotation = self.progress * 2 * Math.PI;
                    cubeRef.current.rotation.x = rotation;
                    cubeRef.current.rotation.y = rotation;
                }
            }
        });

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);  
        };
        animate();

        return () => {
            unregisterTrigger(scrollTrigger);
            window.removeEventListener('resize', handleResize);
            geometry.dispose();
            material.dispose();
            renderer.dispose(); 
        };
    }, [registerTrigger, unregisterTrigger]);

    return <div ref={mountRef} className='scroll-graphic-item'></div>;
};

export default LowPolyLines;

