import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'James Carter',
      position: 'Software Architect',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Thompson',
      position: 'Head App Developer',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true
    },
    {
      name: 'Daniel Wilson',
      position: 'Back End Developer',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section className="section-padding bg-dark-primary">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl font-black text-white mb-12">Our Teams</h2>
          
          <div className="grid md:grid-cols-3 gap-12 animate-fadeInUp">
            {teamMembers.map((member, index) => (
              <div key={index} className={`text-center transition-all duration-300 hover:transform hover:scale-105 ${member.featured ? 'transform scale-110' : ''}`}>
                <div className={`relative mb-8 ${member.featured ? 'team-featured shadow-2xl' : 'shadow-xl'}`}>
                  {member.featured ? (
                    <div className="team-content">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-64 h-80 object-cover mx-auto rounded-2xl"
                      />
                    </div>
                  ) : (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-56 h-72 object-cover mx-auto rounded-2xl transition-all duration-300"
                    />
                  )}
                  {member.featured && (
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-orange text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                      Featured
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-black text-white mb-3">{member.name}</h3>
                <p className="text-orange-400 font-bold text-lg">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;