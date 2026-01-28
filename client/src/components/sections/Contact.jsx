import { useState } from 'react';
import { motion } from 'framer-motion';
import Input from '../common/Input';
import Button from '../common/Button';

/**
 * Contact Section with form
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    'Wedding Photography',
    'Portrait Session',
    'Commercial & Brand',
    'Editorial Fashion',
    'Event Coverage',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="section-padding bg-[#0a0a0a]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f4d677] to-[#d4af37] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]">
                Let's Create Something Extraordinary
              </span>
            </h2>
            
            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
              Available for commissions worldwide. Whether you're planning a wedding, need 
              professional portraits, or have a commercial project in mind, I'd love to hear from you.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <motion.div
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 border border-[#d4af37]/20 flex items-center justify-center mr-4 flex-shrink-0 group-hover:border-[#d4af37]/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#d4af37]/20">
                  <svg
                    className="w-6 h-6 text-[#d4af37]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Email</p>
                  <a
                    href="mailto:hello@yourname.com"
                    className="text-gray-400 hover:text-[#d4af37] transition-colors"
                  >
                    hello@yourname.com
                  </a>
                  <button
                    onClick={() => navigator.clipboard.writeText('hello@yourname.com')}
                    className="ml-2 text-xs text-[#d4af37] hover:text-[#c4a037]"
                  >
                    Copy
                  </button>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#d4af37]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Phone</p>
                  <a
                    href="tel:+11234567890"
                    className="text-gray-400 hover:text-[#d4af37] transition-colors"
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-[#d4af37]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Location</p>
                  <p className="text-gray-400">Based in Los Angeles, CA</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-white font-bold mb-4 text-lg">Follow Me</p>
              <div className="flex gap-3">
                {['Instagram', 'Facebook', 'Pinterest'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#d4af37]/20 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#d4af37] hover:to-[#c4a037] hover:text-[#0a0a0a] hover:border-[#d4af37] transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#d4af37]/30 font-bold text-lg"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social}
                  >
                    <span>{social[0]}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="backdrop-blur-xl bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 rounded-2xl p-6 sm:p-8 border border-white/5 shadow-2xl">
              {submitSuccess ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-10 h-10 text-green-500"
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
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-400">
                    Your message has been sent successfully. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Input
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    error={errors.name}
                  />

                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    error={errors.email}
                  />

                  <Input
                    label="Phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (123) 456-7890"
                  />

                  <div className="mb-4">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Type <span className="text-[#d4af37]">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 sm:py-3.5 bg-[#0a0a0a]/50 backdrop-blur-sm border ${
                        errors.service ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-[#d4af37]'
                      } rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 hover:border-white/20 shadow-sm focus:shadow-lg focus:shadow-[#d4af37]/10 cursor-pointer`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-500">{errors.service}</p>
                    )}
                  </div>

                  <Input
                    label="Event Date (if applicable)"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message <span className="text-[#d4af37]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className={`w-full px-4 py-3 sm:py-3.5 bg-[#0a0a0a]/50 backdrop-blur-sm border ${
                        errors.message ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-[#d4af37]'
                      } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all duration-300 hover:border-white/20 shadow-sm focus:shadow-lg focus:shadow-[#d4af37]/10 resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="large"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
