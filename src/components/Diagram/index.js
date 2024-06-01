// VintageDiagram.js

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const generateRandomPoints = (count, range) => {
    const points = [];
    for (let i = 0; i < count; i++) {
        const x = Math.random() * range - range / 2;
        const y = Math.random() * range - range / 2;
        points.push(new THREE.Vector3(x, y, 0));
    }
    return points;
};

const Line = ({ vertices }) => {
    const lineRef = useRef();
    const geometryRef = useRef();

    useEffect(() => {
        if (geometryRef.current) {
            geometryRef.current.setFromPoints(vertices);
        }
    }, [vertices]);

    useFrame(() => {
        const time = Date.now() * 0.001;
        vertices.forEach((vertex, index) => {
            vertex.x += Math.sin(time + index) * 0.1;
            vertex.y += Math.cos(time + index) * 0.1;
        });  
        geometryRef.current.setFromPoints(vertices);  
    });

    return (
        <line ref={lineRef}>
            <bufferGeometry ref={geometryRef} />
            <lineBasicMaterial color={0x000000} />
        </line>
    );
};

const Lines = () => {
    const points = generateRandomPoints(10, 400);
    return <Line vertices={points} />;
};

const VintageDiagram = () => {
    return (
        <Canvas orthographic camera={{ zoom: 1, position: [0, 0, 500] }}>
            <ambientLight />
            <Lines />
        </Canvas>
    );
};

export default VintageDiagram;
