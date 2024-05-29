import { useRef, useEffect } from 'react';
import React from 'react';

const useLuminescentBlur = (projects, rowRefs) => {
    const canvasRefs = useRef(projects.map(() => React.createRef()));

    useEffect(() => {
        projects.forEach((project, index) => {
            const canvas = canvasRefs.current[index].current;
            const row = rowRefs.current[index].current;
            if (!canvas || !row) return;

            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.src = project.image;

            let animationFrameId;
            let currentBlur = 0; // Start with no blur

            ctx.globalCompositeOperation = 'lighter'; // Use lighter to create a glow effect

            const applyBlurEffect = (amount) => {
                const size = Math.max(1, amount * 0.1);
                ctx.filter = `blur(${size}px)`; // Apply CSS-style blur filter
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };

            img.onload = () => {
                applyBlurEffect(currentBlur);
            };

            const handleMouseEnter = () => {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = requestAnimationFrame(function animate() {
                    if (currentBlur < 20) { // Increase blur to a max of 20px
                        currentBlur += 0.5;
                        applyBlurEffect(currentBlur);
                        animationFrameId = requestAnimationFrame(animate);
                    }
                });
            };

            const handleMouseLeave = () => {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = requestAnimationFrame(function animate() {
                    if (currentBlur > 0) { // Reduce blur until it reaches 0
                        currentBlur -= 0.5;
                        applyBlurEffect(currentBlur);
                        animationFrameId = requestAnimationFrame(animate);
                    }
                });
            };

            row.addEventListener('mouseenter', handleMouseEnter);
            row.addEventListener('mouseleave', handleMouseLeave);
  
            return () => {
                row.removeEventListener('mouseenter', handleMouseEnter);
                row.removeEventListener('mouseleave', handleMouseLeave);
                cancelAnimationFrame(animationFrameId);
            };
        });
    }, [projects, rowRefs.current]);

    return canvasRefs.current;
};

export default useLuminescentBlur;
