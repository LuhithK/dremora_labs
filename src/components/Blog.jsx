import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      date: 'AUG 2023',
      day: '18',
      title: 'ARTIFICIAL INTELLIGENCE',
      subtitle: 'Software Development with Artificial Intelligence',
      description: 'Exploring how AI is revolutionizing software development processes and enhancing productivity.',
      author: 'INOVA',
      readMore: 'READ MORE'
    },
    {
      date: 'JUL 2023',
      day: '15',
      title: 'ANALYTICS',
      subtitle: 'Smarter Software Testing with Analytics',
      description: 'Leveraging analytics to improve software testing methodologies and ensure better quality.',
      author: 'INOVA',
      readMore: 'READ MORE'
    },
    {
      date: 'JUN 2023',
      day: '22',
      title: 'DEVOPS',
      subtitle: 'Getting Started with DevOps',
      description: 'A comprehensive guide to implementing DevOps practices in your development workflow.',
      author: 'INOVA',
      readMore: 'READ MORE'
    }
  ];

  return (
    <section id="blog" className="section-padding bg-black">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-white mb-6">
            Latest Blog
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fadeInUp">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-red-600 font-semibold text-sm">
                    {post.date}
                  </div>
                  <div className="text-3xl font-bold text-red-600">
                    {post.day}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-red-600 font-semibold text-sm mb-2">
                    {post.title}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {post.subtitle}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {post.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-red-600 font-semibold text-sm">
                    {post.author}
                  </span>
                  <button className="text-red-600 font-semibold hover:text-red-500 transition-colors text-sm">
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