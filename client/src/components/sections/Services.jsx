import { motion } from 'framer-motion';
import { services } from '../../data/services';
import Card from '../common/Card';

/**
 * Services Section - What the photographer offers
 */
const Services = () => {
  return (
    <section id="services" className="section-padding bg-[#0a0a0a]">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gradient mb-4">
            Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional photography services tailored to bring your vision to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="p-6 sm:p-8 h-full flex flex-col group relative overflow-hidden border-white/5 hover:border-[#d4af37]/30 transition-all duration-500 backdrop-blur-xl bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 hover:shadow-2xl hover:shadow-[#d4af37]/10">
                {/* Icon */}
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-semibold text-white mb-3 group-hover:text-[#d4af37] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed relative z-10">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6 relative z-10">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-300">
                      <svg
                        className="w-5 h-5 text-[#d4af37] mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="group-hover:text-white transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="pt-4 border-t border-white/5 group-hover:border-[#d4af37]/20 transition-colors duration-500 relative z-10">
                  <p className="text-[#d4af37] font-semibold">{service.price}</p>
                </div>

                {/* Hover CTA */}
                <motion.div
                  className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 10 }}
                  whileInView={{ y: 0 }}
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center text-[#d4af37] hover:text-[#c4a037] font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 mb-6 text-base sm:text-lg">
            Don't see what you're looking for? Let's discuss your custom project.
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#c4a037] text-[#0a0a0a] font-bold rounded-xl shadow-lg shadow-[#d4af37]/20 hover:shadow-2xl hover:shadow-[#d4af37]/40 transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get a Custom Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
