import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const stats = [
    { number: '1+', label: 'National Software Development' },
    { number: '22+', label: 'Excellent Industry Experience' },
    { number: '2+', label: 'Years Of Experience In IT Industry' },
    { number: '16+', label: 'Customers Across The Globe' },
    { number: '1+', label: 'Years of Support From Our Engagement' }
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center py-20">
          {/* Main Heading */}
          <div className="animate-fadeInUp mb-8">
            <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              ROBUST IT
              <br />
              <span className="text-white">SOLUTIONS</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Engineering Prowess, Reliability, and AI to fuel Solutions
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full max-w-6xl mb-16 animate-fadeInUp">
            {stats.map((stat, index) => (
              <div key={index} className="stats-counter rounded-lg p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">{stat.number.split('+')[0]}</span>
                  </div>
                  <span className="text-red-600 text-2xl font-bold">+</span>
                </div>
                <p className="text-gray-300 text-sm leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Social Icons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col space-y-4">
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <span className="text-white text-sm">f</span>
          </div>
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <span className="text-white text-sm">t</span>
          </div>
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <span className="text-white text-sm">in</span>
          </div>
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <span className="text-white text-sm">@</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;