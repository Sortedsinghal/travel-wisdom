import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck } from 'lucide-react';

const trips = [
  {
    id: 1,
    title: 'Ultimate Japan Tour - Ends Tokyo',
    duration: '15 Days 14 Nights',
    price: 295092,
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    title: 'Wonders Of Japan - Ends Osaka',
    duration: '11 Day 10 Nights',
    price: 295092,
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    title: 'Central Japan - Best Of Tokyo & Kyoto',
    duration: '8 Days 7 Nights',
    price: 148024,
    imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    title: 'Amazing Central Japan Tour - Ends Tokyo',
    duration: '6 Days 5 Nights',
    price: 148024,
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop',
  },
  {
    id: 5,
    title: 'Unforgettable Japan Holiday - Ends Tokyo',
    duration: '9 Days 8 Nights',
    price: 176078,
    imageUrl: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=400&h=300&fit=crop',
  },
  {
    id: 6,
    title: 'Discover Best Of Japan',
    duration: '9 Days 8 Nights',
    price: 176078,
    imageUrl: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&h=300&fit=crop',
  },
  {
    id: 7,
    title: 'Ultimate Japan Holiday Tour',
    duration: '7 Days 6 Nights',
    price: 176078,
    imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=300&fit=crop',
  },
  {
    id: 8,
    title: 'Unforgettable Singapore & Malaysia Tour',
    duration: '10 Days 9 Nights',
    price: 89900,
    imageUrl: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=400&h=300&fit=crop',
  },
  {
    id: 9,
    title: 'Ultimate Singapore & Malaysia Experience',
    duration: '9 Days 8 Nights',
    price: 86000,
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  },
  {
    id: 10,
    title: 'Wonders Of Singapore Malaysia Tour',
    duration: '8 Days 7 Nights',
    price: 77000,
    imageUrl: 'https://images.unsplash.com/photo-1555217851-6141535bd771?w=400&h=300&fit=crop',
  },
  {
    id: 11,
    title: 'Joyful Treasures Of Singapore & Malaysia',
    duration: '7 Days 6 Nights',
    price: 71000,
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  },
  {
    id: 12,
    title: 'Discover Best Of Singapore & Malaysia',
    duration: '6 Days 5 Nights',
    price: 65400,
    imageUrl: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=400&h=300&fit=crop',
  },
  {
    id: 13,
    title: 'Timeless Georgia - Tbilisi Getaway',
    duration: '6 Days 5 Nights',
    customization: 'Customization Available',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
  },
  {
    id: 14,
    title: 'Explore Wonders Of Georgia',
    duration: '7 Days 6 Nights',
    customization: 'Customization Available',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
  },
  {
    id: 15,
    title: 'Discover Best Of Georgia',
    duration: '8 Days 7 Nights',
    customization: 'Customization Available',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
  },
  {
    id: 16,
    title: 'Romantic Bali Vacation - Couple Special',
    duration: '5 Days 4 Nights',
    customization: 'Customization Available',
    imageUrl: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop',
  },
  {
    id: 17,
    title: 'Joyful Treasures Of Bali',
    duration: '6 Days 5 Nights',
    customization: 'Customization Available',
    imageUrl: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=300&fit=crop',
  },
  {
    id: 18,
    title: 'Romantic Escape To Bali - Couple Special',
    duration: '7 Days 6 Nights',
    customization: 'Customization Available',
    imageUrl: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop',
  },
  {
    id: 19,
    title: 'Discover Best Of Bali',
    duration: '8 Days 7 Nights',
    customization: 'Customization Available',
    imageUrl: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=300&fit=crop',
  },
  {
    id: 20,
    title: 'Gems Of Bali - Relaxing Escape',
    duration: '10 Days 9 Nights',
    customization: 'Customization Available',
    imageUrl: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop',
  },
];

