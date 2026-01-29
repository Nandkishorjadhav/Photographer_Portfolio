import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './Card.css';

/**
 * Card component with hover effects and scoped styling
 */
const Card = ({ 
  children, 
  className = '', 
  hover = true,
  onClick,
  ...props 
}) => {
  const cardClasses = `card ${onClick ? 'clickable' : ''} ${className}`;
  
  const hoverAnimation = hover ? {
    transition: { 
      type: 'spring',
      stiffness: 300,
      damping: 20
    }
  } : {};

  return (
    <motion.div
      className={cardClasses}
      onClick={onClick}
      {...hoverAnimation}
      {...props}
    >
      {/* Gradient overlay */}
      <div className="gradientOverlay" />
      
      {/* Content */}
      <div className="cardContent">
        {children}
      </div>
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
