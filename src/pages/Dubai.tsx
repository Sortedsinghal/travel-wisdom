import React from 'react';
// --- FIX: Reverting to original alias paths ---
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- IMPORT CENTRALIZED DATA ---
import { allTrips } from '@/data/trips';

// --- FILTER DATA FOR DUBAI ---
const handpickedTripsDubai = allTrips.filter(trip =>
  trip.destination === 'Dubai' &&
  [
    'dubai-6d5n-with-adventure-activities',
    'dubai-5d4n-with-ferrari-world',
    'dubai-6d5n'
  ].includes(trip.slug)
);

const familyToursDubai = allTrips.filter(trip =>
  trip.destination === 'Dubai' &&
  [
    'dubai-7d6n',
    'dubai-6d5n', // Note: Same slug appears in both handpicked and family
    'dubai-5d4n',
    'dubai-4d3n',
    'dubai-5d4n-with-ferrari-world' // Note: Same slug appears in both handpicked and family
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

const Dubai = () => {
  return (
    <div className="bg-white">
      <Header />
      {/* --- THIS IS THE ONLY CONTAINER YOU NEED --- */}
      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-8">
        
        {/* --- REMOVED THE EXTRA max-w-screen-xl div THAT WAS HERE --- */}

        <section className="relative">
          {/* Updated Hero Image Path */}
          <img src="/cloned_media/24358320240921120300.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Dubai"/>
          <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
            Dubai Tour Packages
          </h1>
        </section>

        {/* --- All sections below are now directly inside the 1600px container --- */}

        <section className="bg-gray-100 p-10 rounded-2xl my-10 shadow-sm">
          <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
            About Dubai Tour Packages
          </h2>
          <ExpandableText>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <h2>Explore Dubai with Travel Wisdom</h2>
              <p>We all travel to places with beaches and mountains but how often have we seen prime destinations that not only have beaches or valleys but are also examples of futuristic worlds? Fame of UAE, Dubai is not just a marvel of modern engineering and architecture but also a model for luxurious lifestyle.</p>
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
              <TripSlider trips={handpickedTripsDubai} slidesToShow={2} />
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
            <h2 className="text-4xl font-bold mb-6 px-6">Dubai Family Tours</h2>
            {/* --- USE FILTERED DATA --- */}
            <TripSlider trips={familyToursDubai} slidesToShow={4} />
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

        {/* --- REMOVED THE EXTRA CLOSING </div> --- */}
      </main>
      <Footer />
    </div>
  );
};

export default Dubai;

