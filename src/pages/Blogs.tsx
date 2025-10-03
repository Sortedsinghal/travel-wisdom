import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

const Blogs = () => {
  const featuredPost = {
    id: 1,
    title: "Exploring the Hidden Gems of Himachal Pradesh",
    excerpt: "Discover the lesser-known trails and serene valleys that make Himachal Pradesh a backpacker's paradise. From ancient temples to pristine lakes, this comprehensive guide covers everything you need to know.",
    image: "/experience.png",
    author: "Rajesh Kumar",
    date: "December 15, 2024",
    category: "Destinations",
    readTime: "8 min read"
  };

  const blogPosts = [
    {
      id: 2,
      title: "A Complete Guide to Backpacking in Ladakh",
      excerpt: "Everything you need to know about planning your Ladakh backpacking trip, from permits to packing essentials.",
      image: "/travelers.png",
      author: "Priya Sharma",
      date: "December 12, 2024",
      category: "Backpacking",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Sustainable Tourism: How We're Making Travel Greener",
      excerpt: "Learn about our commitment to eco-friendly travel practices and how you can contribute to responsible tourism.",
      image: "/experience.png",
      author: "Amit Singh",
      date: "December 10, 2024",
      category: "Sustainability",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Top 10 Weekend Getaways from Delhi",
      excerpt: "Perfect short trips for urban dwellers looking to escape the city chaos and rejuvenate in nature.",
      image: "/destinations.png",
      author: "Travel Wisdom Team",
      date: "December 8, 2024",
      category: "Weekend Trips",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Cultural Immersion: Experiencing Local Festivals",
      excerpt: "How participating in local festivals can deepen your travel experience and create unforgettable memories.",
      image: "/experience.png",
      author: "Rajesh Kumar",
      date: "December 5, 2024",
      category: "Culture",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Solo Female Travel: Safety Tips and Best Practices",
      excerpt: "Essential safety guidelines and tips for women traveling solo in India and abroad.",
      image: "/travelers.png",
      author: "Priya Sharma",
      date: "December 3, 2024",
      category: "Travel Tips",
      readTime: "6 min read"
    },
    {
      id: 7,
      title: "The Magic of Spiti Valley: A Photographer's Paradise",
      excerpt: "Capturing the breathtaking landscapes and unique culture of Spiti through the lens of a travel photographer.",
      image: "/destinations.png",
      author: "Amit Singh",
      date: "December 1, 2024",
      category: "Photography",
      readTime: "5 min read"
    }
  ];

  const categories = [
    { name: "Destinations", count: 12 },
    { name: "Backpacking", count: 8 },
    { name: "Travel Tips", count: 15 },
    { name: "Culture", count: 6 },
    { name: "Sustainability", count: 4 },
    { name: "Weekend Trips", count: 9 },
    { name: "Photography", count: 5 }
  ];

  const recentPosts = [
    { title: "Monsoon Trekking in the Western Ghats", date: "Nov 28, 2024" },
    { title: "Homestays: Authentic Rural Experiences", date: "Nov 25, 2024" },
    { title: "Budget Travel Hacks for Long Trips", date: "Nov 22, 2024" },
    { title: "Wildlife Safaris in India", date: "Nov 20, 2024" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Travel Blogs
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Stories, tips, and insights from our travels around the world. Discover new destinations, learn travel hacks, and get inspired for your next adventure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Featured Post</h2>
                <Card className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-6">
                      <Badge className="mb-3">{featuredPost.category}</Badge>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">{featuredPost.title}</h3>
                      <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {featuredPost.date}
                        </div>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Recent Posts */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Recent Posts</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {blogPosts.map((post) => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <CardContent className="p-6">
                        <Badge className="mb-3">{post.category}</Badge>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">{post.title}</h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Read More <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search blogs..."
                      className="pl-10"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.name} className="flex justify-between items-center hover:bg-gray-50 p-2 rounded cursor-pointer">
                        <span className="text-gray-700">{category.name}</span>
                        <Badge variant="secondary">{category.count}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Recent Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPosts.map((post, index) => (
                      <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                        <h4 className="font-medium text-gray-900 mb-1 hover:text-blue-600 cursor-pointer">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card>
                <CardHeader>
                  <CardTitle>Stay Updated</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Subscribe to our newsletter for the latest travel tips and destination guides.
                  </p>
                  <Input placeholder="Your email" className="mb-3" />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
