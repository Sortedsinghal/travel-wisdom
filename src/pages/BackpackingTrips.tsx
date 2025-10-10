import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck } from 'lucide-react';

const trips = [
  {
    id: 1,
    title: 'Rajasthan Explorer - Jaipur Udaipur',
    duration: '8 Days 7 Nights',
    price: 24000,
    originalPrice: 28000,
    discount: 4000,
    imageUrl: '/trip/rajasthan.png',
  },
  {
    id: 2,
    title: 'Meghalaya Backpacking With Kaziranga',
    duration: '7 Days 6 Nights',
    price: 25000,
    originalPrice: 27000,
    discount: 2000,
    imageUrl: '/trip/meghalaya.png',
  },
  {
    id: 3,
    title: 'Kerala Backpacking 4N5D',
    duration: '5 Days 4 Nights',
    price: 15000,
    originalPrice: 16500,
    discount: 1500,
    imageUrl: '/trip/kerala.png',
  },
  {
    id: 4,
    title: 'Adi Kailash & Om Parvat Yatra',
    duration: '7 Days 6 Nights',
    price: 29000,
    originalPrice: 29000,
    discount: 0,
    imageUrl: '/trip/adikailash.png',
  },
  {
    id: 5,
    title: 'Leh 6 Nights Trip',
    duration: '6 Days 5 Nights',
    price: 23000,
    originalPrice: 25000,
    discount: 2000,
    imageUrl: '/trip/lehladakh.png',
  },
  {
    id: 6,
    title: 'Spiti Valley 6 Nights',
    duration: '7 Days 6 Nights',
    price: 18000,
    originalPrice: 20000,
    discount: 2000,
    imageUrl: '/trip/winterspiti.png',
  },
  {
    id: 7,
    title: 'Himachal Backpacking - Manali Kasol',
    duration: '5 Days 4 Nights',
    price: 12500,
    originalPrice: 14000,
    discount: 1500,
    imageUrl: '/trip/himachal.png',
  },
  {
    id: 8,
    title: 'Bhutan Backpacking 7D6N',
    duration: '7 Days 6 Nights',
    price: 35000,
    originalPrice: 35000,
    discount: 0,
    imageUrl: '/trip/bhutan.png',
  },
  {
    id: 9,
    title: 'Srinagar Leh Manali With Umlingla',
    duration: '12 Days 11 Nights',
    price: 38000,
    originalPrice: 38000,
    discount: 0,
    imageUrl: '/trip/srinagar.png',
  },
  {
    id: 10,
    title: 'Manali Leh Srinagar With Umlingla',
    duration: '12 Days 11 Nights',
    price: 38000,
    originalPrice: 38000,
    discount: 0,
    imageUrl: '/trip/lehladakh.png',
  },
  {
    id: 11,
    title: 'SM Himachal Backpacking',
    duration: '5 Days 4 Nights',
    price: 17000,
    originalPrice: 17000,
    discount: 0,
    imageUrl: '/trip/himachal.png',
  },
  {
    id: 12,
    title: 'SM Manali Sissu Kasol',
    duration: '3 Nights 4 Days',
    price: 11000,
    originalPrice: 11000,
    discount: 0,
    imageUrl: '/trip/sissu.png',
  },
  {
    id: 13,
    title: 'Leh Ladakh With Umlingla & Hanle',
    duration: '8 Days 7 Nights',
    price: 31500,
    originalPrice: 31500,
    discount: 0,
    imageUrl: '/trip/lehladakh.png',
  },
  {
    id: 14,
    title: 'NY Kashmir Backpacking',
    duration: '6 Days 5 Nights',
    price: 25999,
    originalPrice: 25999,
    discount: 0,
    imageUrl: '/trip/kashmir.png',
  },
  {
    id: 15,
    title: 'NY Meghalaya Backpacking',
    duration: '6 Days 5 Nights',
    price: 30000,
    originalPrice: 32000,
    discount: 2000,
    imageUrl: '/trip/meghalaya.png',
  },
  {
    id: 16,
    title: 'NY Kasol Kheerganga Manali',
    duration: '4 Days 3 Nights',
    price: 13999,
    originalPrice: 13999,
    discount: 0,
    imageUrl: '/trip/kasol.png',
  },
  {
    id: 17,
    title: 'NY Uttarakhand Backpacking',
    duration: '5 Days 4 Nights',
    price: 17500,
    originalPrice: 20000,
    discount: 2500,
    imageUrl: '/trip/uttarakhand.png',
  },
  {
    id: 18,
    title: 'Uttarakhand Backpacking- Rishikesh',
    duration: '4 Nights 5 Days',
    price: 13500,
    originalPrice: 15000,
    discount: 1500,
    imageUrl: '/trip/uttarakhand.png',
  },
  {
    id: 19,
    title: 'Manali Sissu Kasol',
    duration: '3 Nights 4 Days',
    price: 8000,
    originalPrice: 10000,
    discount: 2000,
    imageUrl: '/trip/sissu.png',
  },
  {
    id: 20,
    title: 'Kashmir Backpacking',
    duration: '6 Days 5 Nights',
    price: 22999,
    originalPrice: 22999,
    discount: 0,
    imageUrl: '/trip/kashmir.png',
  },
  {
    id: 21,
    title: 'NY Uttarakhand Backpacking',
    duration: '5 Days 4 Nights',
    price: 17500,
    originalPrice: 20000,
    discount: 2500,
    imageUrl: '/trip/uttarakhand.png',
  },
  {
    id: 22,
    title: 'Uttarakhand Backpacking- Rishikesh',
    duration: '4 Nights 5 Days',
    price: 13500,
    originalPrice: 15000,
    discount: 1500,
    imageUrl: '/trip/uttarakhand.png',
  },
  {
    id: 23,
    title: 'Manali Sissu Kasol',
    duration: '3 Nights 4 Days',
    price: 8000,
    originalPrice: 10000,
    discount: 2000,
    imageUrl: '/trip/sissu.png',
  },
  {
    id: 24,
    title: 'Kashmir Backpacking',
    duration: '6 Days 5 Nights',
    price: 22999,
    originalPrice: 22999,
    discount: 0,
    imageUrl: '/trip/kashmir.png',
  },
];

