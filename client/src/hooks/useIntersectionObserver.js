import { useEffect, useState } from 'react';

/**
 * Custom hook to observe element intersection with viewport
 * @param {Object} options - Intersection Observer options
 * @returns {Array} [ref, isIntersecting]
 */
export const useIntersectionObserver = (options = {}) => {
  const [ref, setRef] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      ...options
    });

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, isIntersecting];
};
