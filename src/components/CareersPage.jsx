import React from 'react';

const CareersPage = () => {
  const interviewSteps = [
    {
      step: 'Step 1',
      title: 'Initial Screening and Assessment',
      description: 'Once we receive your CV, our recruitment team conducts initial screening to evaluate your suitability for the role. Selected candidates are contacted to confirm their availability and discuss expectations.'
    },
    {
      step: 'Step 2',
      title: 'Departmental Interviews',
      description: 'Candidates who pass the screening and assessment move forward to interviews with relevant department heads.'
    },
    {
      step: 'Step 3',
      title: 'Final Interview with the CEO & HR Discussion',
      description: 'Shortlisted candidates meet with our CEO, where the conversation centers around our company vision and values and your future role and potential impact at Dremora Labs.'
    },
    {
      step: 'Step 4',
      title: 'Offer and Onboarding',
      description: 'Once the offer is accepted, our onboarding process begins to ensure a smooth transition into your new role. You\'ll receive the necessary training, tools, and team introductions to help you hit the ground running at Dremora Labs.'
    }
  ];

  const availablePositions = [
    {
      title: 'Software Engineer - .NET',
      type: 'Full Time',
      status: 'Open',
      link: 'Apply Now →'
    },
    {
      title: 'Junior Technical Support Engineer',
      type: 'Full Time',
      status: 'Open',
      link: 'Apply Now →'
    }
  ];

  const quickLinks = [
    'About Us', 'Services', 'Solutions', 'Industries', 'Portfolio', 'Blog', 'Careers', 'Contact Us'
  ];

  const serviceLinks = [
    'Enterprise-Grade Solutions', 'Advanced Technical Solutions', 'IT Resource Augmentation', 
    'Enterprise Application Integration', 'IT Consultation', 'Software Quality Assurance'
  ];

  const recentBlog = [
    {
      title: 'X-Road Distributed Information Exchange Platform',
      date: 'AUG 2025',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=80'
    },
    {
      title: 'Smarter Software Testing with Heuristics',
      date: 'JUL 2025',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=80'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-black overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Careers Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[40vh] text-center py-20">
            <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
              Careers
            </h1>
          </div>
        </div>

        {/* Floating Social Icons */}
        <div className="floating-social">
          <div className="social-icon">f</div>
          <div className="social-icon">📷</div>
          <div className="social-icon">in</div>
          <div className="social-icon">📺</div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <div className="animate-fadeInLeft">
              <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
                Dremora Labs Careers: Empowering Talent, Inspiring Impact
              </h2>
              
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Our culture is powered by one simple value: treat people the way you want to be treated. This means we treat everyone with 
                fairness, openness, honesty, and respect from the moment you apply for a role at Dremora Labs.
              </p>

              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View Open Positions
              </button>
            </div>

            {/* Right Content - Image */}
            <div className="animate-fadeInRight">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Career Opportunities"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Interview Process Section */}
          <div className="mb-20">
            <div className="text-center mb-16 animate-fadeInUp">
              <h2 className="text-4xl font-bold text-white mb-8">
                Interview Process - What to Expect
              </h2>
              <p className="text-gray-400 text-lg max-w-4xl mx-auto">
                The interview process at Dremora Labs involves several conversations to discuss your qualifications, skills, and motivations. It's an opportunity for us to ensure you're a great fit for our company culture, and just as importantly, it allows you to evaluate if Dremora Labs aligns with your career aspirations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fadeInUp">
              {interviewSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.step}</h3>
                  <h4 className="text-lg font-medium text-gray-800 mb-4">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Available Positions Section */}
          <div className="animate-fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-8">
                Available Positions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {availablePositions.map((position, index) => (
                <div key={index} className="bg-white rounded-xl p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{position.title}</h3>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {position.type}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {position.status}
                    </span>
                  </div>
                  <button className="text-red-600 font-semibold hover:text-red-700 transition-colors">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    {position.link}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="container-custom py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-8 text-white">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-base">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Links */}
            <div>
              <h4 className="text-xl font-semibold mb-8 text-white">Service Links</h4>
              <ul className="space-y-4">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors text-base">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Blog */}
            <div>
              <h4 className="text-xl font-semibold mb-8 text-white">Recent Blog</h4>
              <div className="space-y-6 mb-10">
                {recentBlog.map((blog, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-12 h-12 rounded object-cover flex-shrink-0"
                    />
                    <div>
                      <h5 className="text-white font-medium mb-1 text-sm leading-tight">{blog.title}</h5>
                      <p className="text-blue-500 text-xs">{blog.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Us */}
            <div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-8">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-sm">in</div>
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-sm">f</div>
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-sm">📷</div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container-custom py-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
              <div className="mb-4 md:mb-0">
                <p className="text-base">Copyright ©2025 Dremora Labs. All rights reserved.</p>
              </div>
              
              <div className="flex items-center space-x-8">
                <a href="#" className="hover:text-blue-500 transition-colors text-base">Privacy & Quality Policy</a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg z-50"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </footer>
    </div>
  );
};

export default CareersPage;