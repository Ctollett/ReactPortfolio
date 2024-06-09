import { useRef } from 'react';
import gsap from 'gsap';

const useGsapGlitchEffect = (refs) => {
    const timelines = useRef({});

    const createGlitchTimeline = (element) => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, paused: true });  // Slower cycle between repeats
        const words = element.textContent.split(" "); // Split text into words
        const originalText = element.textContent;

        // Iterate over each word with a longer duration and increased delay
        words.forEach((word, index) => {
            const start = element.textContent.indexOf(word);
            const end = start + word.length;
            let glitchedText = originalText.split('');

            // Applying glitch effect to each word instead of each character
            for (let i = start; i < end; i++) {
                glitchedText[i] = String.fromCharCode(33 + Math.random() * 94);
            }

            tl.to(element, {
                duration: 0.5,  // Increased duration for each glitch effect on a word
                delay: 0.5,  // Increased delay to slow down the appearance of glitches
                text: {
                    value: glitchedText.join(''),
                    delimiter: ''
                },
                ease: 'none'
            }, `+=0.5`);  // Delay added to increase time before next word starts glitching
        });

        // Return to original text at the end
        tl.to(element, {
            duration: 0.5,  // Consistent with glitch effect duration
            text: originalText,
            ease: 'none'
        });

        return tl;
    };

    const startGlitchEffect = (elementId) => {
        const element = refs[elementId]?.current;
        if (!element) return;

        if (!timelines.current[elementId]) {
            timelines.current[elementId] = createGlitchTimeline(element);
        }

        timelines.current[elementId].restart(true, false);
    };

    const stopGlitchEffect = (elementId) => {
        const tl = timelines.current[elementId];
        if (tl) {
            tl.pause();
            tl.seek(0);  // Reset the timeline to its initial state
        }
    };

    return { startGlitchEffect, stopGlitchEffect };
};

export default useGsapGlitchEffect;

