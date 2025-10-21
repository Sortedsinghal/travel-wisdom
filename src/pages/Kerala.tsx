import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- IMPORT CENTRALIZED DATA ---
import { allTrips } from '@/data/trips';

// --- FILTER DATA FOR KERALA ---
const handpickedTripsKerala = allTrips.filter(trip =>
  trip.destination === 'Kerala' &&
  [
    'kerala-backpacking-4n5d',
    'weekend-escape-to-kerala-3d2n',
    'vibrant-kerala-retreat-4d3n',
    'mesmerizing-kerala-getaway-4n5d',
    'kerala-backpacking'
  ].includes(trip.slug)
);

const familyToursKerala = allTrips.filter(trip =>
  trip.destination === 'Kerala' &&
  [
    'vibrant-kerala-retreat-4d3n', // Note: Also in handpicked
    'mesmerizing-kerala-getaway-4n5d', // Note: Also in handpicked
    'blissful-kerala-tour-5n6d',
    'enchanting-expedition-of-kerala-6n7d',
    'kerala-backpacking' // Note: Also in handpicked
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

const Kerala = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          <section className="relative">
            {/* Updated Hero Image Path */}
            <img src="/cloned_media/4566720240912074442.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Kerala"/>
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
              Kerala Tour Packages
            </h1>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg my-8">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
              About Kerala Tour Packages
            </h2>
            <ExpandableText>
              {/* ... (Keep the existing ExpandableText content) ... */}
               <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <h2>Explore Kerala with Go4Explore</h2>
                <p>Are you curious about one of the top tourist attractions in Southern India? I think by now you have heard enough about the majestic beauty of Kerala and now it is time to visit and experience the scenery yourself. Go4Explore is here to help you out plan your trip to Kerala, the godly city and take you on an incredible journey of discovering the hidden gems of the state.</p>
                {/* ... (rest of the text content) ... */}
              </div>
            </ExpandableText>
          </section>

          <section className="mt-16">
            <h2 className="text-4xl font-bold mb-6"><span className="text-blue-700">Handpicked</span> By Our Experts ✨</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                {/* --- USE FILTERED DATA --- */}
                <TripSlider trips={handpickedTripsKerala} slidesToShow={3} />
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
            {/* Note: Source code only provided data for "Bestselling" (Handpicked) and "Family Tours". Other categories were empty. */}
            <section>
              <h2 className="text-4xl font-bold mb-6">Kerala Family Tours</h2>
               {/* --- USE FILTERED DATA --- */}
              <TripSlider trips={familyToursKerala} slidesToShow={4} />
            </section>
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

export default Kerala;