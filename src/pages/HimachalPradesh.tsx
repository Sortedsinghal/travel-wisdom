import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import TripSlider from '@/components/TripSlider';
import ExpandableText from '@/components/ExpandableText';
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck, Zap, Award } from 'lucide-react';
import { allTrips } from '@/data/trips';

// --- FILTERED TRIPS ---
const handpickedTripsHimachal = allTrips.filter(trip =>
  trip.destination === 'Himachal' &&
  [
    'himachal-backpacking-manali-kasol-jibhi',
    'manali-sissu-kasol',
    'manali-sissu-kasol-kheerganga',
    'manali-kasol-kheerganga',
    'mcleodganj-triund-bir',
    'himachal-backpacking-9d8n',
    'spiti-valley-circuit-trip',
    'winter-spiti',
    'sm-himachal-backpacking'
  ].includes(trip.slug)
);

const honeymoonTripsHimachal = allTrips.filter(trip =>
  trip.destination === 'Himachal' &&
  [
    'honeymoon-special-shimla-to-manali',
    'manali-honeymoon-trip-6-days-5-nights',
    'honeymoon-special-chandigarh-shimla-manali',
    'manali-jibhi-honeymoon-trip',
    'kasol-manali-jibhi-honeymoon-trip',
    'honeymoon-special-himachal-pardesh'
  ].includes(trip.slug)
);

const familyToursHimachal = allTrips.filter(trip =>
  trip.destination === 'Himachal' &&
  [
    'shimla-manali-5-days-4-nights',
    'shimla-manali-mcleod-dalhousie-amritsar',
    'shimla-manali-kasol-5-days-4-nights',
    'shimla-manali-dharamshala',
    'shimla-manali-dalhousie-8-days-7-nights',
    'shimla-manali-4-days-3-nights',
    'shimla-3-days-2-nights'
  ].includes(trip.slug)
);

const weekendTripsHimachal = allTrips.filter(trip =>
  trip.destination === 'Himachal' &&
  [
    'manali-sissu',
    'jibhi-tirthan-valley',
    'kasol-kheerganga-trek',
    'mcleodganj-triund-trek',
    'mcleodganj-bir'
  ].includes(trip.slug)
);

const bestTreksHimachal = allTrips.filter(trip =>
  trip.destination === 'Himachal' &&
  [
    'hampta-pass-trek',
    'bhrigu-lake-trek',
    'sar-pass-trek',
    'kareri-lake-trek',
    'kasol-grahan-trek',
    'prashar-lake-camping'
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

const HimachalPradesh = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-8">

          {/* --- HERO SECTION --- */}
          <section className="relative">
            <img src="/cloned_media/3465620240912110336.png" className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl sm:rounded-2xl" alt="Scenic view of Himachal Pradesh" />
            <div className="absolute inset-0 bg-black/30 rounded-xl sm:rounded-2xl"></div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-4xl lg:text-6xl font-bold z-10 p-2 sm:p-4 text-center">
              Himachal Pradesh Tour Packages
            </h1>
          </section>

          {/* --- ABOUT SECTION --- */}
          <section className="bg-gray-100 p-4 sm:p-6 lg:p-8 rounded-lg my-6 sm:my-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold border-b-2 border-gray-200 pb-3 mb-4 sm:mb-6">
              About Himachal Pradesh Tour Packages
            </h2>
            <ExpandableText>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>Just think about a place where you are surrounded by lush green forests, scenic views far away from the hustle bustle of the city, this is the majestic mountain land called Himachal Pradesh. So let's talk about our Himachal Pradesh tour Packages giving you an enriched experience of “Dev Bhoomi”- The Land of Gods. So if you are planning to visit the abode of god, then don't miss out, and add this tourist destination to your bucket list!</p>
              </div>
            </ExpandableText>
          </section>

          {/* --- HANDPICKED TRIPS --- */}
          <section className="mt-8 sm:mt-12 lg:mt-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">
              <span className="text-blue-700">Handpicked</span> By Our Experts ✨
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              <div className="lg:col-span-8">
                <TripSlider trips={handpickedTripsHimachal} slidesToShow={2} />
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

          {/* --- OTHER CATEGORIES --- */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20 mt-12 sm:mt-16 lg:mt-20">
            <section>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">Himachal Pradesh Honeymoon Trips</h2>
              <TripSlider trips={honeymoonTripsHimachal} slidesToShow={2} />
            </section>
            <section>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">Himachal Pradesh Family Tours</h2>
              <TripSlider trips={familyToursHimachal} slidesToShow={2} />
            </section>
            <section>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">Himachal Pradesh Weekend Trips</h2>
              <TripSlider trips={weekendTripsHimachal} slidesToShow={2} />
            </section>
            <section>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">Best Treks in Himachal Pradesh</h2>
              <TripSlider trips={bestTreksHimachal} slidesToShow={2} />
            </section>
          </div>

          {/* --- WHY TRAVEL WITH US --- */}
          <section className="py-12 sm:py-16 lg:py-24">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 px-2 sm:px-0">Why Select To Travel With Us? 🎉</h2>
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

export default HimachalPradesh;
