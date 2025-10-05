import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck } from 'lucide-react';

const trips = [
  {
    id: 1,
    month: 'October 2025',
    category: 'Short Duration Trips',
    title: 'Jibhi & Tirthan Valley',
    duration: '3 Days 2 Nights',
    price: 6500,
    originalPrice: 7500,
    discount: 1000,
    imageUrl: '/trip/jibhi.png',
    description: 'Experience the beauty of northern India with our group trips.',
  },
  {
    id: 2,
    month: 'October 2025',
    category: 'Short Duration Trips',
    title: 'Kasol Kheerganga Trek',
    duration: '3 Days 2 Nights',
    price: 6500,
    originalPrice: 7500,
    discount: 1000,
    imageUrl: 'trip//kasol.png',
    description: 'Relax and rejuvenate with coastal and backwater adventures.',
  },
  {
    id: 3,
    month: 'October 2025',
    category: 'Short Duration Trips',
    title: 'Chopta-Tungnath-Deoriatal',
    duration: '3 Days 2 Nights',
    price: 6000,
    originalPrice: 7000,
    discount: 1000,
    imageUrl: '/trip/chopta.png',
    description: 'Discover the royal heritage and mountain landscapes.',
  },
  {
    id: 4,
    month: 'October 2025',
    category: 'Short Duration Trips',
    title: 'Yulla Kanda Trek',
    duration: '3 Days 2 Nights',
    price: 8000,
    originalPrice: 8000,
    discount: 0,
    imageUrl: '/trip/yulla.png',
    description: 'A beautiful trek in the Himalayas.',
  },
  {
    id: 5,
    month: 'October 2025',
    category: 'Long Duration Trips',
    title: 'Kanatal & Tehri Lake',
    duration: '2 Days 1 Night',
    price: 5500,
    originalPrice: 5500,
    discount: 0,
    imageUrl: '/trip/kanatal.png',
    description: 'Scenic lake and mountain views.',
  },
  {
    id: 6,
    month: 'October 2025',
    category: 'Long Duration Trips',
    title: 'Winter Spiti',
    duration: '7 Days 6 Nights',
    price: 18000,
    originalPrice: 20000,
    discount: 2000,
    imageUrl: '/trip/winterspiti.png',
    description: 'High-altitude adventures in the trans-Himalayan region.',
  },
  {
    id: 7,
    month: 'October 2025',
    category: 'Long Duration Trips',
    title: 'Chakrata',
    duration: '2 Days 1 Night',
    price: 5500,
    originalPrice: 5500,
    discount: 0,
    imageUrl: '/trip/chakrata.png',
    description: 'Peaceful hill station getaway.',
  },
  {
    id: 8,
    month: 'October 2025',
    category: 'Long Duration Trips',
    title: 'Tungnath Kedarnath 5D4N',
    duration: '5 Days 4 Nights',
    price: 14000,
    originalPrice: 14000,
    discount: 0,
    imageUrl: '/trip/tungnath.png',
    description: 'Spiritual trek to famous temples.',
  },
  {
    id: 9,
    month: 'October 2025',
    category: 'Long Duration Trips',
    title: 'Kedarnath Dham',
    duration: '4 Days 3 Nights',
    price: 11000,
    originalPrice: 11000,
    discount: 0,
    imageUrl: '/trip/kedarnath.png',
    description: 'Pilgrimage to Kedarnath temple.',
  },
  {
    id: 10,
    month: 'October 2025',
    category: 'Long Duration Trips',
    title: 'Hampta Pass Trek',
    duration: '5 Days 4 Nights',
    price: 7000,
    originalPrice: 7000,
    discount: 0,
    imageUrl: '/trip/hampta.png',
    description: 'Challenging trek with stunning views.',
  },
  // Add more trips as needed...
];

const reasons = [
  {
    icon: <Bed className="w-12  h-10 text-[#0B3A55]" />,
    title: 'Handpicked Stays with Friendly Hosts',
    description: 'All our accommodations are verified, pre-checked for quality and hygiene.',
  },
  {
    icon: <Airplay className="w-12 h-10 text-[#0B3A55]" />,
    title: '2500+ Trips Hosted PAN India & Abroad',
    description: 'From group trips to custom tours exploring diverse landscapes, cultures & lots more.',
  },
  {
    icon: <Mountain className="w-12 h-10 text-[#0B3A55]" />,
    title: 'Solo Travel Friendly Trips for All',
    description: 'We provide absolutely safe and comfortable environment for solo travellers.',
  },
  {
    icon: <Mountain className="w-12 h-10 text-[#0B3A55]" />,
    title: 'Trip Itineraries Curated with Love',
    description: 'Trip plans handcrafted by destination experts for hassle-free travel experience.',
  },
  {
    icon: <Users className="w-12 h-10 text-[#0B3A55]" />,
    title: '8 Years of On-Ground Experience',
    description: 'Being in Tourism industry for last 8 years, we put our heart in planning your trips.',
  },
  {
    icon: <ThumbsUp className="w-12 h-10 text-[#0B3A55]" />,
    title: 'Rated 4.8 Stars on Google Reviews',
    description: 'Our growth lies in the memorable travel experiences we provide to our travellers.',
  },
  {
    icon: <CreditCard className="w-12 h-10 text-[#0B3A55]" />,
    title: 'Hassle-Free Booking Process',
    description: 'Seamless booking process on all our trips with the help of our travel experts.',
  },
  {
    icon: <Users className="w-12 h-10 text-[#0B3A55]" />,
    title: 'Filtering Like-Minded Travellers',
    description: 'We make sure to bring only like-minded travellers on basis of age, gender, comfort etc.',
  },
  {
    icon: <UserCheck className="w-12 h-10 text-[#0B3A55]" />,
    title: 'Experienced & Cool Trip Captains',
    description: 'We appoint friendly trip leaders with strong leadership qualities & high spirit!',
  },
];

