import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const fragmentShader = `
uniform float pixelSize;
uniform sampler2D map;
varying vec2 vUv;
void main() {
  vec2 dxy = pixelSize / vec2(textureSize(map, 0));
  vec2 coord = dxy * floor(vUv / dxy);
  gl_FragColor = texture(map, coord);
}`;

const useThreePixelation = (imagePath) => {
  const ref = useRef(null);

  useEffect(() => {
    const width = 800;
    const height = 600;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    ref.current.appendChild(renderer.domElement);

    const texture = new THREE.TextureLoader().load(imagePath);
    const uniforms = {
      map: { value: texture },
      pixelSize: { value: 10 }
    };

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader
    });

    const plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 3), material);
    scene.add(plane);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleMouseEnter = () => {
      uniforms.pixelSize.value = 0.1;  
    };

    const handleMouseLeave = () => {
      uniforms.pixelSize.value = 10; 
    };

    renderer.domElement.addEventListener('mouseenter', handleMouseEnter);  
    renderer.domElement.addEventListener('mouseleave', handleMouseLeave);

   // Assuming this is part of the useEffect cleanup function within useThreePixelation
return () => {
  renderer.domElement.removeEventListener('mouseenter', handleMouseEnter);
  renderer.domElement.removeEventListener('mouseleave', handleMouseLeave);
  scene.remove(plane);  // This also disposes of the plane's geometry if not referenced elsewhere
  material.dispose();
  texture.dispose();
  renderer.dispose();  // Clean up the renderer and its canvas
  if (ref.current) {
    ref.current.removeChild(renderer.domElement);  // Remove the canvas from the DOM
  }
};  

  }, [imagePath]);

  return ref;
};

export default useThreePixelation;
