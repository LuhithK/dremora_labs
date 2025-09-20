import React from 'react';

const Products = () => {
  const products = [
    {
      title: 'OneGlance',
      description: "OneGlance is a comprehensive business intelligence platform that provides real-time analytics and insights to help organizations make data-driven decisions with advanced reporting capabilities.",
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Future Planning Solution Gold Trust',
      description: "A sophisticated financial planning platform designed to help individuals and organizations plan their financial future with advanced analytics, forecasting, and investment management tools.",
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200',
      bgColor: 'bg-yellow-50'
    },
    {
      title: 'Smart Connected Tea Factory Solution',
      description: "An IoT-enabled solution for tea factories that connects machinery, monitors production processes, and optimizes operations through smart automation and real-time monitoring systems.",
      logo: 'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=200',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl font-bold text-white mb-6">
            Key Products
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 animate-fadeInUp">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className={`h-64 ${product.bgColor} flex items-center justify-center mb-6`}>
                <img 
                  src={product.logo} 
                  alt={product.title}
                  className="w-32 h-32 object-contain rounded-lg"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{product.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{product.description}</p>
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