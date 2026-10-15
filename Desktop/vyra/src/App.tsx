import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CapabilitiesStrip from './components/CapabilitiesStrip';
import ServicesSection from './components/ServicesSection';
import SolutionsSection from './components/SolutionsSection';
import ApproachSection from './components/ApproachSection';
import WhyVyraSection from './components/WhyVyraSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <CapabilitiesStrip />
        <ServicesSection />
        <SolutionsSection />
        <ApproachSection />
        <WhyVyraSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
