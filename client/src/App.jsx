import { Suspense, lazy } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Loader from './components/common/Loader';

// Lazy load sections for better performance
const Gallery = lazy(() => import('./components/sections/Gallery'));
const About = lazy(() => import('./components/sections/About'));
const Services = lazy(() => import('./components/sections/Services'));
const Testimonials = lazy(() => import('./components/sections/Testimonials'));
const Contact = lazy(() => import('./components/sections/Contact'));

/**
 * Main App Component
 * Premium Photographer Portfolio Website
 */
function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      
      <main>
        {/* Hero Section - Always loaded */}
        <Hero />

        {/* Lazy loaded sections with suspense fallback */}
        <Suspense fallback={<Loader />}>
          <Gallery />
          <About />
          <Services />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;

