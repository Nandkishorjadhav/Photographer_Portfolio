import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { scrollToElement } from '../../utils/helpers';
import './Hero.css';

/**
 * Hero Section with cinematic effect
 */
const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  
  const taglines = [
    'Visual Storyteller',
    'Moment Curator',
    'Light Chaser'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollClick = () => {
    scrollToElement('gallery');
  };

  return (
    <section 
      id="home" 
      className="hero"
    >
      {/* Background Image with Ken Burns effect */}
      <motion.div
        className="background"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80)',
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
      />

      {/* Dark Overlay */}
      <div className="overlay" />

      {/* Grain Overlay */}
      <div className="grain">
        <div className="grainPattern" style={{
          backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=)',
        }} />
      </div>

      {/* Content */}
      <div className="content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Main Title with staggered animation */}
          <motion.h1 
            className="title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span>
              {['स', 'ई', ' ', 'P', 'H', 'O', 'T', 'O', 'G', 'R', 'A', 'P', 'H', 'Y'].map((letter, index) => (
                <motion.span
                  key={index}
                  className="titleLetter"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Rotating Tagline */}
          <div className="taglineContainer">
            <motion.p
              key={currentTagline}
              className="tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {taglines[currentTagline]}
            </motion.p>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={handleScrollClick}
            className="ctaButton"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore My Work
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scrollIndicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { duration: 1, delay: 2 },
            y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <div className="scrollContent" onClick={handleScrollClick}>
            <svg 
              className="scrollIcon"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
