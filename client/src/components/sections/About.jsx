import { motion } from 'framer-motion';

/**
 * About Section - Personal connection with the photographer
 */
const About = () => {
  return (
    <section id="about" className="section-padding bg-[#121212]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
                alt="Photographer portrait"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -bottom-6 -right-6 glass-effect rounded-lg p-6 max-w-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-[#d4af37]">500+</p>
                  <p className="text-sm text-gray-400">Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#d4af37]">10+</p>
                  <p className="text-sm text-gray-400">Years</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gradient mb-6">
              About Me
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-base sm:text-lg">
                Hello! I'm <span className="text-white font-semibold">सई PHOTOGRAPHY</span>, 
                a passionate photographer based in Los Angeles with over a decade of experience 
                capturing life's most beautiful moments.
              </p>
              
              <p>
                My journey into photography began with a simple film camera and an insatiable 
                curiosity about how light shapes our world. Today, I specialize in wedding, 
                portrait, and commercial photography, bringing that same wonder to every shoot.
              </p>
              
              <p>
                What drives me is the privilege of preserving memories and telling stories 
                through imagery. Whether it's the intimate moments of a wedding day or the 
                bold vision of a fashion campaign, I approach each project with creativity, 
                professionalism, and heart.
              </p>
            </div>

            {/* Pull Quote */}
            <motion.blockquote
              className="border-l-4 border-[#d4af37] pl-6 my-8 italic text-xl text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              "Photography is the art of frozen time... the ability to store emotion and 
              feelings within a frame."
            </motion.blockquote>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <motion.div
                className="bg-white/5 rounded-lg p-4"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-[#d4af37] font-semibold mb-1">Featured In</p>
                <p className="text-sm text-gray-400">Vogue, Harper's Bazaar</p>
              </motion.div>
              <motion.div
                className="bg-white/5 rounded-lg p-4"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-[#d4af37] font-semibold mb-1">Awards</p>
                <p className="text-sm text-gray-400">WPPI, IPA Winner</p>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div className="mt-8">
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-[#d4af37] text-[#0a0a0a] font-semibold rounded-lg hover:bg-[#c4a037] transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Create Together
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
