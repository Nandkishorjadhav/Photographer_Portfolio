import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { galleryImages, categories } from '../../data/gallery';
import { staggerContainer, staggerItem } from '../../utils/animations';
import './Gallery.css';

/**
 * Image Grid component for the gallery
 */
const ImageGrid = ({ images, onImageClick }) => {
  return (
    <motion.div
      className="imageGrid"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          variants={staggerItem}
          className="imageItem"
          onClick={() => onImageClick(index)}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Image */}
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="image"
          />

          {/* Overlay */}
          <div className="imageOverlay">
            <div className="imageInfo">
              <h3 className="imageTitle">
                {image.title}
              </h3>
              <p className="imageLocation">
                {image.location}
              </p>
            </div>
          </div>

          {/* View Icon */}
          <div className="viewIcon">
            <div className="iconCircle">
              <svg
                className="icon"
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
    <section id="gallery" className="gallery">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="sectionHeader"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="title">
            Portfolio
          </h2>
          <p className="description">
            A curated collection of my finest work, capturing moments that tell compelling stories.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="filterTabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`filterButton ${
                selectedCategory === category.id
                  ? 'filterButtonActive'
                  : 'filterButtonInactive'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.name}
              <span className="filterCount">({category.count})</span>
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
            className="emptyState"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="emptyText">No images found in this category.</p>
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
