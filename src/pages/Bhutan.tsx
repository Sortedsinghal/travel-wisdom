import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- IMPORT CENTRALIZED DATA ---
import { allTrips } from '@/data/trips';

// --- FILTER DATA FOR BHUTAN ---
const handpickedTripsBhutan = allTrips.filter(trip =>
  trip.destination === 'Bhutan' &&
  [
    'bhutan-backpacking-7d6n',
    'bhutan-backpacking-8d7n'
  ].includes(trip.slug)
);

const bhutanToursBhutan = allTrips.filter(trip =>
  trip.destination === 'Bhutan' &&
  [
    'wonders-of-bhutan',
    'discover-best-of-bhutan',
    'joyful-escape-to-bhutan',
    'unforgettable-bhutan-getaway'
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

const Bhutan = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          <section className="relative">
            {/* Updated Hero Image Path */}
            <img src="/cloned_media/25777920250619062452.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Bhutan"/>
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
              Bhutan Tour Packages
            </h1>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg my-8">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
              About Bhutan Tour Packages
            </h2>
            <ExpandableText>
              {/* ... (Keep the existing ExpandableText content) ... */}
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <h2>Explore Bhutan with Travel Wisdom</h2>
                <p>Looking for the perfect way to experience all that Bhutan has to offer? Look no further than Travel Wisdom! We've crafted meticulously planned <b>Bhutan Tour Packages</b> that cater to every type of traveler. Whether you're a culture enthusiast, nature lover, or adventure seeker, we've got you covered. Our expert local guides will take you off the beaten path, ensuring you don't miss any hidden gems. We handle all the details, so you can focus on creating unforgettable memories.</p>
                {/* ... (rest of the text content) ... */}
              </div>
            </ExpandableText>
          </section>

          <section className="mt-16">
            <h2 className="text-4xl font-bold mb-6"><span className="text-blue-700">Handpicked</span> By Our Experts ✨</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                {/* --- USE FILTERED DATA --- */}
                <TripSlider trips={handpickedTripsBhutan} slidesToShow={2} />
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
              <h2 className="text-4xl font-bold mb-6">Bhutan Tour Packages</h2>
              {/* --- USE FILTERED DATA --- */}
              <TripSlider trips={bhutanToursBhutan} slidesToShow={4} />
            </section>
            {/* The source code did not contain data for code3, code4, or code5, so those sections are omitted. */}
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

export default Bhutan;