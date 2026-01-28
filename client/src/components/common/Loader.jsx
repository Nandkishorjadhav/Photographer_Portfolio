/**
 * Loader component for loading states
 */
const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a]">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-[#d4af37]/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-[#d4af37] rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
