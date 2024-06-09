import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      
        window.scrollTo(0, 0);

    
        ScrollTrigger.refresh();

    }, [location]);
};

export default useScrollToTop;
  