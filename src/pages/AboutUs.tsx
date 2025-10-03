import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Award, MapPin, Star } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Travel Wisdom
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Your trusted companion for extraordinary travel experiences. We believe that every journey tells a story, and we're here to help you create yours.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
              Our Story
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Founded in 2019, Travel Wisdom began with a simple vision: to make travel accessible, meaningful, and transformative for everyone. What started as a small group of passionate travelers has grown into a trusted name in adventure tourism.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our journey began when our founders, experienced backpackers themselves, realized the gap between commercial tours and authentic travel experiences. We set out to bridge that gap by offering carefully curated trips that combine adventure, culture, and personal growth.
                </p>
                <p className="text-lg text-gray-700">
                  Today, with over 56,000 satisfied travelers and 50+ destinations covered, we continue to uphold our commitment to responsible tourism and creating unforgettable memories.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/experience.png"
                  alt="Travel Wisdom Story"
                  className="rounded-lg shadow-lg w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Mission & Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-700 text-lg">
                    To empower travelers with authentic, sustainable, and enriching experiences that broaden horizons, foster connections, and create lasting memories while promoting responsible tourism practices.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Star className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-gray-700 text-lg">
                    To be the leading travel company that inspires millions to explore the world responsibly, connecting people with diverse cultures and breathtaking landscapes while contributing positively to local communities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-16 w-16 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Rajesh Kumar</h3>
                  <p className="text-blue-600 mb-3">Founder & CEO</p>
                  <p className="text-gray-600">
                    A passionate traveler with 15+ years of experience in the tourism industry, Rajesh leads our vision of making travel accessible to all.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Priya Sharma</h3>
                  <p className="text-green-600 mb-3">Head of Operations</p>
                  <p className="text-gray-600">
                    With expertise in logistics and customer experience, Priya ensures every trip runs smoothly and exceeds expectations.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-32 h-32 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-16 w-16 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Amit Singh</h3>
                  <p className="text-purple-600 mb-3">Travel Consultant</p>
                  <p className="text-gray-600">
                    Amit's deep knowledge of destinations and cultures helps craft personalized travel experiences for our clients.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our service, from trip planning to execution, ensuring the highest quality experiences.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to responsible tourism that respects local cultures, protects the environment, and benefits communities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-gray-600">
                  We believe in the power of travel to bring people together, fostering connections and understanding across cultures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
              Why Choose Travel Wisdom?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-left">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Expert local guides with deep destination knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Small group sizes for personalized experiences</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">24/7 support throughout your journey</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Sustainable tourism practices</span>
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Competitive pricing with no hidden costs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Flexible itineraries and customization options</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Safety and security as our top priority</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Memorable experiences that create lifelong memories</span>
                  </li>
                </ul>
              </div>
            </div>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
