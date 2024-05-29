import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useActiveSection = (sectionIds) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.hash);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const newActiveSection = `#${entry.target.id}`;
          setActiveSection(newActiveSection);
          if (location.hash !== newActiveSection) {  
            navigate(newActiveSection, { replace: true });
          }
        }
      });
    }, { threshold: 0.5 });

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.unobserve(el);
    });
  }, [sectionIds, navigate, location.hash]);

  return activeSection.replace('#', '');
};

export default useActiveSection;

