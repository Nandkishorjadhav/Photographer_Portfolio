import PropTypes from 'prop-types';

/**
 * Input component for forms
 */
const Input = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder,
  required = false,
  error,
  className = '',
  ...props 
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">
          {label}
          {required && <span className="text-[#d4af37] ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full px-4 py-3 sm:py-3.5 bg-[#0a0a0a]/50 backdrop-blur-sm border ${
          error ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-[#d4af37]'
        } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 hover:border-white/20 shadow-sm focus:shadow-lg focus:shadow-[#d4af37]/10`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string
};

export default Input;