const BackpackingTrips = () => {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Backpacking Trips for You 🤩</h1>
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
            {visibleCount >= trips.length && visibleCount > 8 && (
              <button
                onClick={handleViewLess}
                className="bg-[#0B3A55] text-white px-6 py-2 rounded hover:bg-white hover:text-[#0B3A55] hover:border-black border transition-colors"
              >
                View Less
              </button>
            )}
          </div>

          {/* About Backpacking Trips Section */}
          <div className="mt-14 bg-gray-100 p-6 rounded-lg max-w-8xl mx-auto text-left">
            <h2 className="text-2xl font-bold mb-8">About Backpacking Trips</h2>
            <hr />
            {showFullText ? (
              <>
                <p className="mb-4">
                  Embark on an unforgettable adventure with Travel Wisdom's Backpacking Trips from Delhi! We've ditched the conventional tour packages and embraced the spirit of true exploration. Our handcrafted backpacking experiences are designed for the intrepid traveler who craves authenticity and spontaneity.
                </p>
                <p className="mb-4">
                  Forget cookie-cutter itineraries, Travel Wisdom tailors each trip to your wanderlust. Whether you're dreaming of trekking through misty mountains, immersing yourself in vibrant local cultures, or discovering hidden gems off the beaten path, we've got you covered. Our expert team of globetrotters has scouted the most exciting destinations, from the bustling streets of Southeast Asia to the rugged landscapes of South America.
                </p>
                <p className="mb-4">
                  What sets Travel Wisdom apart? We believe in responsible travel that benefits local communities and minimizes environmental impact. Our small group sizes ensure an intimate experience and the flexibility to veer off course when adventure calls. Plus, our network of local guides and fellow backpackers means you'll always have insider knowledge at your fingertips.
                </p>
                <p className="mb-4">
                  Don't worry about breaking the bank - our trips cater to various budgets without compromising on experiences. With Travel Wisdom, you're not just a tourist; you're a traveler, a storyteller, and a global citizen.
                </p>
                <p className="mb-4">
                  Our user-friendly booking platform and dedicated support team make planning your getaway a breeze. With competitive pricing and exclusive deals, Travel Wisdom ensures you get the most value from your backpacking adventure.
                </p>
                <p>
                  Ready to trade your comfort zone for the thrill of the unknown? Pack light, open your mind, and let Travel Wisdom guide you on a journey that will reshape your perspective of the world. Your next great adventure begins here - book your Backpacking Trip from Delhi today and Travel Wisdom!
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
                  Embark on an unforgettable adventure with Travel Wisdom's Backpacking Trips from Delhi! We've ditched the conventional tour packages and embraced the spirit of true exploration. Our handcrafted backpacking experiences are designed for the intrepid traveler who craves authenticity and spontaneity.
                </p>
                <p className="mb-4">
                  Forget cookie-cutter itineraries, Travel Wisdom tailors each trip to your wanderlust. Whether you're dreaming of trekking through misty mountains, immersing yourself in vibrant local cultures, or discovering hidden gems off the beaten path, we've got you covered....
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

export default BackpackingTrips;
