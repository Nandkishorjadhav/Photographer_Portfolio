/**
 * Debounce function to limit function execution rate
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function to limit function execution frequency
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Format date to readable string
 * @param {string} dateString - Date string to format
 * @returns {string} Formatted date
 */
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

/**
 * Scroll to element smoothly
 * @param {string} elementId - ID of element to scroll to
 */
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/**
 * Get optimized image URL with specified width
 * @param {string} url - Original image URL
 * @param {number} width - Desired width
 * @returns {string} Optimized image URL
 */
export const getOptimizedImageUrl = (url, width) => {
  // For Unsplash images, add width parameter
  if (url.includes('unsplash.com')) {
    return `${url}&w=${width}&q=80&fm=webp`;
  }
  return url;
};

/**
 * Generate responsive image srcset
 * @param {string} url - Original image URL
 * @returns {string} srcset string
 */
export const generateSrcSet = (url) => {
  const widths = [400, 800, 1200, 1920];
  return widths.map(width => `${getOptimizedImageUrl(url, width)} ${width}w`).join(', ');
};
