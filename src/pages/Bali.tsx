import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- IMPORT CENTRALIZED DATA ---
import { allTrips } from '@/data/trips';

// --- FILTER DATA FOR BALI ---
const handpickedTripsBali = allTrips.filter(trip =>
  trip.destination === 'Bali' &&
  [
    'bali-backpacking',
    'bali-singapore',
    'bali-ultimate-7-days',
    'bali-malaysia'
  ].includes(trip.slug)
);

const honeymoonTripsBali = allTrips.filter(trip =>
  trip.destination === 'Bali' &&
  [
    'romantic-escape-to-bali-couple-special',
    'romantic-bali-vacation-couple-special',
    'bali-with-nusa-penida-honeymoon-special',
    'bali-water-villa-stay',
    '6-days-tour-bali-with-balinese-spa',
    'bali-ultimate-7-days',
    'bali-malaysia'
  ].includes(trip.slug)
);

const holidayToursBali = allTrips.filter(trip =>
  trip.destination === 'Bali' &&
  [
    'discover-best-of-bali',
    'joyful-treasures-of-bali',
    'bali-backpacking-10d9n',
    'bali-backpacking',
    'bali-ultimate-7-days',
    'bali-malaysia',
    'bali-new-year-special',
    'adventure-bali-trip-package',
    'best-of-bali'
  ].includes(trip.slug)
);

const reasons = [
  { icon: <Bed className="w-10 h-10 text-blue-700" />, title: 'Handpicked Stays with Friendly Hosts', description: 'All our accommodations are verified, pre-checked for quality and hygiene.' },
  { icon: <Airplay className="w-10 h-10 text-blue-700" />, title: '2500+ Trips Hosted PAN India & Abroad', description: 'From group trips to custom tours exploring diverse landscapes, cultures & lots more.' },
  { icon: <Mountain className="w-10 h-10 text-blue-700" />, title: 'Solo Travel Friendly Trips for All', description: 'We provide absolutely safe and comfortable environment for solo travellers.' },
  { icon: <Award className="w-10 h-10 text-blue-700" />, title: 'Trip Itineraries Curated with Love', description: 'Trip plans handcrafted by destination experts for hassle-free travel experience.' },
  { icon: <Users className="w-10 h-10 text-blue-700" />, title: '8 Years of On-Ground Experience', description: 'Being in Tourism industry for last 8 years, we put our heart in planning your trips.' },
  { icon: <ThumbsUp className="w-10 h-10 text-blue-700" />, title: 'Rated 4.8 Stars on Google Reviews', description: 'Our growth lies in the memorable travel experiences we provide to our travellers.' },
  { icon: <CreditCard className="w-10 h-10 text-blue-700" />, title: 'Hassle-Free Booking Process', description: 'Seamless booking process on all our trips with the help of our travel experts.' },
  { icon: <UserCheck className="w-10 h-10 text-blue-700" />, title: 'Filtering Like-Minded Travellers', description: 'We make sure to bring only like-minded travellers on basis of age, gender, comfort etc.' },
  { icon: <Zap className="w-10 h-10 text-blue-700" />, title: 'Experienced & Cool Trip Captains', description: 'We appoint friendly trip leaders with strong leadership qualities & high spirit!' },
];

const Bali = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        {/* 🔹 Expanded Width */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-8">

          {/* HERO SECTION */}
          <section className="relative">
            <img
              src="/cloned_media/1441520240529120015.png"
              className="w-full h-[500px] object-cover rounded-2xl"
              alt="Scenic view of Bali"
            />
            <div className="absolute inset-0 bg-black/30 rounded-2xl" />
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
              Bali Tour Packages
            </h1>
          </section>

          {/* ABOUT SECTION */}
          <section className="bg-gray-100 p-10 rounded-2xl my-10 shadow-sm">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
              About Bali Tour Packages
            </h2>
            <ExpandableText>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <h2>Explore Bali with Travel Wisdom</h2>
                <p>
                  Last two decades has seen increased tourism to an Indonesian Island that is a perfect blend of beaches, rocky coastlines, relaxing spas, crazy nightlife and a lot more activities to do.
                  Yes this paradise is none other than, your favourite, Bali. If your dream destination also looks like Bali then what are we even waiting for?
                  Book your seats right now with the Travel Wisdom Bali tour packages where you get to be a part of the most incredible journey to Bali.
                  With 7 years of experience Travel Wisdom has travel expertise in international trips like our Bali Tour packages offers travelers with handcrafted Bali packages
                  varying from Bali Adventure trips to Bali honeymoon trips.
                </p>
              </div>
            </ExpandableText>
          </section>

          {/* HANDPICKED SECTION */}
          <section className="mt-20">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-blue-700">Handpicked</span> By Our Experts ✨
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                <TripSlider trips={handpickedTripsBali} slidesToShow={2} />
              </div>
              <aside className="lg:col-span-4">
                <div className="border bg-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-semibold text-center mb-1">Let's plan your next trip</h3>
                  <p className="text-center text-sm text-gray-600 mb-6">
                    Make your move, fill out your details now!
                  </p>
                  <ContactForm />
                </div>
              </aside>
            </div>
          </section>

          {/* TRIP CATEGORIES */}
          <div className="space-y-20 mt-20">
            <section>
              <h2 className="text-4xl font-bold mb-6">Bali Honeymoon Trips</h2>
              <div className="hidden md:block">
                <TripSlider trips={honeymoonTripsBali} slidesToShow={4} />
              </div>
              <div className="md:hidden">
                <TripSlider trips={honeymoonTripsBali} slidesToShow={2} />
              </div>
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Bali Best Holiday Tours</h2>
              <div className="hidden md:block">
                <TripSlider trips={holidayToursBali} slidesToShow={4} />
              </div>
              <div className="md:hidden">
                <TripSlider trips={holidayToursBali} slidesToShow={2} />
              </div>
            </section>
          </div>

          {/* WHY US SECTION */}
          <section className="py-24">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-12">
                Why Select To Travel With Us? <span role="img" aria-label="party">🎉</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
                {reasons.map((reason, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="mb-4 inline-block bg-blue-100 p-4 rounded-full">
                      {reason.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#0B3A55] mb-2">
                      {reason.title}
                    </h3>
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

export default Bali;
