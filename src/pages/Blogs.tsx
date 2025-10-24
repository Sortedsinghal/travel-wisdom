import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm'; // Assuming this component exists
import { Search, ChevronRight, Calendar, User } from 'lucide-react';

// --- DUMMY DATA FOR BLOG POSTS ---
const dummyBlogs = [
    {
        id: 1,
        title: '7 Must-Visit Hidden Gems in Himachal Pradesh',
        excerpt: 'Discover the most tranquil and offbeat locations in the ' +
                 'Land of Gods, perfect for a peaceful solo trip or a family getaway.',
        imageUrl: '/trip/himachal.png', 
        category: 'Himachal Trips',
        date: 'Oct 15, 2025',
        author: 'Jony Jindal',
        link: '/blogs/hidden-gems-himachal'
    },
    {
        id: 2,
        title: 'A Solo Traveler\'s Guide to Trekking in the Himalayas',
        excerpt: 'Everything you need to know before embarking on your first solo ' +
                 'trek: gear, safety, and the best routes for beginners.',
        imageUrl: '/trip/himalayas.jpg', 
        category: 'Trekking & Adventure',
        date: 'Sep 28, 2025',
        author: 'Priyanka Jindal',
        link: '/blogs/solo-trekking-guide'
    },
    {
        id: 3,
        title: 'Top 5 International Destinations for Backpackers in 2026',
        excerpt: 'Planning to travel abroad on a budget? Here are the top 5 ' +
                 'must-see countries offering the best value for adventurous travelers.',
        imageUrl: '/cloned_media/23958420231018151140.png', 
        category: 'International',
        date: 'Sep 10, 2025',
        author: 'Sahil Singh',
        link: '/blogs/top-5-international'
    },
    {
        id: 4,
        title: 'The Ultimate Guide to Spiti Valley Winter Expedition',
        excerpt: 'Tips, itinerary, and essential permits for tackling the harsh ' +
                 'yet beautiful Spiti Valley in the winter season.',
        imageUrl: '/trip/winterspiti.png', 
        category: 'Backpacking',
        date: 'Aug 20, 2025',
        author: 'Amit Aggarwal',
        link: '/blogs/spiti-winter-guide'
    },
    {
        id: 5,
        title: 'Romantic Getaways: Kashmir vs. Kerala for Honeymoon Tours',
        excerpt: 'A detailed comparison to help you choose the perfect romantic ' +
                 'destination in India for your unforgettable honeymoon.',
        imageUrl: '/trip/kerala.png', 
        category: 'Honeymoon Tours',
        date: 'Aug 05, 2025',
        author: 'Tanya Kochhar',
        link: '/blogs/kashmir-vs-kerala'
    },
    {
        id: 6,
        title: 'Best Practices for Corporate Team Building Retreats',
        excerpt: 'Maximize productivity and collaboration with these proven strategies for planning successful corporate travel.',
        imageUrl: '/trip/dodhamyatra.png', 
        category: 'Corporate Tours',
        date: 'Jul 22, 2025',
        author: 'Pankaj Verma',
        link: '/blogs/corporate-retreats'
    },
];

const categories = [
    'Himachal Trips', 'Trekking & Adventure', 'International',
    'Backpacking', 'Honeymoon Tours', 'Corporate Tours',
    'Weekend Trips', 'Custom Packages'
];

// --- Local Components for Blogs Page ---

const BlogHeader = () => {
    return (
        <div className="w-full h-80 bg-[#0B3A55] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-pattern-blogs opacity-10" style={{backgroundImage: 'url(/cloned_media/bg-pattern.png)'}}></div>
            <div className="z-10 text-center px-4">
                <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-3">Our Travel Blogs</h1>
                <p className="text-blue-200 text-lg">Tips, guides, and inspiration for your next adventure.</p>
            </div>
        </div>
    );
}

const BlogCard = ({ blog }) => (
    <a href={blog.link} className="block group border rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-white">
        <div className="relative">
            <img 
                src={blog.imageUrl} 
                alt={blog.title} 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute top-3 left-3 bg-[#0B3A55] text-white text-xs font-semibold px-3 py-1 rounded-full">{blog.category}</span>
        </div>
        <div className="p-5">
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0B3A55] transition-colors duration-200 line-clamp-2">{blog.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.excerpt}</p>
            <div className="flex justify-between text-xs text-gray-500 border-t pt-3">
                <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1 text-[#0B3A55]" />
                    {blog.date}
                </span>
                <span className="flex items-center">
                    <User className="w-3 h-3 mr-1 text-[#0B3A55]" />
                    {blog.author}
                </span>
            </div>
        </div>
    </a>
);

const BlogSidebar = ({ searchQuery, setSearchQuery }) => {
    return (
        <aside className="space-y-8 lg:sticky lg:top-24">
            {/* Search Bar */}
            <div className="bg-white p-6 rounded-xl shadow-lg border">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Search Blogs</h3>
                <div className="relative">
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search posts..." 
                        className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0B3A55] focus:border-[#0B3A55]"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
            </div>

            {/* Contact Form for Enquiry */}
            <div className="border bg-[#0B3A55] p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-semibold text-center mb-1 text-white">Let's plan your next trip</h3>
                <p className="text-center text-sm text-blue-100 mb-6">Make your move, fill out your details now!</p>
                {/* ContactForm is an assumed external component */}
                <ContactForm /> 
            </div>
        </aside>
    );
}

// --- MAIN BLOGS PAGE COMPONENT ---
const Blogs = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredBlogs = useMemo(() => {
        return dummyBlogs.filter(blog => {
            return searchQuery === '' || 
                blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                blog.author.toLowerCase().includes(searchQuery.toLowerCase());
        });
    }, [searchQuery]);

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <BlogHeader />
                
                <section className="container mx-auto px-4 py-12 md:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        
                        {/* Blog Post List (8 columns) */}
                        <div className="lg:col-span-8 space-y-8">
                            <div className="flex justify-between items-center border-b-2 pb-4 mb-4">
                                <h2 className="text-3xl font-bold text-gray-800">Latest Articles 📖</h2>
                                <span className="text-sm text-gray-500">
                                    {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''} found
                                </span>
                            </div>
                            {filteredBlogs.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {filteredBlogs.map(blog => (
                                        <BlogCard key={blog.id} blog={blog} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-gray-500 text-lg mb-4">No articles found matching your search.</p>
                                    <button 
                                        onClick={() => setSearchQuery('')}
                                        className="text-[#0B3A55] hover:underline font-medium"
                                    >
                                        Clear search
                                    </button>
                                </div>
                            )}
                            
                            {/* Simple Pagination Placeholder */}
                            <div className="flex justify-center pt-8">
                                
                            </div>
                        </div>

                        {/* Sidebar (4 columns) */}
                        <div className="lg:col-span-4">
                            <BlogSidebar 
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Blogs;