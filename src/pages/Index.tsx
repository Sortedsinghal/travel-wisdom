import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TripCategories from "@/components/TripCategories";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import HowToPlanTrip from "@/components/HowToPlanTrip";
import CollaborationsSlider from '@/components/CollaborationsSlider';
import FeaturedTrips from "@/components/FeaturedTrips";
import { Bed, Airplay, Mountain, Users, ThumbsUp, CreditCard, UserCheck } from 'lucide-react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Data for the featured Himachal trips section
const himachalTrips = [
  { imageUrl: '/cloned_media/13464920240827063621.png', duration: '5 Days 4 Nights', title: 'Himachal Backpacking - Manali Kasol Jibhi', price: '₹12500', originalPrice: '₹14000', discount: '₹1,500' },
  { imageUrl: '/cloned_media/5274820240826124530.png', duration: '3 Nights 4 Days', title: 'Manali Sissu Kasol', price: '₹8000', originalPrice: '₹10000', discount: '₹2,000' },
  { imageUrl: '/cloned_media/22022520240827103638.png', duration: '5 Days 4 Nights', title: 'Manali Sissu Kasol Kheerganga', price: '₹12500', originalPrice: '₹14000', discount: '₹1,500' },
  { imageUrl: '/cloned_media/28089820240827101831.png', duration: '4 Days 3 Nights', title: 'Manali Kasol Kheerganga', price: '₹9999' },
];

const reasons = [
  { icon: <Bed className="w-12 h-10 text-[#0B3A55]" />, title: 'Handpicked Stays with Friendly Hosts', description: 'All our accommodations are verified, pre-checked for quality and hygiene.' },
  { icon: <Airplay className="w-12 h-10 text-[#0B3A55]" />, title: '2500+ Trips Hosted PAN India & Abroad', description: 'From group trips to custom tours exploring diverse landscapes, cultures & lots more.' },
  { icon: <Mountain className="w-12 h-10 text-[#0B3A55]" />, title: 'Solo Travel Friendly Trips for All', description: 'We provide absolutely safe and comfortable environment for solo travellers.' },
  { icon: <Mountain className="w-12 h-10 text-[#0B3A55]" />, title: 'Trip Itineraries Curated with Love', description: 'Trip plans handcrafted by destination experts for hassle-free travel experience.' },
  { icon: <Users className="w-12 h-10 text-[#0B3A55]" />, title: '8 Years of On-Ground Experience', description: 'Being in Tourism industry for last 8 years, we put our heart in planning your trips.' },
  { icon: <ThumbsUp className="w-12 h-10 text-[#0B3A55]" />, title: 'Rated 4.8 Stars on Google Reviews', description: 'Our growth lies in the memorable travel experiences we provide to our travellers.' },
  { icon: <CreditCard className="w-12 h-10 text-[#0B3A55]" />, title: 'Hassle-Free Booking Process', description: 'Seamless booking process on all our trips with the help of our travel experts.' },
  { icon: <Users className="w-12 h-10 text-[#0B3A55]" />, title: 'Filtering Like-Minded Travellers', description: 'We make sure to bring only like-minded travellers on basis of age, gender, comfort etc.' },
  { icon: <UserCheck className="w-12 h-10 text-[#0B3A55]" />, title: 'Experienced & Cool Trip Captains', description: 'We appoint friendly trip leaders with strong leadership qualities & high spirit!' },
];

