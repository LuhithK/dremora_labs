import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      date: 'AUG',
      day: '18',
      year: '2023',
      title: 'ARTIFICIAL INTELLIGENCE',
      subtitle: 'Software Development with Artificial Intelligence',
      description: 'Exploring how AI is revolutionizing software development processes and enhancing productivity across various industries.',
      author: 'INOVA',
      readMore: 'READ MORE'
    },
    {
      date: 'JUL',
      day: '15',
      year: '2023',
      title: 'ANALYTICS',
      subtitle: 'Smarter Software Testing with Analytics',
      description: 'Leveraging analytics to improve software testing methodologies and ensure better quality in software development lifecycle.',
      author: 'INOVA',
      readMore: 'READ MORE'
    },
    {
      date: 'JUN',
      day: '22',
      year: '2023',
      title: 'DEVOPS',
      subtitle: 'Getting Started with DevOps',
      description: 'A comprehensive guide to implementing DevOps practices in your development workflow for better collaboration and efficiency.',
      author: 'INOVA',
      readMore: 'READ MORE'
    }
  ];

  return (
    <section id="blog" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-5xl font-bold text-white mb-6">
            Latest Blog
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fadeInUp">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-blue-500 font-semibold text-sm">
                    {post.date} {post.year}
                  </div>
                  <div className="text-4xl font-bold text-blue-500">
                    {post.day}
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-blue-500 font-semibold text-sm mb-3 uppercase tracking-wider">
                    {post.title}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 leading-tight">
                    {post.subtitle}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6 text-base">
                    {post.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-blue-500 font-semibold text-sm">
                    {post.author}
                  </span>
                  <button className="text-blue-500 font-semibold hover:text-blue-400 transition-colors text-sm uppercase tracking-wider">
                    {post.readMore} →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;