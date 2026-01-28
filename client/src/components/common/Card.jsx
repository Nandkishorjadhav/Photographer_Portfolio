import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * Card component with hover effects
 */
const Card = ({ 
  children, 
  className = '', 
  hover = true,
  onClick,
  ...props 
}) => {
  const baseStyles = 'bg-[#121212] rounded-lg overflow-hidden border border-white/10';
  
  const hoverAnimation = hover ? {
    whileHover: { 
      y: -8,
      boxShadow: '0 20px 40px rgba(212, 175, 55, 0.1)'
    },
    transition: { duration: 0.3 }
  } : {};

  return (
    <motion.div
      className={`${baseStyles} ${className} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      {...hoverAnimation}
      {...props}
    >
      {children}
    </motion.div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
  onClick: PropTypes.func
};

export default Card;
