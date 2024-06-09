import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LowPolyGlobe = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const width = 400;
        const height = 300;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 50;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);
        mountRef.current.appendChild(renderer.domElement);

        const globeGeometry = new THREE.SphereGeometry(31, 10, 10);
        const globeMaterial = new THREE.MeshBasicMaterial({ color: 0xFA4C14, wireframe: true });
        const globe = new THREE.Mesh(globeGeometry, globeMaterial);
        scene.add(globe);

        // Mouse movement effect
        const mouse = { x: 0, y: 0 };
        const onMouseMove = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            globe.rotation.y = mouse.x * Math.PI;
            globe.rotation.x = mouse.y * Math.PI;
        };
        window.addEventListener('mousemove', onMouseMove);

        const animate = () => {
            requestAnimationFrame(animate);
            // Update rotation based on mouse move
            globe.rotation.y += 0.005;  // Constant rotation
            renderer.render(scene, camera);
        };
        animate();

        // Scroll-triggered spin enhancement
        ScrollTrigger.create({
            onUpdate: self => {
                const scrollSpeed = self.direction === -1 ? 0.05 : -0.05; // Enhanced spinning on scroll
                globe.rotation.y += scrollSpeed;
            }
        });

        const handleResize = () => {
            camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        };  
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', onMouseMove);
            renderer.dispose();
            scene.remove(globe);
      
        };
    }, []);

    return <div ref={mountRef} style={{ width: '400px', height: '300px' }} />;
};

export default LowPolyGlobe;


