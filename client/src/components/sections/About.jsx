import { motion } from 'framer-motion';
import './About.css';

/**
 * About Section - Personal connection with the photographer
 */
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="grid">
          {/* Image Column */}
          <motion.div
            className="imageColumn"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <div className="imageWrapper">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
                alt="Photographer portrait"
                className="image"
              />
              <div className="imageOverlay" />
              <div className="imageGlow" />
            </div>

            {/* Floating Stats */}
            <motion.div
              className="statsCard"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <div className="statsGrid">
                <div className="statItem">
                  <motion.p 
                    className="statNumber"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    500+
                  </motion.p>
                  <p className="statLabel">Projects</p>
                </div>
                <div className="statItem">
                  <motion.p 
                    className="statNumber"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    10+
                  </motion.p>
                  <p className="statLabel">Years</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="contentColumn"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.h2 
              className="title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              About Me
            </motion.h2>
            
            <div className="textContent">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Hello! I'm <span className="highlight">सई PHOTOGRAPHY</span>, 
                a passionate photographer based in Los Angeles with over a decade of experience 
                capturing life's most beautiful moments.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                My journey into photography began with a simple film camera and an insatiable 
                curiosity about how light shapes our world. Today, I specialize in wedding, 
                portrait, and commercial photography, bringing that same wonder to every shoot.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                What drives me is the privilege of preserving memories and telling stories 
                through imagery. Whether it's the intimate moments of a wedding day or the 
                bold vision of a fashion campaign, I approach each project with creativity, 
                professionalism, and heart.
              </motion.p>
            </div>

            {/* Pull Quote */}
            <motion.blockquote
              className="quote"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="quoteIcon">"</span>
              Photography is the art of frozen time... the ability to store emotion and 
              feelings within a frame.
              <span className="quoteIcon">"</span>
            </motion.blockquote>

            {/* Achievements */}
            <div className="achievements">
              <motion.div
                className="achievementCard"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(212, 175, 55, 0.2)" }}
              >
                <p className="achievementTitle">Featured In</p>
                <p className="achievementText">Vogue, Harper's Bazaar</p>
              </motion.div>
              <motion.div
                className="achievementCard"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(212, 175, 55, 0.2)" }}
              >
                <p className="achievementTitle">Awards</p>
                <p className="achievementText">WPPI, IPA Winner</p>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div 
              className="ctaSection"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.a
                href="#contact"
                className="ctaLink"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="ctaText">Let's Create Together</span>
                <svg className="ctaArrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
