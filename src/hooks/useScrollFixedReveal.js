import { useRef, useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const useScrollFixedReveal = ({ containerRef, languageRef }) => {
    useGSAP(() => {
         let resizeTimeout; 
        const setupTriggers = () => {

           
            if (containerRef.current) {
                const existingTrigger = ScrollTrigger.getById('containerTrigger');
                if (!existingTrigger) {
                    ScrollTrigger.create({
                        id: 'containerTrigger',
                        trigger: containerRef.current,
                        start: "top top",
                        end: `+=5000px`,
                        pin: true,
                 
                        scrub: true,
                    });
                } else {
                    existingTrigger.refresh();
                }
            }

     
            if (languageRef.current) {
                gsap.utils.toArray(languageRef.current.children).forEach((child, index) => {
                    gsap.fromTo(child, {
                        autoAlpha: 0,
                        y: 50
                    }, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: child,  
                            start: "top center",
                            toggleActions: "play none none reverse",
               
                            scrub: true
                        }  
                    });
                });
            }
        };

        setupTriggers();

        const resizeObserver = new ResizeObserver(entries => {
            clearTimeout(resizeTimeout);
            console.log("resize")
            resizeTimeout = setTimeout(() => {
                setupTriggers();
                ScrollTrigger.refresh(true);
            }, 300);
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }
  
        return () => {
            resizeObserver.disconnect();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            clearTimeout(resizeTimeout);
        };
    }, [containerRef, languageRef]);

    return null;
};

export default useScrollFixedReveal;








