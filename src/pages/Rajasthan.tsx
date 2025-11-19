import React from 'react';
// --- FIX: Changed alias imports to relative paths ---
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import TripSlider from '../components/TripSlider';
import ExpandableText from '../components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- IMPORT CENTRALIZED DATA (FIX: Changed to relative path) ---
import { allTrips } from '../data/trips';

// --- FILTER DATA FOR RAJASTHAN ---
const handpickedTripsRajasthan = allTrips.filter(trip =>
  trip.destination === 'Rajasthan' &&
  [
    'rajasthan-explorer-jaipur-udaipur-jodhpur-jaisalmer',
    'udaipur-kumbhalgarh',
    'jaisalmer-and-longewala',
    'rajasthan-backpacking-udaipur-jodhpur-jaisalmer'
  ].includes(trip.slug)
);

const weekendTripsRajasthan = allTrips.filter(trip =>
  trip.destination === 'Rajasthan' &&
  [
    'udaipur-kumbhalgarh', // Note: Also in handpicked
    'jaisalmer-and-longewala', // Note: Also in handpicked
    'pushkar-holi-special',
    'udaipur-mount-abu-trip-from-delhi',
    'rajasthan-backpacking-udaipur-jodhpur-jaisalmer' // Note: Also in handpicked
  ].includes(trip.slug)
);

const udaipurToursRajasthan = allTrips.filter(trip =>
  trip.destination === 'Rajasthan' &&
  [
    'udaipur-kumbhalgarh', // Note: Also in handpicked & weekend
    'udaipur-mount-abu-trip-from-delhi', // Note: Also in weekend
    'udaipur'
  ].includes(trip.slug)
);

const familyToursRajasthan = allTrips.filter(trip =>
  trip.destination === 'Rajasthan' &&
  [
    'rajasthan-backpacking-udaipur-jodhpur-jaisalmer', // Note: Also in handpicked & weekend
    'jaisalmer-and-longewala', // Note: Also in handpicked & weekend
    'udaipur-kumbhalgarh', // Note: Also in handpicked, weekend & udaipur
    'udaipur-mount-abu-trip-from-delhi', // Note: Also in weekend & udaipur
    'rajasthan-backpacking-from-delhi-udaipur-jodhpur-jaisalmer'
  ].includes(trip.slug)
);

const backpackingTripsRajasthan = allTrips.filter(trip =>
  trip.destination === 'Rajasthan' &&
  [
    'rajasthan-explorer-jaipur-udaipur-jodhpur-jaisalmer', // Note: Also in handpicked
    'rajasthan-backpacking-udaipur-jodhpur-jaisalmer', // Note: Also in handpicked, weekend & family
    'rajasthan-backpacking-pushkar-udaipur-bikaner',
    'rajasthan-backpacking-from-delhi-udaipur-jodhpur-jaisalmer' // Note: Also in family
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

const Rajasthan = () => {
  return (
    <div className="bg-white">
      <Header />
      {/* --- WIDE LAYOUT CONTAINER (from Bali/Dubai) --- */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-8">

        {/* --- REMOVED THE OLD max-w-screen-xl WRAPPER --- */}

        <section className="relative">
          {/* Updated Hero Image Path */}
          <img src="/cloned_media/14997820240912094546.png" className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl sm:rounded-2xl" alt="Scenic view of Rajasthan"/>
          <div className="absolute inset-0 bg-black/30 rounded-xl sm:rounded-2xl"></div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-4xl lg:text-6xl font-bold z-10 p-2 sm:p-4 text-center">
            Rajasthan Tour Packages
          </h1>
        </section>

        <section className="bg-gray-100 p-4 sm:p-6 lg:p-10 rounded-xl sm:rounded-2xl my-6 sm:my-10 shadow-sm">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-4 sm:mb-6">
            About Rajasthan Tour Packages
          </h2>
          <ExpandableText>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
               <p>Discover the enchanting land of Rajasthan, where the grandeur of royal palaces, majestic forts and vibrant culture awaits you! Step into the world of opulence and tradition as you explore the pink-hued streets of Jaipur, romantic lakes of Udaipur, and golden sands of Jaisalmer. Experience the regal hospitality, indulge in mouth watering delicacies and witness the colorful festivals that bring this desert state to vibrant life. Book your Rajasthan Tour with Travel Wisdom today and journey through India’s most captivating and mesmerizing state, where every corner tells a story of its glorious past. Don’t miss the chance to explore the heart of royal India - reserve your adventure now!</p>
              {/* ... (rest of the text content) ... */}
            </div>
          </ExpandableText>
        </section>

        <section className="mt-8 sm:mt-12 lg:mt-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2 sm:px-0"><span className="text-blue-700">Handpicked</span> By Our Experts ✨</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-8">
              <TripSlider trips={handpickedTripsRajasthan} slidesToShow={2} />
            </div>
            <aside className="lg:col-span-4">
              <div className="border bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg lg:sticky lg:top-24">
                <h3 className="text-lg sm:text-xl font-semibold text-center mb-1">Let's plan your next trip</h3>
                <p className="text-center text-sm text-gray-600 mb-4 sm:mb-6">Make your move, fill out your details now!</p>
                <ContactForm />
              </div>
            </aside>
          </div>
        </section>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20 mt-12 sm:mt-16 lg:mt-20">
          <section>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">Rajasthan Weekend Trips</h2>
            <TripSlider trips={weekendTripsRajasthan} slidesToShow={4} />
          </section>
          <section>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">Udaipur Tour Packages</h2>
            <TripSlider trips={udaipurToursRajasthan} slidesToShow={4} />
          </section>
          <section>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">Rajasthan Family Tour Packages</h2>
            <TripSlider trips={familyToursRajasthan} slidesToShow={4} />
          </section>
          <section>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">Rajasthan Backpacking Trips</h2>
            <TripSlider trips={backpackingTripsRajasthan} slidesToShow={4} />
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

export default Rajasthan;

