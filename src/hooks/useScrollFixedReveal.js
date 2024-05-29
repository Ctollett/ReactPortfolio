import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const useScrollFixedReveal = () => {
    const contentRef = useRef(null);
    const graphicRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        // Setup for graphicRef
        if (graphicRef.current) {
            ScrollTrigger.create({
                trigger: graphicRef.current,
                start: "top -15%", // Customized as needed
                end: "bottom+=120% top",
                pin: true,
                pinSpacing: false,
                scrub: true,
         
            });
        }

        // Setup for titleRef
        if (titleRef.current) {
            ScrollTrigger.create({
                trigger: titleRef.current,
                start: "top 10%",
                end: "+=300%",
                pin: true,
                pinSpacing: false,
                scrub: true,
    
            });
        }

        // Setup for contentRef
        if (contentRef.current) {
            ScrollTrigger.create({
                trigger: contentRef.current,
                start: "top 60%",
                end: "+=200%",
                pin: true,
                scrub: true
            });

            gsap.fromTo(contentRef.current.querySelectorAll('section li'), {
                autoAlpha: 0,
                y: 50
            }, {
                autoAlpha: 1,
                y: 0,
                duration: 2, 
                stagger: 1,
                scrollTrigger: {
                    trigger: contentRef.current,  
                    start: "top 70%",
                    end: "+=200%",  
                    scrub: true
                }
            });
        }

        // Cleanup
        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);

    return { contentRef, graphicRef, titleRef };
};

export default useScrollFixedReveal;








