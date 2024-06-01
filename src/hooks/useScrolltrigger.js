// hooks/useAnimation.js
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useAnimation = (ref, settings) => {
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const timeline = gsap.timeline({
            scrollTrigger: {  
                trigger: element,
                ...settings.scrollTrigger,
            }
        });

        settings.animations.forEach(animation => {
            timeline.fromTo(element.querySelectorAll(animation.target), animation.from, animation.to);
        });

        return () => {
            if (ScrollTrigger.getById(settings.scrollTrigger.id)) {
                ScrollTrigger.getById(settings.scrollTrigger.id).kill();
            }
            timeline.kill();
        };
    }, [ref, settings]);
};

export default useAnimation;
