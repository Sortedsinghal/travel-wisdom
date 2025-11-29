import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllBlogs, getAllBlogsSync, Blog } from '@/utils/blogData';

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>(getAllBlogsSync());
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    getAllBlogs().then(data => {
      if (data.length > blogs.length) setBlogs(data);
    });
  }, []);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleViewLess = () => {
    setVisibleCount(6);
  };

  const visibleBlogs = blogs.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="bg-gray-50 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Travel Blogs & Guides <span role="img" aria-label="book">📖</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Discover travel tips, destination guides, and inspiring stories to help you plan your next adventure.
            </p>
          </div>

          {/* Blog cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {visibleBlogs.map((blog) => (
              <Link key={blog.id} to={`/blogs/${blog.slug}`}>
                <Card className="hover:shadow-lg transition-shadow flex flex-col h-full group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img 
                      src={blog.imageUrl} 
                      alt={blog.title} 
                      className="w-full h-40 md:h-48 object-cover rounded-t-md transition-transform duration-300 group-hover:scale-105" 
                    />
                    <div className="absolute top-2 left-2 bg-[#0B3A55] text-white text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded">
                      {blog.category}
                    </div>
                    <div className="absolute top-2 right-2 bg-white/90 text-gray-700 text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded">
                      {blog.readTime}
                    </div>
                  </div>
                  <CardHeader className="pb-2 px-3 md:px-6">
                    <CardTitle className="text-sm md:text-base font-semibold leading-tight h-10 md:h-12 overflow-hidden group-hover:text-[#0B3A55] transition-colors">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-2 flex-1 flex flex-col px-3 md:px-6">
                    <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4 line-clamp-3 flex-1">
                      {blog.excerpt}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs text-gray-500 border-t pt-2 md:pt-3 mt-auto gap-1 sm:gap-0">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {blog.date}
                      </span>
                      <span className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {blog.author}
                      </span>
                    </div>
                    <div className="mt-2 md:mt-3">
                      <div className="flex items-center text-[#0B3A55] text-xs md:text-sm font-medium group-hover:underline">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-6 md:mt-8 flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            {visibleCount < blogs.length && (
              <button
                onClick={handleViewMore}
                className="bg-[#0B3A55] text-white px-4 md:px-6 py-2 rounded hover:bg-white hover:text-[#0B3A55] hover:border-black border transition-colors text-sm md:text-base"
              >
                View More
              </button>
            )}
            {visibleCount > 6 && (
              <button
                onClick={handleViewLess}
                className="bg-[#0B3A55] text-white px-4 md:px-6 py-2 rounded hover:bg-white hover:text-[#0B3A55] hover:border-black border transition-colors text-sm md:text-base"
              >
                View Less
              </button>
            )}
          </div>


        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;