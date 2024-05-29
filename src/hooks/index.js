import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            behavior: 'smooth'
        });
    }, [location.pathname]);

}

export default useScrollToTop;
  