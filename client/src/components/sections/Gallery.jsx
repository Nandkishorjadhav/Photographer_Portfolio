import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { galleryImages, categories } from '../../data/gallery';
import { staggerContainer, staggerItem } from '../../utils/animations';

/**
 * Image Grid component for the gallery
 */
const ImageGrid = ({ images, onImageClick }) => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          variants={staggerItem}
          className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
          onClick={() => onImageClick(index)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Image */}
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-white text-xl font-serif font-semibold mb-2">
                {image.title}
              </h3>
              <p className="text-gray-300 text-sm uppercase tracking-wider">
                {image.location}
              </p>
            </div>
          </div>

          {/* View Icon */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/90 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-[#0a0a0a]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

/**
 * Gallery section with filtering and lightbox
 */
const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Filter images based on selected category
  const filteredImages = useMemo(() => {
    if (selectedCategory === 'all') {
      return galleryImages;
    }
    return galleryImages.filter((img) => img.category === selectedCategory);
  }, [selectedCategory]);

  // Prepare slides for lightbox
  const slides = filteredImages.map((image) => ({
    src: image.src,
    alt: image.alt,
    title: image.title,
    description: `${image.location} • ${image.date}`
  }));

  const handleImageClick = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="section-padding bg-[#0a0a0a]">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient mb-4">
            Portfolio
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A curated collection of my finest work, capturing moments that tell compelling stories.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#d4af37] text-[#0a0a0a]'
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-70">({category.count})</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <ImageGrid images={filteredImages} onImageClick={handleImageClick} />
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-400 text-lg">No images found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
        }}
      />
    </section>
  );
};

export default Gallery;
