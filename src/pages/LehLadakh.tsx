import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- IMPORT CENTRALIZED DATA ---
import { allTrips } from '@/data/trips';

// --- FILTER DATA FOR LEH LADAKH ---
const handpickedTripsLeh = allTrips.filter(trip =>
  trip.destination === 'Leh Ladakh' &&
  [
    'manali-leh-backpacking-bike-trip',
    'leh-ladakh-backpacking-bike-trip',
    'leh-ladakh-with-turtuk',
    'manali-leh-srinagar'
  ].includes(trip.slug)
);

const delhiTripsLeh = allTrips.filter(trip => // Assuming 'Delhi Trips' implies starting point involving Delhi/Manali route
  trip.destination === 'Leh Ladakh' &&
  [
    'manali-leh-backpacking-bike-trip', // Starts Manali
    'manali-leh-srinagar',             // Starts Manali
    'all-girls-manali-leh-trip',       // Starts Manali
    'manali-leh-srinagar-backpacking-bike-trip', // Starts Manali
    'srinagar-leh-manali'              // Ends Manali
  ].includes(trip.slug)
);

const lehToLehTripsLeh = allTrips.filter(trip =>
  trip.destination === 'Leh Ladakh' &&
  [
    'leh-ladakh-backpacking-bike-trip', // Starts Leh
    'leh-ladakh-with-turtuk',             // Starts Leh
    'leh-ladakh-with-umlingla-hanle',     // Starts Leh
    'leh-ladakh-with-tso-moriri-turtuk',  // Starts Leh
    'all-girls-ladakh-trip-with-turtuk'   // Starts Leh
  ].includes(trip.slug)
);

const srinagarTripsLeh = allTrips.filter(trip => // Trips involving Srinagar route
  trip.destination === 'Leh Ladakh' &&
  [
    'manali-leh-srinagar',              // Ends Srinagar
    'srinagar-leh-manali',              // Starts Srinagar
    'manali-leh-srinagar-with-umlingla-hanle', // Ends Srinagar
    'srinagar-leh-manali-with-umlingla-hanle', // Starts Srinagar
    'manali-leh-srinagar-backpacking-bike-trip' // Ends Srinagar
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

const LehLadakh = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          <section className="relative">
            {/* Updated Hero Image Path */}
            <img src="/cloned_media/21836720250219134110.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Leh Ladakh"/>
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
              Leh Ladakh Tour Packages
            </h1>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg my-8">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
              About Leh Ladakh Tour Packages
            </h2>
            <ExpandableText>
              {/* ... (Keep the existing ExpandableText content) ... */}
               <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>It’s your time to hit the road for ‘The Land of High Passes’, decorated with majestic landscapes and deep pristine valleys, this destination will help you escape the monotony of city life! Here we, at Go4Explore, are offering incredible Leh Ladakh Tour Packages to explore one of the most stunning regions nestled in the Indian Himalayas.</p>
                {/* ... (rest of the text content) ... */}
              </div>
            </ExpandableText>
          </section>

          <section className="mt-16">
            <h2 className="text-4xl font-bold mb-6"><span className="text-blue-700">Handpicked</span> By Our Experts ✨</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                {/* --- USE FILTERED DATA --- */}
                <TripSlider trips={handpickedTripsLeh} slidesToShow={3} />
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
              <h2 className="text-4xl font-bold mb-6">Leh Ladakh Trips from Delhi</h2>
              {/* --- USE FILTERED DATA --- */}
              <TripSlider trips={delhiTripsLeh} slidesToShow={4} />
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Leh to Leh Trips</h2>
              {/* --- USE FILTERED DATA --- */}
              <TripSlider trips={lehToLehTripsLeh} slidesToShow={4} />
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Leh Ladakh Trips with Srinagar</h2>
              {/* --- USE FILTERED DATA --- */}
              <TripSlider trips={srinagarTripsLeh} slidesToShow={4} />
            </section>
            {/* The source code did not contain data for code5, so that section is omitted. */}
          </div>

          <section className="py-24">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-12">Why Select To Travel With Us? <span role="img" aria-label="party">🎉</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {reasons.map((reason, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-8 text-center shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <div className="mb-4 inline-block bg-blue-100 p-4 rounded-full">{reason.icon}</div>
                    <h3 className="text-xl font-bold text-[#0B3A55] mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
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

export default LehLadakh;