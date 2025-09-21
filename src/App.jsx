import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicesPage from './components/ServicesPage';
import SolutionsPage from './components/SolutionsPage';
import IndustriesPage from './components/IndustriesPage';
import PortfolioPage from './components/PortfolioPage';
import AboutPage from './components/AboutPage';
import CareersPage from './components/CareersPage';

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <Services />
    <About />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;