// hooks/useGlitchEffect.js
import { useRef, useEffect } from 'react';

const useGlitchEffect = (refs) => {
    const originalTexts = useRef({});
    const intervalRef = useRef({});

    const startGlitchEffect = (element) => {
        if (!element || !element.textContent || !element.id) return;
        clearInterval(intervalRef.current[element.id]);
        originalTexts.current[element.id] = originalTexts.current[element.id] || element.textContent;
    
    
        let i = 0;
        intervalRef.current[element.id] = setInterval(() => {
            if (!originalTexts.current[element.id] || i >= originalTexts.current[element.id].length) {
                clearInterval(intervalRef.current[element.id]);
                element.textContent = originalTexts.current[element.id];
            } else {
                element.textContent = originalTexts.current[element.id].substring(0, i) + String.fromCharCode(33 + Math.random() * 94) + originalTexts.current[element.id].substring(i + 1);
                i++;
            }
        }, 45);
    };

    const stopGlitchEffect = (element) => {
        if (!element || !element.id) return;
        clearInterval(intervalRef.current[element.id]);
        if (originalTexts.current[element.id]) {
            element.textContent = originalTexts.current[element.id];
      
        }
    };

    const useGlitchWhenActive = (activeSection) => {
        useEffect(() => {
            const element = refs[activeSection]?.current;
            if (element) { 
                startGlitchEffect(element);
            }
            return () => {
                if (element) {
                    stopGlitchEffect(element);
                }
            };
        }, [activeSection, refs]);
    };

    return { startGlitchEffect, stopGlitchEffect, useGlitchWhenActive };
};

export default useGlitchEffect;

