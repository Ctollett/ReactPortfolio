import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useActiveSection = (sectionIds) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.hash);

  useEffect(() => {
    // Check the screen size before initializing the IntersectionObserver
    if (window.innerWidth > 768) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            const newActiveSection = `#${entry.target.id}`;
            setActiveSection(newActiveSection);
            if (location.hash !== newActiveSection) {
              navigate(newActiveSection, { replace: true });
            }
          }
        });
      }, { threshold: 0.25 });
  
      // Observe all the sections
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });

      // Cleanup function to unobserve all the sections
      return () => {
        sectionIds.forEach(id => {
          const el = document.getElementById(id);
          if (el) observer.unobserve(el);
        });
        observer.disconnect();
      };
    }
    // If not greater than 768 pixels, we do nothing, effectively disabling the observer for mobile.
    return () => {};
  }, [sectionIds, navigate, location.hash]);

  return activeSection.replace('#', '');
};

export default useActiveSection;

