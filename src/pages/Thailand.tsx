import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- IMPORT CENTRALIZED DATA ---
import { allTrips } from '@/data/trips';

// --- FILTER DATA FOR THAILAND ---
const handpickedTripsThailand = allTrips.filter(trip =>
  trip.destination === 'Thailand' &&
  [
    'thailand-full-moon-party',
    'thailand-phuket-krabi-phi-phi-5n6d',
    'thailand-phuket-krabi-phi-phi-6n7d',
    'thailand-phuket-phi-phi-island-4n5d'
  ].includes(trip.slug)
);

const honeymoonTripsThailand = allTrips.filter(trip =>
  trip.destination === 'Thailand' &&
  [
    'majestic-thailand-flights-inclusive',
    'thailand-6d5n',
    'honeymoon-special-phuket-krabi',
    'honeymoon-special-phuket-krabi-5d4n',
    'phuket-krabi-5n6d',
    'phuket-krabi-honeymoon-trip'
  ].includes(trip.slug)
);

const familyToursThailand = allTrips.filter(trip =>
  trip.destination === 'Thailand' &&
  [
    'thailand-phuket-krabi-phi-phi-5n6d', // Note: Also in handpicked
    'bangkok-krabi-phuket-7n8d',
    'phuket-krabi-5n6d', // Note: Also in honeymoon
    'thailand-phuket-krabi-phi-phi-6n7d', // Note: Also in handpicked
    'thailand-bangkok-pattaya-4n5d',
    'thailand-phuket-phi-phi-island-4n5d' // Note: Also in handpicked
  ].includes(trip.slug)
);

const discoverToursThailand = allTrips.filter(trip =>
  trip.destination === 'Thailand' &&
  [
    'explore-wonders-of-thailand',
    'unforgettable-thailand-romantic-getaway',
    'thailand-bangkok-pattaya-4n5d', // Note: Also in family
    'bangkok-krabi-phuket-7n8d', // Note: Also in family
    'thailand-phuket-krabi-phi-phi-5n6d', // Note: Also in handpicked & family
    'thailand-phuket-krabi-phi-phi-6n7d', // Note: Also in handpicked & family
    'thailand-phuket-phi-phi-island-4n5d', // Note: Also in handpicked & family
    'phuket-krabi-5n6d', // Note: Also in honeymoon & family
    'thailand-explorer-bangkok-pattaya-krabi-phuket'
  ].includes(trip.slug)
);

const explorerToursThailand = allTrips.filter(trip =>
  trip.destination === 'Thailand' &&
  [
    'thailand-9d8n',
    'thailand-explorer-bangkok-pattaya-krabi-phuket', // Note: Also in discover
    'phuket-explorer-6n7d'
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

const Thailand = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          <section className="relative">
            {/* Updated Hero Image Path */}
            <img src="/cloned_media/10448920240125155607.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Thailand"/>
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
              Thailand Tour Packages
            </h1>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg my-8">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
              About Thailand Tour Packages
            </h2>
            <ExpandableText>
              {/* ... (Keep the existing ExpandableText content) ... */}
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <h2>Explore Thailand with Travel Wisdom</h2>
                <p>Searching for a perfect island nation to spend your holidays in? Why not plan a trip to Thailand, with one of the world’s most serene beaches and sparkling blue water bodies, it has jaw dropping sceneries to witness. It may become a headache to plan an international trip all by yourself, but Congratulations because you have landed on the right page, Travel Wisdom will make it all easy for you with its Thailand Tour packages.</p>
                {/* ... (rest of the text content) ... */}
              </div>
            </ExpandableText>
          </section>

          <section className="mt-16">
            <h2 className="text-4xl font-bold mb-6"><span className="text-blue-700">Handpicked</span> By Our Experts ✨</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                {/* --- USE FILTERED DATA --- */}
                <TripSlider trips={handpickedTripsThailand} slidesToShow={2} />
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
              <h2 className="text-4xl font-bold mb-6">Thailand Honeymoon Trips – Romantic Escape Awaits!</h2>
              {/* --- USE FILTERED DATA --- */}
              <TripSlider trips={honeymoonTripsThailand} slidesToShow={2} />
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Thailand Family Trips – Fun, Adventure & Memories!</h2>
              {/* --- USE FILTERED DATA --- */}
              <TripSlider trips={familyToursThailand} slidesToShow={2} />
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Discover Tours – Explore Bangkok & Phuket!</h2>
               {/* --- USE FILTERED DATA --- */}
              <TripSlider trips={discoverToursThailand} slidesToShow={2} />
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Thailand Explorer Edition Tours</h2>
               {/* --- USE FILTERED DATA --- */}
              <TripSlider trips={explorerToursThailand} slidesToShow={2} />
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Thailand;