"use client";

import { useEffect } from 'react';

export function useScrollBehavior() {
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      // Check if an anchor was found and if it has a hash (e.g., "#contact")
      if (anchor && anchor.hash) {
        e.preventDefault();
        
        const element = document.querySelector(anchor.hash);
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