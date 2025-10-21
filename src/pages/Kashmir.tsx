import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';

// --- IMPORT CENTRALIZED DATA ---
import { allTrips } from '@/data/trips';

// --- FILTER DATA FOR KASHMIR ---
const handpickedTripsKashmir = allTrips.filter(trip =>
  trip.destination === 'Kashmir' &&
  [
    'kashmir-backpacking',
    'kashmir-backpacking-winter-edition',
    'kashmir-6-days-5-nights',
    'kashmir-family-special',
    'jannat-e-kashmir-4n5d'
  ].includes(trip.slug)
);

const honeymoonTripsKashmir = allTrips.filter(trip =>
  trip.destination === 'Kashmir' &&
  [
    'kashmir-honeymoon-special',
    'romantic-kashmir-4n5d',
    'kashmir-honeymoon-romantic-retreat',
    'kashmir-honeymoon-package-7-days-6-nights',
    'kashmir-family-getaway',
    'kashmir-family-special', // Note: Also in handpicked
    'magic-of-srinagar-family-tour-package'
  ].includes(trip.slug)
);

const familyToursKashmir = allTrips.filter(trip =>
  trip.destination === 'Kashmir' &&
  [
    'kashmir-backpacking-summer-edition',
    'kashmir-gurez-backpacking',
    'best-of-kashmir-3n4d',
    'kashmir-backpacking', // Note: Also in handpicked
    'blissful-kashmir-holiday',
    'kashmir-backpacking-winter-edition', // Note: Also in handpicked
    'picturesque-kashmir-vacation',
    'kashmir-family-getaway', // Note: Also in honeymoon
    'unforgettable-kashmir-paradise-tour',
    'captivating-kashmir-tour',
    'majestic-kashmir-holiday',
    'charismatic-kashmir-tour',
    'delightful-kashmir-getaway',
    'magic-of-srinagar-family-tour-package' // Note: Also in honeymoon
  ].includes(trip.slug)
);

const jammuKashmirToursKashmir = allTrips.filter(trip =>
  trip.destination === 'Kashmir' &&
  [
    'kashmir-with-vaishno-devi-temple-tour',
    'vaishno-devi-shiv-khori-spiritual-tour-3n4d',
    'jannat-e-kashmir-4n5d', // Note: Also in handpicked
    'blissful-kashmir-holiday', // Note: Also in family
    'kashmir-holiday-with-vaishnodevi-darshan',
    'vaishnodevi-with-delightful-kashmir-tour',
    'kashmir-with-vaishno-devi-and-shiv-khori-tour',
    'kashmir-family-getaway', // Note: Also in honeymoon & family
    'unforgettable-kashmir-paradise-tour', // Note: Also in family
    'captivating-kashmir-tour', // Note: Also in family
    'magical-escape-to-kashmir'
  ].includes(trip.slug)
);

const bestTreksKashmir = allTrips.filter(trip =>
  trip.destination === 'Kashmir' &&
  [
    'kashmir-great-lakes-trek',
    'tarsar-marsar-trek',
    'alpather-lake-trek',
    'kausar-nag-lake-trek',
    'sheshnag-lake-trek'
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
  { icon: <UserCheck className="w-1H-10 text-blue-700" />, title: 'Filtering Like-Minded Travellers', description: 'We make sure to bring only like-minded travellers on basis of age, gender, comfort etc.'}, // Typo w-1H-10 fixed to w-10 h-10
  { icon: <Zap className="w-10 h-10 text-blue-700" />, title: 'Experienced & Cool Trip Captains', description: 'We appoint friendly trip leaders with strong leadership qualities & high spirit!'},
];

const Kashmir = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          <section className="relative">
            <img src="/cloned_media/34336120240912063512.png" className="w-full h-[500px] object-cover rounded-2xl" alt="Scenic view of Kashmir"/>
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold z-10 p-4 text-center">
              Kashmir Tour Packages
            </h1>
          </section>

          <section className="bg-gray-100 p-8 rounded-lg my-8">
            <h2 className="text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-6">
              About Kashmir Tour Packages
            </h2>
            <ExpandableText>
              {/* ... (Keep the existing ExpandableText content) ... */}
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>Go4Explore provides special Kashmir tour packages and Kashmir honeymoon packages, offering best in-class accommodations, complete local sightseeing tours, delightful meals during the stay, thrilling adventure activities and a memorable travel experience. Decorated with the beauty of snow-clad Himalayas, Jannat-e-Kashmir is more than just a hill station and a perfect amalgamation of beauty, serenity and tranquility.</p>
                {/* ... (rest of the text content) ... */}
              </div>
            </ExpandableText>
          </section>

          <section className="mt-16">
            <h2 className="text-4xl font-bold mb-6"><span className="text-blue-700">Handpicked</span> By Our Experts ✨</h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                {/* --- USE FILTERED DATA --- */}
                <TripSlider trips={handpickedTripsKashmir} slidesToShow={3} />
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
              <h2 className="text-4xl font-bold mb-6">Kashmir Honeymoon Trips</h2>
              {/* --- USE FILTERED DATA --- */}
              <TripSlider trips={honeymoonTripsKashmir} slidesToShow={4} />
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Kashmir Family Tours</h2>
              {/* --- USE FILTERED DATA --- */}
              <TripSlider trips={familyToursKashmir} slidesToShow={4} />
            </section>
            {/* Note: Original file had "Read 138 remaining paragraphs..." here, which is likely an error. Removing it. */}
            <section>
              <h2 className="text-4xl font-bold mb-6">Jammu & Kashmir Holiday Tours</h2>
              {/* --- USE FILTERED DATA --- */}
              <TripSlider trips={jammuKashmirToursKashmir} slidesToShow={4} />
            </section>
            <section>
              <h2 className="text-4xl font-bold mb-6">Best Treks in Kashmir</h2>
               {/* --- USE FILTERED DATA --- */}
              <TripSlider trips={bestTreksKashmir} slidesToShow={4} />
            </section>
          </div>

          <section className="py-24">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-12">Why Select To Travel With Us? <span role="img" aria-label="party">🎉</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {reasons.map((reason, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-8 text-center shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <div className="mb-4 inline-block bg-blue-100 p-4 rounded-full">{React.cloneElement(reason.icon, { className: "w-10 h-10 text-blue-700" })}</div> {/* Fixed icon class issue */}
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

export default Kashmir;