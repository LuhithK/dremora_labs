import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'Huawei', logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=120' },
    { name: 'AWS', logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=120' },
    { name: 'Microsoft', logo: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=120' },
    { name: 'Oracle', logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=120' },
    { name: 'WSO2', logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=120' },
    { name: 'OpenStack', logo: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=120' }
  ];

  const bottomPartners = [
    { name: 'Angular', logo: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=80' },
    { name: 'AWS', logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=80' },
    { name: 'Docker', logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=80' },
    { name: 'NET', logo: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=80' },
    { name: 'Kubernetes', logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=80' },
    { name: 'Firebase', logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=80' }
  ];

  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fadeInLeft">
            <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
              We Work<br />
              with the<br />
              Best<br />
              Partners
            </h2>
            <div className="w-24 h-1 bg-red-600 mb-8"></div>
          </div>

          {/* Right Content - Partner Logos */}
          <div className="animate-fadeInRight">
            <div className="grid grid-cols-2 gap-6 mb-8">
              {partners.map((partner, index) => (
                <div key={index} className="partner-logo h-24">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-auto h-12 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Partners Row */}
        <div className="flex flex-wrap justify-center gap-6 mt-20 animate-fadeInUp">
          {bottomPartners.map((partner, index) => (
            <div key={index} className="partner-logo h-16 w-28">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="w-auto h-8 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;