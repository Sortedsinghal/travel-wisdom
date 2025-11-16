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

// --- FILTER DATA FOR SPITI ---
const handpickedTripsSpiti = allTrips.filter(trip =>
  (trip.destination === 'Spiti' || trip.destination === 'Himachal') && // Widen filter for Himachal
  [
    'winter-spiti',
    'spiti-valley-circuit-trip-with-manali',
    'spiti-valley-circuit-trip',
    'spiti-valley-manali-edition'
  ].includes(trip.slug)
);

const circuitTripsSpiti = allTrips.filter(trip =>
  (trip.destination === 'Spiti' || trip.destination === 'Himachal') && // Widen filter for Himachal
  [
    'winter-spiti',
    'spiti-valley-circuit-trip',
    'spiti-valley-circuit-trip-with-manali',
    'spiti-valley-circuit-trip-manali-to-shimla',
    'spiti-valley-circuit-trip-from-chandigarh'
  ].includes(trip.slug)
);

const chandigarhTripsSpiti = allTrips.filter(trip =>
  trip.destination === 'Spiti' &&
  [
    'spiti-valley-trip-from-chandigarh-manali-edition',
    'spiti-valley-circuit-trip-from-chandigarh', // Note: Also in circuit
    'spiti-valley-explorer-edition'
  ].includes(trip.slug)
);

const exploreTripsSpiti = allTrips.filter(trip =>
  trip.destination === 'Spiti' &&
  [
    'spiti-valley-biking-edition',
    'all-girls-spiti-valley-trip',
    'spiti-valley-jibhi-edition'
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

const Spiti = () => {
  return (
    <div className="bg-white">
      <Header />
      {/* --- WIDE LAYOUT CONTAINER (from Bali/Dubai) --- */}
      <main className="max-w-[1600px] mx-auto px-6 lg:px-12 py-8">

        {/* --- REMOVED THE OLD max-w-screen-xl WRAPPER --- */}

        <section className="relative">
          {/* Updated Hero Image Path */}
          <img src="/cloned_media/21811920241009114909.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Spiti Valley"/>
          <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
            Spiti Valley Tour Packages
          </h1>
        </section>

        <section className="bg-gray-100 p-10 rounded-2xl my-10 shadow-sm">
          <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
            About Spiti Valley Tour Packages
          </h2>
          <ExpandableText>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>Escape the urban madness and soak in the charm of the Himalayas with Travel Wisdom’s best-suited Spiti Valley Tour Packages to explore one of the most stunning regions nestled in the mighty Himalayas.</p>
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
              <TripSlider trips={handpickedTripsSpiti} slidesToShow={2} />
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
            <h2 className="text-4xl font-bold mb-6 px-6">Spiti Valley Circuit Trips</h2>
             {/* --- USE FILTERED DATA --- */}
            <TripSlider trips={circuitTripsSpiti} slidesToShow={2} />
          </section>
          <section>
            {/* Added px-6 to align heading with slider padding */}
            <h2 className="text-4xl font-bold mb-6 px-6">Spiti Valley Trips From Chandigarh</h2>
             {/* --- USE FILTERED DATA --- */}
            <TripSlider trips={chandigarhTripsSpiti} slidesToShow={2} />
          </section>
          <section>
            {/* Added px-6 to align heading with slider padding */}
            <h2 className="text-4xl font-bold mb-6 px-6">Let’s Explore Spiti Valley Packages</h2>
             {/* --- USE FILTERED DATA --- */}
            <TripSlider trips={exploreTripsSpiti} slidesToShow={2} />
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

export default Spiti;

