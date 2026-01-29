import { motion } from 'framer-motion';
import { services } from '../../data/services';
import Card from '../common/Card';
import './Services.css';

/**
 * Services Section - What the photographer offers with scoped styling
 */
const Services = () => {
  return (
    <section id="services" className="servicesSection">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="sectionHeader"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="sectionTitle">
            Services
          </h2>
          <p className="sectionDescription">
            Professional photography services tailored to bring your vision to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="servicesGrid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.25, 0.4, 0.25, 1]
              }}
            >
              <Card className="serviceCard" hover={true}>
                {/* Corner Accent */}
                <div className="cornerAccent" />
                
                {/* Icon */}
                <div className="serviceIcon">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="serviceTitle">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="serviceDescription">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="featuresList">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="featureItem">
                      <svg
                        className="checkIcon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="featureText">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="priceSection">
                  <p className="price">{service.price}</p>
                </div>

                {/* Hover CTA */}
                <div className="ctaWrapper">
                  <a
                    href="#contact"
                    className="ctaLink"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Learn More
                    <svg
                      className="ctaArrow"
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
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="bottomCta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="bottomCtaText">
            Don't see what you're looking for? Let's discuss your custom project.
          </p>
          <motion.a
            href="#contact"
            className="bottomCtaButton"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.97 }}
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
