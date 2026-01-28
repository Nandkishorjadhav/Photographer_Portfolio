import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * Reusable Button component with multiple variants
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  type = 'button',
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-semibold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#d4af37] to-[#c4a037] text-[#0a0a0a] hover:shadow-xl hover:shadow-[#d4af37]/30 focus:ring-[#d4af37] shadow-lg shadow-[#d4af37]/20',
    secondary: 'bg-transparent border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:shadow-lg hover:shadow-[#d4af37]/20 focus:ring-[#d4af37]',
    ghost: 'bg-transparent text-white hover:bg-white/10 focus:ring-white backdrop-blur-sm'
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg font-bold'
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...props}
    >
      {/* Shimmer effect on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default Button;