const WeekendTrips = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [showFullText, setShowFullText] = useState(false);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const handleViewLess = () => {
    setVisibleCount((prev) => (prev - 8 >= 8 ? prev - 8 : 8));
  };

  const visibleTrips = trips.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Weekend Trips For You</h1>
          </div>

          {/* Trip cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleTrips.map((trip) => (
              <Card key={trip.id} className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={trip.imageUrl} alt={trip.title} className="w-full h-48 object-cover rounded-t-md" />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    Discount: ₹{trip.discount} Off
                  </div>
                  <div className="absolute bottom-2 left-2 bg-yellow-300 text-black text-xs px-2 py-1 rounded">
                    {trip.duration}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">{trip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="line-through text-gray-400">₹{trip.originalPrice}</span>
                    <span className="font-bold text-lg">₹{trip.price} per person</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 border border-[#0B3A55] text-[#0B3A55] rounded px-3 py-1 hover:bg-[#0B3A55] hover:text-white transition-colors">
                      Trip Details
                    </button>
                    <button className="flex-1 bg-[#0B3A55] text-white rounded px-3 py-1 hover:bg-[white] hover:text-[#0B3A55] hover:border-black border transition-colors">
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
            {visibleCount > 8 && (
              <button
                onClick={handleViewLess}
                className="bg-[#0B3A55] text-white px-6 py-2 rounded hover:bg-white hover:text-[#0B3A55] hover:border-black border transition-colors"
              >
                View Less
              </button>
            )}
          </div>

          {/* New section: About Weekend Trips */}
          <div className="mt-14 bg-gray-100 p-6 rounded-lg max-w-8xl mx-auto text-left">
            <h2 className="text-2xl font-bold mb-8">About Weekend Trips</h2>
            <hr />
            {showFullText ? (
              <>
                <p className="mb-4">
                  Escape the hustle of Delhi with Travel Wisdom's handpicked weekend getaways. Our curated trips offer the perfect blend of adventure, relaxation, and cultural immersion, all within easy reach of the capital.
                </p>
                <p className="mb-4">
                  Imagine waking up to the misty mountains of Shimla, exploring the winding streets of Jaipur's Pink City, or finding serenity in Rishikesh's spiritual atmosphere. Travel Wisdom makes these experiences more accessible with our thoughtfully designed weekend packages.
                </p>
                <p className="mb-4">
                  We understand that your time is precious, which is why our trips are meticulously planned to maximize your enjoyment. From seamless transportation to carefully selected accommodations, we've got every detail covered. Our local guides reveal hidden gems and insider perspectives, ensuring you experience the authentic essence of each destination.
                </p>
                <p className="mb-4">
                  Whether you're an adventure seeker, history buff, or simply in need of a peaceful retreat, Travel Wisdom has the perfect weekend escape for you. Trek through the lush forests of Jim Corbett, marvel at the Taj Mahal in Agra, or unwind in the tranquil surroundings of Lansdowne.
                </p>
                <p className="mb-4">
                  Our user-friendly booking platform and dedicated support team make planning your getaway a breeze. With competitive pricing and exclusive deals, Travel Wisdom ensures you get the most value from your weekend adventure.
                </p>
                <p>
                  Don't let your weekends slip away. Rediscover the joy of short trips and create lasting memories with Travel Wisdom. Your next unforgettable weekend getaway from Delhi is just a click away. Book now and let the exploration begin!
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
                  Escape the hustle of Delhi with Travel Wisdom's handpicked weekend getaways. Our curated trips offer the perfect blend of adventure, relaxation, and cultural immersion, all within easy reach of the capital.
                </p>
                <p className="mb-4">
                  Imagine waking up to the misty mountains of Shimla, exploring the winding streets of Jaipur's Pink City, or finding serenity in Rishikesh's spiritual atmosphere. Travel Wisdom makes these experiences more accessible with our thoughtfully designed weekend packages....
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

          {/* New section: Why Select To Travel With Us */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-8">
              Why Select To Travel With Us? <span role="img" aria-label="party">🎉</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto ">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="border-2 border-[#0B3A55] rounded-lg p-6 text-left shadow-md transform transition-transform hover:-translate-y-3 cursor-pointer"
                >
                  <div className="mb-4">{reason.icon}</div>
                  <h3 className="text-2xl font-bold text-[#0B3A55] mb-2">{reason.title}</h3>
                  <p className="text-1xl text-[#0B3A55]">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WeekendTrips;

