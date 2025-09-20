import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'Huawei', logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'AWS', logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Microsoft', logo: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Oracle', logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'WSO2', logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'OpenStack', logo: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Xero', logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { name: 'Niftron', logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150' }
  ];

  const bottomPartners = [
    { name: 'Angular', logo: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'AWS', logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Docker', logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'NET', logo: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Kubernetes', logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Firebase', logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100' }
  ];

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fadeInLeft">
            <h2 className="text-4xl font-bold text-white mb-8">
              We Work<br />
              with the<br />
              Best<br />
              Partners
            </h2>
          </div>

          {/* Right Content - Partner Logos */}
          <div className="animate-fadeInRight">
            <div className="grid grid-cols-2 gap-4 mb-8">
              {partners.map((partner, index) => (
                <div key={index} className="partner-logo h-20">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-auto h-8 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Partners Row */}
        <div className="flex flex-wrap justify-center gap-6 mt-16 animate-fadeInUp">
          {bottomPartners.map((partner, index) => (
            <div key={index} className="partner-logo h-16 w-24">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="w-auto h-6 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;