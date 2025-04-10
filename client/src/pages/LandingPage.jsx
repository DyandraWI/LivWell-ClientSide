import Navbar from './components/landing/Navbar';
import HeroSection from './components/landing/HeroSection';
import FeaturesSection from './components/landing/FeaturesSection';
import RecommendationSection from './components/landing/RecommendationSection';
import AboutSection from './components/landing/AboutSection';
import TestimonialsSection from './components/landing/TestimonialsSection';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RecommendationSection />
      <AboutSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
