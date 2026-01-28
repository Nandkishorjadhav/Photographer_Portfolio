import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { scrollToElement } from '../../utils/helpers';

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
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Ken Burns effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80)',
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=)',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Main Title with staggered animation */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <span className="inline-block">
              {['स', 'ई', ' ', 'P', 'H', 'O', 'T', 'O', 'G', 'R', 'A', 'P', 'H', 'Y'].map((letter, index) => (
                <motion.span
                  key={index}
                  className="inline-block text-gradient"
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
          <div className="h-12 mb-8 overflow-hidden">
            <motion.p
              key={currentTagline}
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light tracking-wider"
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
            className="px-8 py-4 bg-[#d4af37] text-[#0a0a0a] font-semibold text-lg rounded-lg hover:bg-[#c4a037] transition-all duration-300"
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
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { duration: 1, delay: 2 },
            y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <div className="flex flex-col items-center cursor-pointer" onClick={handleScrollClick}>
            <span className="text-gray-400 text-sm mb-2 tracking-wider">Scroll to explore</span>
            <svg 
              className="w-6 h-6 text-[#d4af37]" 
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
