import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowLeft, Share2, Clock, Globe, BookOpen } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import { getBlogBySlug, getBlogBySlugSync, Blog } from '@/utils/blogData';

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | undefined>(getBlogBySlugSync(slug || ''));

  useEffect(() => {
    getBlogBySlug(slug || '').then(data => {
      if (data) setBlog(data);
    });
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blogs" className="text-[#0B3A55] hover:underline">← Back to Blogs</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const contentWithDropCap = (htmlContent: string) => {
    return htmlContent.replace(
      /^<p>/,
      '<p class="first-letter-enhanced">'
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <article className="bg-white">
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
          <img 
            src={blog.imageUrl} 
            alt={blog.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="container mx-auto max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="bg-[#0B3A55] text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-semibold shadow-lg">
                  {blog.category}
                </span>
                <span className="text-white text-xs sm:text-sm flex items-center">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  {blog.readTime}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4 leading-tight drop-shadow-2xl">
                {blog.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-white/90 text-xs sm:text-sm">
                <span className="flex items-center">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                  {blog.date}
                </span>
                <span className="flex items-center">
                  <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" />
                  {blog.author}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 sm:mb-8 flex flex-wrap gap-3 sm:gap-4">
              <Link 
                to="/blogs" 
                className="inline-flex items-center text-[#0B3A55] hover:text-blue-700 font-semibold text-sm sm:text-base transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blogs
              </Link>
            </div>
              
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 sm:p-8 rounded-2xl border-l-8 border-[#0B3A55] shadow-inner mb-10">
              <p className="text-xl sm:text-2xl text-gray-800 font-serif leading-snug italic">
                "{blog.excerpt}"
              </p>
            </div>

            <div 
              dangerouslySetInnerHTML={{ __html: contentWithDropCap(blog.content) }}
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-h1:font-extrabold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-gray-200 prose-h2:font-extrabold prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-gray-800 prose-h3:font-extrabold prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg prose-ul:my-6 prose-ul:space-y-2 prose-li:text-gray-700 prose-li:leading-relaxed prose-li:marker:text-[#0B3A55] prose-strong:text-gray-900 prose-strong:font-semibold prose-a:text-[#0B3A55] prose-a:no-underline hover:prose-a:underline [&>p:first-of-type]:text-xl [&>p:first-of-type]:leading-relaxed [&>p:first-of-type]:text-gray-800 [&>p:first-of-type]:first-letter:text-7xl [&>p:first-of-type]:first-letter:font-bold [&>p:first-of-type]:first-letter:text-[#0B3A55] [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:mr-3 [&>p:first-of-type]:first-letter:leading-none"
            />
          </div>

          <div className="mt-12 sm:mt-16 p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-[#0B3A55] to-blue-800 rounded-3xl shadow-2xl border-4 border-white">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-white rounded-full p-2 ring-4 ring-yellow-400 shadow-3xl">
                <img src="/src/assets/travel-wisdom-logo.png" alt="Travel Wisdom" className="w-full h-full object-contain rounded-full" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-extrabold text-xl sm:text-2xl lg:text-3xl text-white mb-2 flex items-center justify-center sm:justify-start">
                  <User className="w-6 h-6 mr-3 text-yellow-400" />
                  {blog.author}
                </h3>
                <p className="text-blue-100 text-base sm:text-lg lg:text-xl leading-relaxed">
                  ✨ The **Travel Wisdom Team** is a collective of seasoned explorers and local experts, dedicated to delivering meticulously researched guides, hidden gems, and practical tips for unforgettable journeys worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 bg-gradient-to-br from-gray-50 to-blue-50 p-6 sm:p-8 lg:p-10 rounded-3xl border border-gray-200 shadow-xl">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3A55] mb-8 text-center flex items-center justify-center">
              <BookOpen className="w-6 h-6 mr-3 text-yellow-500" />
              Related Articles You'll Love
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <Link to="/blogs/solo-trekking-guide" className="group block h-full">
                <div className="bg-white h-full rounded-xl shadow-lg overflow-hidden border border-gray-100 transform hover:scale-[1.02] transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                    alt="Solo Trekking Guide"
                    className="w-full h-40 object-cover object-center transition-opacity duration-300 group-hover:opacity-90"
                  />
                  <div className="p-5">
                    <h4 className="font-extrabold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      A Solo Traveler's Guide to Trekking in the Himalayas
                    </h4>
                    <p className="text-sm text-gray-600">
                      Everything you need to know before embarking on your first solo trek: gear, safety, and the best routes for beginners.
                    </p>
                    <span className="mt-3 inline-block text-sm font-semibold text-[#0B3A55] group-hover:underline">Read More →</span>
                  </div>
                </div>
              </Link>

              <Link to="/blogs/budget-travel-india" className="group block h-full">
                <div className="bg-white h-full rounded-xl shadow-lg overflow-hidden border border-gray-100 transform hover:scale-[1.02] transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                    alt="Budget Travel India"
                    className="w-full h-40 object-cover object-center transition-opacity duration-300 group-hover:opacity-90"
                  />
                  <div className="p-5">
                    <h4 className="font-extrabold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      Budget Travel: How to Explore India Under ₹10,000
                    </h4>
                    <p className="text-sm text-gray-600">
                      Discover amazing destinations across India without breaking the bank. Complete guide to budget-friendly travel.
                    </p>
                    <span className="mt-3 inline-block text-sm font-semibold text-[#0B3A55] group-hover:underline">Read More →</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetail;