const InternationalTrips = () => {
  const [visibleCount, setVisibleCount] = useState(16);
  const [showFullText, setShowFullText] = useState(false);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const handleViewLess = () => {
    setVisibleCount(16);
  };

  const visibleTrips = trips.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              International Trips For You <span role="img" aria-label="sunglasses">😎</span>
            </h1>
          </div>

          {/* Trip cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleTrips.map((trip) => (
              <Card key={trip.id} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={trip.imageUrl} alt={trip.title} className="w-full h-48 object-cover rounded-t-md" />
                  <div className="absolute bottom-2 left-2 bg-yellow-300 text-black text-xs px-2 py-1 rounded">
                    {trip.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{trip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {trip.price ? (
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-lg">₹{trip.price.toLocaleString()} per person</span>
                    </div>
                  ) : (
                    <div className="mb-2">
                      <span className="text-gray-600">{trip.customization}</span>
                    </div>
                  )}
                  <div className="flex gap-2">
                    <button className="flex-1 border border-[#0B3A55] text-[#0B3A55] rounded px-3 py-1 hover:bg-[#0B3A55] hover:text-white transition-colors">
                      Trip Details
                    </button>
                    <button className="flex-1 bg-[#0B3A55] text-white rounded px-3 py-1 hover:bg-white hover:text-[#0B3A55] hover:border-black border transition-colors">
                      Send Query
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 flex justify-center gap-4">
            {visibleCount < trips.length && (
              <button
                onClick={handleViewMore}
                className="bg-[#0B3A55] text-white px-6 py-2 rounded hover:bg-white hover:text-[#0B3A55] hover:border-black border transition-colors"
              >
                View More
              </button>
            )}
            {visibleCount > 16 && (
              <button
                onClick={handleViewLess}
                className="bg-[#0B3A55] text-white px-6 py-2 rounded hover:bg-white hover:text-[#0B3A55] hover:border-black border transition-colors"
              >
                View Less
              </button>
            )}
          </div>

          {/* About International Trips Section */}
          <div className="mt-14 bg-gray-100 p-6 rounded-lg max-w-8xl mx-auto text-left">
            <h2 className="text-2xl font-bold mb-8">About International Trips</h2>
            <hr />
            {showFullText ? (
              <>
                <p className="mb-4">
                  Kickstart your ultimate global adventure with Travel Wisdom, your gateway for seamless international travel from Delhi. Our specially curated collection of tour packages will take you to the wonders of the world, each one catering to your taste and budget.
                </p>
                <p className="mb-4">
                  At Travel Wisdom, we understand that every traveler is different. That's why our customizable packages cater to diverse interests - from cultural immersions to adrenaline-pumping escapades. Whether you're dreaming of Europe's charming cobblestone streets or Asia's vibrant markets, we've got you covered.
                </p>
                <p className="mb-4">
                  Booking with Travel Wisdom means more than just a vacation; it's an experience crafted with care. Enjoy exclusive perks like special discounts, enticing deals, and our unwavering 24/7 support. Our user-friendly platform makes planning your dream getaway a breeze, allowing you to focus on the excitement of your upcoming journey.
                </p>
                <p className="mb-4">
                  From sun-soaked beaches to snow-capped mountains, our expertly curated packages showcase the best the world has to offer. Let us transform your travel aspirations into reality, creating memories that will last a lifetime.
                </p>
                <p className="mb-4">
                  Our user-friendly booking platform and dedicated support team make planning your getaway a breeze. With competitive pricing and exclusive deals, Travel Wisdom ensures you get the most value from your international adventure.
                </p>
                <p>
                  Don't let your wanderlust wait any longer. Dive into the Travel Wisdom experience and unlock a world of possibilities. Your perfect international tour package from Delhi is just a click away. Start your global adventure today with Travel Wisdom - where every journey begins with a dream and ends with unforgettable stories.
                </p>
                <button
                  onClick={() => setShowFullText(false)}
                  className="text-[#0B3A55] font-bold mt-4 hover:underline"
                >
                  View Less
                </button>
              </>
            ) : (
              <>
                <p className="mb-4">
                  Kickstart your ultimate global adventure with Travel Wisdom, your gateway for seamless international travel from Delhi. Our specially curated collection of tour packages will take you to the wonders of the world, each one catering to your taste and budget.
                </p>
                <p className="mb-4">
                  At Travel Wisdom, we understand that every traveler is different. That's why our customizable packages cater to diverse interests - from cultural immersions to adrenaline-pumping escapades. Whether you're dreaming of Europe's charming cobblestone streets or Asia's vibrant markets, we've got you covered....
                </p>
                <button
                  onClick={() => setShowFullText(true)}
                  className="text-[#0B3A55] font-bold mt-4 hover:underline"
                >
                  View More
                </button>
              </>
            )}
          </div>
          {/* Why Select To Travel With Us Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Why Select To Travel With Us? <span role="img" aria-label="party">🎉</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
              <div className="border-2 border-[#0B3A55] rounded-lg p-6 text-left shadow-md transform transition-transform hover:-translate-y-3 cursor-pointer">
                <div className="mb-4"><Bed className="w-12 h-10 text-[#0B3A55]" /></div>
                <h3 className="text-2xl font-bold text-[#0B3A55] mb-2">Handpicked Stays with Friendly Hosts</h3>
                <p className="text-1xl text-[#0B3A55]">All our accommodations are verified, pre-checked for quality and hygiene.</p>
              </div>
              <div className="border-2 border-[#0B3A55] rounded-lg p-6 text-left shadow-md transform transition-transform hover:-translate-y-3 cursor-pointer">
                <div className="mb-4"><Airplay className="w-12 h-10 text-[#0B3A55]" /></div>
                <h3 className="text-2xl font-bold text-[#0B3A55] mb-2">2500+ Trips Hosted PAN India & Abroad</h3>
                <p className="text-1xl text-[#0B3A55]">From group trips to custom tours exploring diverse landscapes, cultures & lots more.</p>
              </div>
              <div className="border-2 border-[#0B3A55] rounded-lg p-6 text-left shadow-md transform transition-transform hover:-translate-y-3 cursor-pointer">
                <div className="mb-4"><Mountain className="w-12 h-10 text-[#0B3A55]" /></div>
                <h3 className="text-2xl font-bold text-[#0B3A55] mb-2">Solo Travel Friendly Trips for All</h3>
                <p className="text-1xl text-[#0B3A55]">We provide absolutely safe and comfortable environment for solo travellers.</p>
              </div>
              <div className="border-2 border-[#0B3A55] rounded-lg p-6 text-left shadow-md transform transition-transform hover:-translate-y-3 cursor-pointer">
                <div className="mb-4"><Mountain className="w-12 h-10 text-[#0B3A55]" /></div>
                <h3 className="text-2xl font-bold text-[#0B3A55] mb-2">Trip Itineraries Curated with Love</h3>
                <p className="text-1xl text-[#0B3A55]">Trip plans handcrafted by destination experts for hassle-free travel experience.</p>
              </div>
              <div className="border-2 border-[#0B3A55] rounded-lg p-6 text-left shadow-md transform transition-transform hover:-translate-y-3 cursor-pointer">
                <div className="mb-4"><Users className="w-12 h-10 text-[#0B3A55]" /></div>
                <h3 className="text-2xl font-bold text-[#0B3A55] mb-2">8 Years of On-Ground Experience</h3>
                <p className="text-1xl text-[#0B3A55]">Being in Tourism industry for last 8 years, we put our heart in planning your trips.</p>
              </div>
              <div className="border-2 border-[#0B3A55] rounded-lg p-6 text-left shadow-md transform transition-transform hover:-translate-y-3 cursor-pointer">
                <div className="mb-4"><ThumbsUp className="w-12 h-10 text-[#0B3A55]" /></div>
                <h3 className="text-2xl font-bold text-[#0B3A55] mb-2">Rated 4.8 Stars on Google Reviews</h3>
                <p className="text-1xl text-[#0B3A55]">Our growth lies in the memorable travel experiences we provide to our travellers.</p>
              </div>
              <div className="border-2 border-[#0B3A55] rounded-lg p-6 text-left shadow-md transform transition-transform hover:-translate-y-3 cursor-pointer">
                <div className="mb-4"><CreditCard className="w-12 h-10 text-[#0B3A55]" /></div>
                <h3 className="text-2xl font-bold text-[#0B3A55] mb-2">Hassle-Free Booking Process</h3>
                <p className="text-1xl text-[#0B3A55]">Seamless booking process on all our trips with the help of our travel experts.</p>
              </div>
              <div className="border-2 border-[#0B3A55] rounded-lg p-6 text-left shadow-md transform transition-transform hover:-translate-y-3 cursor-pointer">
                <div className="mb-4"><Users className="w-12 h-10 text-[#0B3A55]" /></div>
                <h3 className="text-2xl font-bold text-[#0B3A55] mb-2">Filtering Like-Minded Travellers</h3>
                <p className="text-1xl text-[#0B3A55]">We make sure to bring only like-minded travellers on basis of age, gender, comfort etc.</p>
              </div>
              <div className="border-2 border-[#0B3A55] rounded-lg p-6 text-left shadow-md transform transition-transform hover:-translate-y-3 cursor-pointer">
                <div className="mb-4"><UserCheck className="w-12 h-10 text-[#0B3A55]" /></div>
                <h3 className="text-2xl font-bold text-[#0B3A55] mb-2">Experienced & Cool Trip Captains</h3>
                <p className="text-1xl text-[#0B3A55]">We appoint friendly trip leaders with strong leadership qualities & high spirit!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InternationalTrips;