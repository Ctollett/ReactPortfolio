import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ParticleWave = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 100;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        mountRef.current.appendChild(renderer.domElement);

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const highlightColor = new THREE.Color(0xFA4C14); // Softened highlight color
        const normalColor = new THREE.Color(0x333333); // Base color
        const geometry = new THREE.SphereGeometry(0.5, 16, 16);
        const particles = new THREE.Group();
        scene.add(particles);

        const gridWidth = 500;
        const gridHeight = 30;
        for (let i = 0; i < gridWidth; i++) {
            for (let j = 0; j < gridHeight; j++) {
                const material = new THREE.MeshBasicMaterial({ color: normalColor });
                const sphere = new THREE.Mesh(geometry, material);
                sphere.position.x = (i - gridWidth / 2) * 2;
                sphere.position.y = (j - gridHeight / 2) * 2;
                particles.add(sphere);
            }  
        }

        const onMouseMove = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
        };
        window.addEventListener('mousemove', onMouseMove);

        const lerpColor = (colorA, colorB, alpha) => {
            return colorA.clone().lerp(colorB, alpha);
        };

        const animate = () => {
            requestAnimationFrame(animate);
            const time = Date.now() * 0.001;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(particles.children);

            particles.children.forEach(particle => {
                const distance = Math.sqrt(Math.pow(particle.position.x - mouse.x * 100, 2) + Math.pow(particle.position.y - mouse.y * 100, 2));
                if (distance < 50) {
                    const scaleFactor = 1 + (50 - distance) / 50 * 0.5;
                    particle.scale.set(scaleFactor, scaleFactor, scaleFactor);
                    particle.material.color.set(lerpColor(normalColor, highlightColor, 1 - distance / 50));
                } else {
                    particle.material.color.set(lerpColor(particle.material.color, normalColor, 0.1));
                    particle.scale.set(1, 1, 1);
                }
                // Adjust wave intensity here
                const zPosition = 5 * Math.sin(particle.position.x * 0.1 + time) * Math.cos(particle.position.y * 0.1 + time);  // Reduced amplitude from 10 to 5
                particle.position.z = zPosition;
            });

            renderer.render(scene, camera);
        };
        animate();  

        

        const handleResize = () => {  
            camera.aspect = window.innerWidth / window.innerHeight;  
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);  

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', handleResize);
           
        };
    }, []);

    return <div ref={mountRef} style={{ position: 'absolute', width: '100%', height: '100%', marginBottom: '50em'}} />;
};

export default ParticleWave








 


