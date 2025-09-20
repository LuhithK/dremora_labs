import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MaintenanceSection from './components/MaintenanceSection';
import IndustriesSection from './components/IndustriesSection';
import WhyChooseUs from './components/WhyChooseUs';
import BuildingTools from './components/BuildingTools';
import CaseStudies from './components/CaseStudies';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-dark-primary">
      <Header />
      <Hero />
      <MaintenanceSection />
      <IndustriesSection />
      <WhyChooseUs />
      <BuildingTools />
      <CaseStudies />
      <Services />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;