const Index = () => {
  const [showFullText, setShowFullText] = React.useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TripCategories />

      <FeaturedTrips 
        title={<>Featured <span className="text-blue-700">Himachal</span> Trips</>}
        trips={himachalTrips}
        viewMoreLink="/himachal-pradesh"
      />

      <HowToPlanTrip />
      <CollaborationsSlider />
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">
              Why Select To Travel With Us? <span role="img" aria-label="party">🎉</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="border-2 border-[#0B3A55] rounded-lg p-6 text-left shadow-md transform transition-transform hover:-translate-y-3 cursor-pointer"
                >
                  <div className="mb-4">{reason.icon}</div>
                  <h3 className="text-2xl font-bold text-[#0B3A55] mb-2">{reason.title}</h3>
                  <p className="text-1xl text-[#0B3A55]">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        className="rounded-lg max-w-7xl mx-auto text-left mt-10 mb-10 p-6 flex flex-col md:flex-row items-center"
        style={{
          backgroundImage: "url('src/assets/blue-crumpled-bg.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0 px-6">
          <div className="inline-block mb-2">
            <img src="/customer-service.png" alt="Contact Icon" className="mx-auto w-20 h-20" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white">Have Doubts? Talk To Our Travel Experts!</h3>
          <p className="text-lg text-white">
            we would <span className="text-red-700">❤️</span> to craft a trip just for you.
          </p>
        </div>
        <div className="flex-1 w-full max-w-md px-6">
          <ContactForm />
        </div>
      </section>
      <section className="bg-gray-100 p-6 rounded-lg max-w-7xl mx-auto text-left mt-10 mb-10">
        <h2 className="text-2xl font-bold mb-6">Why Choose Us Travel Wisdom?</h2>
        <p className="mb-4">
          Travel Wisdom takes pride in curating meticulous <a href="#" className="text-[#0B3A55] underline">tour packages</a> that ensure a thrilling and serene experience. We believe that travelling evolves you, the adventure transforms you and the journey traverses through every sense to form the tapestry of the NEW YOU!
        </p>
        <p className="mb-4">
          Whether you are a solo traveller, or planning to book holiday packages with your friends or family — our tailor made packages are created with detail, attention, care and a passion for travel. Let us take you through the Majestic snow-capped mountains, Pristine beaches and bustling lanes of cosmopolitan cities. Travel Wisdom has an abundance of <a href="#" className="text-[#0B3A55] underline">International packages</a> to alluring and magnetic destinations like <a href="#" className="text-[#0B3A55]underline">Kazakhstan</a>, Dubai, Bali, <a href="#" className="text-[#0B3A55] underline">Vietnam</a>, <a href="#" className="text-[#0B3A55] underline">Thailand</a>, Singapore, Azerbaijan and <a href="#" className="text-[#0B3A55] underline">Georgia</a> to provide you utmost thrill with the least worry. For those adventure and nature lovers, we got you covered too! Our Tour Packages include popular destinations like <a href="#" className="text-[#0B3A55] underline">Leh & Ladakh</a>, <a href="#" className="text-[#0B3A55] underline">Spiti Valley</a>, Uttarakhand, Meghalaya, Manali and Shimla and many more. We work hard to trace the steps of India as well as beyond our borders.
        </p>
        {showFullText ? (
          <>
            <p className="mb-4">
              Our expert teams are full of local insights and passion for travel, that diligently curate itineraries to help you in turning your dream destination into a reality. We carry years of on-ground experience and knowledge in our pockets, to create polished and immaculate affordable travel packages that make your trip a bit more memorable and under budget.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>Backpacking Trips</strong> - Imagine walking through lush verdant valleys surrounded by majestic mountain views and a meandering river. Far away from the hustle-bustle of city life, disappear in nature’s lap.</li>
              <li><strong>Weekend Trips</strong> - Experience a swift trip, ideal for those who have less time, offering a quick <a href="#" className="text-[#0B3A55] underline">weekend getaway</a> with like-minded travellers.</li>
              <li><strong>Corporate Tours</strong> - Beyond the four walled cubicle office, a whole new world awaits you with fun activities and adventure. Get closer with your office mates and elevate your team performance.</li>
              <li><strong>Honeymoon Trips</strong> - Wander through the charming lanes, bask in the romantic experience of candlelight dinners. Our <a href="#" className="text-[#0B3A55] underline">honeymoon packages</a> create a magical journey to draw you closer to your loved ones.</li>
              <li><strong>Family Tours</strong> - Planning a trip with kids can be stressful on your own. Leave your worries to us, we curate tailor made packages to ensure your family tour is an enjoyable one.</li>
              <li><strong>Group Tours</strong> - Whether you are a solo traveller who wishes to share your journey with other kindred spirits or a bunch of friends wishing to expand your travel circle, our group tours help you to venture seamlessly to adventures.</li>
              <li><strong>Adventure Treks</strong>- Explore thrilling trekking trails with Travel Wisdom into the Himalayas and other parts of India, and disappear in the mystical land, tracing every brook and meadow.</li>
            </ul>
            <p>
          The core of Travel Wisdom travel community is our dedication to travel, and to infect you as much with the travel bug as we have been infected. Let us ignite within you the same passion for travel and get you to accompany us on <a href="#" className="text-[#0B3A55] underline">adventure trips</a>. Join us to discover the magic of travel with our Handcrafted Tour packages to locations that will leave you spellbound. Create lifelong memories with Travel Wisdom, and travel to places you have never been to before.
        </p>
            <button
              onClick={() => setShowFullText(false)}
              className="text-[#0B3A55] font-bold mt-4 hover:underline"
            >
              View Less
            </button>
          </>
        ) : (
          <button
            onClick={() => setShowFullText(true)}
            className="text-[#0B3A55] font-bold mt-9 hover:underline"
          >
            View More
          </button>
        )}
    </section>
      <Footer />
    </div>
  );
};

export default Index;