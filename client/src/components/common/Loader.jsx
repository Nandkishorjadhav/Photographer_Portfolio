import './Loader.css';

/**
 * Loader component for loading states
 */
const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner">
        <div className="spinnerRing"></div>
        <div className="spinnerBorder"></div>
      </div>
    </div>
  );
};

export default Loader;
