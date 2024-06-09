import React, { createContext, useContext, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerContext = createContext();

export const ScrollTriggerProvider = ({ children }) => {
    const [triggers, setTriggers] = useState([]);

    const registerTrigger = useCallback((triggerConfig) => {
        const trigger = ScrollTrigger.create(triggerConfig);
        setTriggers(prev => [...prev, trigger]);
        return trigger;
    }, []);  

    const unregisterTrigger = useCallback((trigger) => {
        if (trigger) {
            trigger.kill();
            setTriggers(prev => prev.filter(t => t !== trigger));
        }
    }, []);

    const clearAll = useCallback(() => {
        triggers.forEach(trigger => trigger.kill());
        setTriggers([]);
    }, [triggers]);

    const refreshTriggers = useCallback(() => {
        ScrollTrigger.refresh();
    }, []);

    return (
        <ScrollTriggerContext.Provider value={{ registerTrigger, unregisterTrigger, clearAll, refreshTriggers }}>
            {children}
        </ScrollTriggerContext.Provider>
    );
};

export const useScrollTrigger = () => useContext(ScrollTriggerContext);


