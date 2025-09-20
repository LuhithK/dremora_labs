import React from 'react';

const Products = () => {
  const products = [
    {
      title: 'OneGlance',
      description: "OneGlance is a comprehensive business intelligence platform that provides real-time analytics and insights to help organizations make data-driven decisions.",
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      title: 'Future Planning Solution Gold Trust',
      description: "A sophisticated financial planning platform designed to help individuals and organizations plan their financial future with advanced analytics and forecasting.",
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      title: 'Smart Connected Tea Factory Solution',
      description: "An IoT-enabled solution for tea factories that connects machinery, monitors production processes, and optimizes operations through smart automation.",
      image: 'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=400',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-white mb-6">
            Key Products
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 animate-fadeInUp">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="h-48 bg-gray-100 flex items-center justify-center mb-6">
                <img 
                  src={product.logo} 
                  alt={product.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{product.title}</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-primary">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;