import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: '7 Must-Visit Hidden Gems in Himachal Pradesh',
    excerpt: 'Discover the most tranquil and offbeat locations in the Land of Gods, perfect for a peaceful solo trip or a family getaway.',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    category: 'Travel Tips',
    date: 'Dec 15, 2024',
    author: 'Travel Wisdom Team',
    readTime: '5 min read',
    slug: 'hidden-gems-himachal'
  },
  {
    id: 2,
    title: 'A Solo Traveler\'s Guide to Trekking in the Himalayas',
    excerpt: 'Everything you need to know before embarking on your first solo trek: gear, safety, and the best routes for beginners.',
    imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    category: 'Adventure',
    date: 'Dec 10, 2024',
    author: 'Travel Wisdom Team',
    readTime: '8 min read',
    slug: 'solo-trekking-guide'
  },
  {
    id: 3,
    title: 'Top 5 International Destinations for Backpackers in 2025',
    excerpt: 'Planning to travel abroad on a budget? Here are the top 5 must-see countries offering the best value for adventurous travelers.',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    category: 'International',
    date: 'Dec 5, 2024',
    author: 'Travel Wisdom Team',
    readTime: '6 min read',
    slug: 'top-5-international'
  },
  {
    id: 4,
    title: 'The Ultimate Guide to Spiti Valley Winter Expedition',
    excerpt: 'Tips, itinerary, and essential permits for tackling the harsh yet beautiful Spiti Valley in the winter season.',
    imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    category: 'Adventure',
    date: 'Nov 28, 2024',
    author: 'Travel Wisdom Team',
    readTime: '10 min read',
    slug: 'spiti-winter-guide'
  },
  {
    id: 5,
    title: 'Romantic Getaways: Kashmir vs. Kerala for Honeymoon Tours',
    excerpt: 'A detailed comparison to help you choose the perfect romantic destination in India for your unforgettable honeymoon.',
    imageUrl: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    category: 'Romance',
    date: 'Nov 20, 2024',
    author: 'Travel Wisdom Team',
    readTime: '7 min read',
    slug: 'kashmir-vs-kerala'
  },
  {
    id: 6,
    title: 'Best Practices for Corporate Team Building Retreats',
    excerpt: 'Maximize productivity and collaboration with these proven strategies for planning successful corporate travel.',
    imageUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    category: 'Corporate',
    date: 'Nov 15, 2024',
    author: 'Travel Wisdom Team',
    readTime: '6 min read',
    slug: 'corporate-retreats'
  },
  {
    id: 7,
    title: 'Budget Travel: How to Explore India Under ₹10,000',
    excerpt: 'Discover amazing destinations across India without breaking the bank. Complete guide to budget-friendly travel.',
    imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    category: 'Budget Travel',
    date: 'Nov 10, 2024',
    author: 'Travel Wisdom Team',
    readTime: '9 min read',
    slug: 'budget-travel-india'
  },
  {
    id: 8,
    title: 'Photography Tips for Your Next Mountain Trek',
    excerpt: 'Capture stunning landscapes and memories with these essential photography tips for mountain adventures.',
    imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    category: 'Photography',
    date: 'Nov 5, 2024',
    author: 'Travel Wisdom Team',
    readTime: '5 min read',
    slug: 'mountain-photography-tips'
  },
];

const Blogs = () => {
  const [visibleCount, setVisibleCount] = useState(6);

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
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Travel Blogs & Guides <span role="img" aria-label="book">📖</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover travel tips, destination guides, and inspiring stories to help you plan your next adventure.
            </p>
          </div>

          {/* Blog cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleBlogs.map((blog) => (
              <Link key={blog.id} to={`/blogs/${blog.slug}`}>
                <Card className="hover:shadow-lg transition-shadow flex flex-col h-full group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img 
                      src={blog.imageUrl} 
                      alt={blog.title} 
                      className="w-full h-48 object-cover rounded-t-md transition-transform duration-300 group-hover:scale-105" 
                    />
                    <div className="absolute top-2 left-2 bg-[#0B3A55] text-white text-xs px-2 py-1 rounded">
                      {blog.category}
                    </div>
                    <div className="absolute top-2 right-2 bg-white/90 text-gray-700 text-xs px-2 py-1 rounded">
                      {blog.readTime}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold leading-tight h-12 overflow-hidden group-hover:text-[#0B3A55] transition-colors">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-2 flex-1 flex flex-col">
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                      {blog.excerpt}
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-500 border-t pt-3 mt-auto">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {blog.date}
                      </span>
                      <span className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {blog.author}
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center text-[#0B3A55] text-sm font-medium group-hover:underline">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 flex justify-center gap-4">
            {visibleCount < blogs.length && (
              <button
                onClick={handleViewMore}
                className="bg-[#0B3A55] text-white px-6 py-2 rounded hover:bg-white hover:text-[#0B3A55] hover:border-black border transition-colors"
              >
                View More
              </button>
            )}
            {visibleCount > 6 && (
              <button
                onClick={handleViewLess}
                className="bg-[#0B3A55] text-white px-6 py-2 rounded hover:bg-white hover:text-[#0B3A55] hover:border-black border transition-colors"
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