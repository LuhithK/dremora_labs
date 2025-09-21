import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Solutions from './components/Solutions';
import Partners from './components/Partners';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ServicesPage from './components/ServicesPage';
import SolutionsPage from './components/SolutionsPage';

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Products />
    <Solutions />
    <Partners />
    <Blog />
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;