import React from 'react';
// --- FIX: Reverting to original alias paths ---
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- IMPORT CENTRALIZED DATA (FIX: Reverting to original alias path) ---
import { allTrips } from '@/data/trips';

// --- FILTER DATA FOR KAZAKHSTAN ---
const handpickedTripsKazakhstan = allTrips.filter(trip =>
  trip.destination === 'Kazakhstan' &&
  [
    'kazakhstan-backpacking',
    'kazakhstan-5d4n',
    'kazakhstan-uzbekistan',
    'almaty-5d4n-kazakhstan'
  ].includes(trip.slug)
);

const leisureToursKazakhstan = allTrips.filter(trip =>
  trip.destination === 'Kazakhstan' &&
  [
    'almaty-5d4n-kazakhstan', // Note: Also in handpicked
    'kazakhstan-uzbekistan',   // Note: Also in handpicked
    'kazakhstan-5d4n'          // Note: Also in handpicked
  ].includes(trip.slug)
);

const reasons = [
  { icon: <Bed className="w-10 h-10 text-blue-700" />, title: 'Handpicked Stays with Friendly Hosts', description: 'All our accommodations are verified, pre-checked for quality and hygiene.'},
  { icon: <Airplay className="w-10 h-10 text-blue-700" />, title: '2500+ Trips Hosted PAN India & Abroad', description: 'From group trips to custom tours exploring diverse landscapes, cultures & lots more.'},
  { icon: <Mountain className="w-10 h-10 text-blue-700" />, title: 'Solo Travel Friendly Trips for All', description: 'We provide absolutely safe and comfortable environment for solo travellers.'},
  { icon: <Award className="w-10 h-10 text-blue-700" />, title: 'Trip Itineraries Curated with Love', description: 'Trip plans handcrafted by destination experts for hassle-free travel experience.'},
  { icon: <Users className="w-10 h-10 text-blue-700" />, title: '8 Years of On-Ground Experience', description: 'Being in Tourism industry for last 8 years, we put our heart in planning your trips.'},
  { icon: <ThumbsUp className="w-10 h-10 text-blue-700" />, title: 'Rated 4.8 Stars on Google Reviews', description: 'Our growth lies in the memorable travel experiences we provide to our travellers.'},
  { icon: <CreditCard className="w-10 h-10 text-blue-700" />, title: 'Hassle-Free Booking Process', description: 'Seamless booking process on all our trips with the help of our travel experts.'},
  { icon: <UserCheck className="w-10 h-10 text-blue-700" />, title: 'Filtering Like-Minded Travellers', description: 'We make sure to bring only like-minded travellers on basis of age, gender, comfort etc.'},
  { icon: <Zap className="w-10 h-10 text-blue-700" />, title: 'Experienced & Cool Trip Captains', description: 'We appoint friendly trip leaders with strong leadership qualities & high spirit!'},
];

const Kazakhstan = () => {
  return (
    <div className="bg-white">
      <Header />
      {/* --- WIDE LAYOUT CONTAINER (from Bali/Dubai) --- */}
      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-8">

        {/* --- REMOVED THE OLD max-w-screen-xl WRAPPER --- */}

        <section className="relative">
          {/* Updated Hero Image Path */}
          <img src="/cloned_media/24133320240919113959.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Kazakhstan"/>
          <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
            Kazakhstan Tour Packages
          </h1>
        </section>

        <section className="bg-gray-100 p-10 rounded-2xl my-10 shadow-sm">
          <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
            About Kazakhstan Tour Packages
          </h2>
          <ExpandableText>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <h2>Explore Kazakhstan with Travel Wisdom</h2>
              <p>Get on board on a flight to Kazakhstan with Travel Wisdom, the largest landlocked country in the world, decorated with gorgeous landscapes, vibrant cities and rich cultural heritage. Our Kazakhstan Tour Packages have so much to offer for a unique and unforgettable travel experience, exploring a Central Asian wonder that blends modernity with untouched natural beauty and rich history.</p>
              {/* ... (rest of the text content) ... */}
            </div>
          </ExpandableText>
        </section>

        <section className="mt-16">
          {/* Added px-6 to align heading with slider padding */}
          <h2 className="text-4xl font-bold mb-6 px-6"><span className="text-blue-700">Handpicked</span> By Our Experts ✨</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              {/* --- USE FILTERED DATA --- */}
              <TripSlider trips={handpickedTripsKazakhstan} slidesToShow={2} />
            </div>
            <aside className="lg:col-span-4">
              <div className="border bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-center mb-1">Let's plan your next trip</h3>
                <p className="text-center text-sm text-gray-600 mb-6">Make your move, fill out your details now!</p>
                <ContactForm />
              </div>
            </aside>
          </div>
        </section>

        <div className="space-y-20 mt-20">
          <section>
            {/* Added px-6 to align heading with slider padding */}
            <h2 className="text-4xl font-bold mb-6 px-6">Kazakhstan Leisure Tours</h2>
            {/* --- USE FILTERED DATA --- */}
            <TripSlider trips={leisureToursKazakhstan} slidesToShow={2} />
          </section>
        </div>

        <section className="py-12 sm:py-16 lg:py-24">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 px-2 sm:px-0">Why Select To Travel With Us? <span role="img" aria-label="party">🎉</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 sm:p-6 lg:p-8 text-center shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4 inline-block bg-blue-100 p-4 rounded-full">{reason.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B3A55] mb-2">{reason.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- REMOVED THE OLD CLOSING </div> --- */}
      </main>
      <Footer />
    </div>
  );
};

export default Kazakhstan;

