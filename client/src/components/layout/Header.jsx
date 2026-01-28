import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { scrollToElement } from '../../utils/helpers';

/**
 * Navigation Header with auto-hide on scroll
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    scrollToElement(id);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-2xl bg-[#0a0a0a]/95 border-b border-[#d4af37]/10 shadow-2xl shadow-black/50' 
          : 'bg-gradient-to-b from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-transparent backdrop-blur-md'
      }`}
      initial={{ y: 0 }}
      animate={{ 
        y: scrollDirection === 'down' && isScrolled ? -100 : 0 
      }}
      transition={{ duration: 0.3 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <motion.a
              href="#home"
              className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold bg-gradient-to-r from-[#d4af37] via-[#f4d677] to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(212,175,55,0.3)]"
              onClick={(e) => handleNavClick(e, '#home')}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              सई PHOTOGRAPHY
            </motion.a>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            <div className="flex items-center gap-8 xl:gap-12 px-8">
              {menuItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative text-gray-300 hover:text-[#d4af37] transition-all duration-300 text-sm xl:text-base font-semibold tracking-widest uppercase group whitespace-nowrap"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d4af37] to-[#c4a037] group-hover:w-full transition-all duration-300 shadow-sm shadow-[#d4af37]/50" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Section - CTA Button */}
          <div className="hidden lg:flex items-center">
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-6 xl:px-8 py-2.5 xl:py-3 bg-gradient-to-r from-[#d4af37] to-[#c4a037] text-[#0a0a0a] rounded-lg font-bold text-sm xl:text-base tracking-wide shadow-lg shadow-[#d4af37]/30 hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 border border-[#d4af37]/20 whitespace-nowrap"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Book Now
            </motion.a>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className={`block w-6 h-0.5 bg-white mb-1.5 transition-all ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <motion.span
              className={`block w-6 h-0.5 bg-white mb-1.5 transition-all ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <motion.span
              className={`block w-6 h-0.5 bg-white transition-all ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-6 space-y-2 bg-[#0a0a0a]/95 backdrop-blur-2xl rounded-b-2xl border-t border-[#d4af37]/10 shadow-2xl">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block text-gray-300 hover:text-[#d4af37] hover:bg-[#d4af37]/5 transition-all duration-300 py-3 px-6 rounded-lg font-semibold tracking-wider"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="block w-full text-center px-6 py-3.5 mt-4 mx-2 bg-gradient-to-r from-[#d4af37] to-[#c4a037] text-[#0a0a0a] rounded-lg font-bold shadow-lg shadow-[#d4af37]/30 hover:shadow-xl hover:shadow-[#d4af37]/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Now
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
