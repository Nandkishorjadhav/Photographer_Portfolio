import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { scrollToElement } from '../../utils/helpers';
import './Header.css';

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

  const headerClasses = `header ${isScrolled ? 'headerScrolled' : 'headerDefault'}`;

  return (
    <motion.header
      className={headerClasses}
      initial={{ y: 0 }}
      animate={{ 
        y: scrollDirection === 'down' && isScrolled ? -100 : 0 
      }}
      transition={{ duration: 0.3 }}
    >
      <nav className="nav">
        <div className="navContainer">
          
          {/* Left Section - Logo */}
          <div className="logoSection">
            <motion.a
              href="#home"
              className="logo"
              onClick={(e) => handleNavClick(e, '#home')}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              सई PHOTOGRAPHY
            </motion.a>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="navLinks">
            <div className="navLinksList">
              {menuItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="navLink"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                  <span className="navLinkUnderline" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Section - CTA Button */}
          <div className="ctaSection">
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ctaButton"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Book Now
            </motion.a>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            className="menuButton"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className={`menuBar ${isMenuOpen ? 'menuBarTop' : ''}`}
            />
            <motion.span
              className={`menuBar ${isMenuOpen ? 'menuBarMiddle' : ''}`}
            />
            <motion.span
              className={`menuBar ${isMenuOpen ? 'menuBarBottom' : ''}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobileMenu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mobileMenuContent">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="mobileLink"
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
                  className="mobileCta"
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
