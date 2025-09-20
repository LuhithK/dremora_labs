import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Solutions from './components/Solutions';
import Partners from './components/Partners';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Products />
      <Solutions />
      <Partners />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;