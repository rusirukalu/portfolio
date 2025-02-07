import { useEffect } from 'react';

export function useScrollBehavior() {
  useEffect(() => {
    const handleLinkClick = (e) => {
      // Check if it's an anchor link
      if (e.target.hash) {
        e.preventDefault();
        
        const element = document.querySelector(e.target.hash);
        if (element) {
          const offset = 80; // Adjust this value based on your navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);
}