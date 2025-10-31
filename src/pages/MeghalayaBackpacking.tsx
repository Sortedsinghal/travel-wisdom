// src/pages/MeghalayaBackpacking.tsx
// ✅ Full version: identical layout & logic to TripDetailPage.tsx but with Meghalaya content

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { QueryForm } from "@/components/QueryForm";
import {
  Clock,
  MapPin,
  Star,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";

// --- Static Trip Data (Meghalaya) ---
const tripData = {
  slug: "meghalaya-backpacking",
  title: "Meghalaya Backpacking",
  duration: "6 Days 5 Nights",
  pickupDrop: "Guwahati-Guwahati",
  destination: "Meghalaya",
  category: "Backpacking Trips",
  price: "20,500",
  originalPrice: "23,000",
  discount: "2,500",
  imageUrl: "/cloned_media/34404220250703080227.png",
  gallery: [
    "/cloned_media/16540420220720040415.png",
    "/cloned_media/24662820220720040415.png",
    "/cloned_media/37889620220720040415.png",
    "/cloned_media/27715620220720040415.png",
    "/cloned_media/7110420220720040415.png",
    "/cloned_media/21617120220720040415.png",
    "/cloned_media/33768020220720040415.png",
    "/cloned_media/20405720220720040415.png",
  ],
  features: [
    { name: "Stay", icon: "/cloned_media/21556120241021125642.png" },
    { name: "Bonfire", icon: "/cloned_media/5910920241021125745.png" },
    { name: "Transfers", icon: "/cloned_media/41278020241021125603.png" },
    { name: "Camping", icon: "/cloned_media/39205420241021125812.png" },
    { name: "Meals", icon: "/cloned_media/17264920241021125723.png" },
    { name: "Explorations", icon: "/cloned_media/13075920241021125921.png" },
  ],
  overview: `<h2>About Meghalaya Backpacking Trip</h2>
<p>
Welcome to Meghalaya — the ‘Abode of Clouds’. Tucked away in the lush hills of Northeast India, Meghalaya is a magical land of living root bridges, crystal-clear rivers, sacred forests, and misty waterfalls. This backpacking journey takes you through the heart of this paradise — from the vibrant streets of Shillong to the rain-soaked cliffs of Cherrapunji and the glassy blue waters of Dawki.
</p>
<p>
Over six incredible days, you’ll trek through ancient forests to reach the Double Decker Living Root Bridge, explore Asia’s cleanest village, camp beside the pristine Umngot River, and chase clouds through canyons and waterfalls. The trip perfectly blends adventure, culture, and peace — ideal for solo travelers, groups, or anyone looking to reconnect with nature.
</p>
<p>
Get ready for a road trip through one of India’s greenest and most soulful destinations, filled with laughter, adventure, and lifelong memories.
</p>
`,
  itinerary: [
  {
    day: "Day 1",
    title: "Arrival at Guwahati | Drive to Shillong – The Scotland of the East",
    content: `<ul>
      <li>Assemble at Guwahati and meet your fellow travelers.</li>
      <li>Drive through pine-covered hills to Shillong, Meghalaya’s lively capital city.</li>
      <li>En route, stop by the breathtaking <b>Umiam Lake</b> — a perfect spot for photos.</li>
      <li>Check into your hotel, relax, and explore <b>Police Bazaar</b> for cafes and local food.</li>
      <li>Overnight stay in Shillong.</li>
    </ul>`,
  },
  {
    day: "Day 2",
    title: "Shillong to Cherrapunji | Waterfalls & Caves",
    content: `<ul>
      <li>Wake up early and head towards <b>Cherrapunji</b>, one of the wettest places on Earth.</li>
      <li>Visit stunning viewpoints at <b>Laitlum Canyons</b> and <b>Mawkdok Dympep Valley</b>.</li>
      <li>Witness the mighty <b>Nohkalikai Falls</b> and explore the mystical <b>Mawsmai Caves</b>.</li>
      <li>Enjoy the misty beauty of rolling green hills and waterfalls throughout the drive.</li>
      <li>Overnight stay in Cherrapunji.</li>
    </ul>`,
  },
  {
    day: "Day 3",
    title: "Living Root Bridges | Nature Trekking Day",
    content: `<ul>
      <li>Start early for a scenic drive to <b>Tyrna Village</b> — the base for your trek.</li>
      <li>Begin your descent to the famous <b>Double Decker Living Root Bridge</b> at Nongriat.</li>
      <li>Hike through 3,500+ steps surrounded by lush forest, waterfalls, and serene streams.</li>
      <li>Take a refreshing dip in natural pools and enjoy the peaceful jungle atmosphere.</li>
      <li>Return to Cherrapunji for the night.</li>
    </ul>`,
  },
  {
    day: "Day 4",
    title: "Cherrapunji to Dawki | Mawlynnong & River Camping",
    content: `<ul>
      <li>Post breakfast, depart for <b>Dawki</b> via <b>Mawlynnong</b> — Asia’s cleanest village.</li>
      <li>Walk across the <b>Single Root Bridge</b> and see the iconic <b>Balancing Rock</b>.</li>
      <li>Arrive at Dawki and check into riverside camps along the <b>Umngot River</b>.</li>
      <li>Spend the evening enjoying bonfires, games, and stargazing beside crystal-clear waters.</li>
      <li>Overnight stay in tents beside the river.</li>
    </ul>`,
  },
  {
    day: "Day 5",
    title: "Adventure at Dawki | Krang Suri Falls | Back to Shillong",
    content: `<ul>
      <li>Morning adventure session — go <b>boating, cliff jumping, or kayaking</b> in the transparent Umngot River.</li>
      <li>Later, drive to the turquoise <b>Krang Suri Waterfall</b> — swim or relax by the pool.</li>
      <li>Head back to Shillong and check into your hotel for a cozy evening with your group.</li>
      <li>Overnight stay in Shillong.</li>
    </ul>`,
  },
  {
    day: "Day 6",
    title: "Shillong to Guwahati | Departure with Memories",
    content: `<ul>
      <li>After breakfast, begin your return journey to Guwahati.</li>
      <li>Drop-off at airport/railway station and bid farewell to your travel mates.</li>
      <li>Trip ends with unforgettable memories and countless stories from Meghalaya!</li>
    </ul>`,
  },
],
  inclusions: [
    "Transportation: Tempo Traveler/SUV from Guwahati to Guwahati and local sightseeing.",
    "5 nights Accommodation on sharing basis.",
    "6 Meals: Breakfast and Dinner as per itinerary.",
    "Local Trek Guide for Double Decker Living Roots Bridge.",
    "All Remote Assistance on Call (24x7).",
  ],
  exclusions: [
    "Any extra meals and stay apart from inclusions.",
    "Personal expenses, porterage, laundry, etc.",
    "Entry fees or extra activities unless mentioned.",
    "Cost of 4x4 vehicle if needed due to weather.",
    "Anything not mentioned in inclusions.",
    "GST (5%) extra.",
  ],
  thingsToPack: [
    { text: "Rucksack (40–60L) and small daypack", icon: "/cloned_media/5261020250821080750.png" },
    { text: "Trekking shoes and slippers", icon: "/cloned_media/7672820250825123523.png" },
    { text: "Warm clothes, raincoat, gloves", icon: "/cloned_media/9170920250825123607.png" },
  ],
  relatedTrips: [
    { title: "Himachal Pradesh", price: "₹7,000", image: "/cloned_media/himachal.webp", slug: "himachal-backpacking" },
    { title: "Uttarakhand", price: "₹7,000", image: "/cloned_media/uttarakhand.webp", slug: "uttarakhand-backpacking" },
    { title: "Kashmir", price: "₹15,000", image: "/cloned_media/kashmir.webp", slug: "kashmir-backpacking" },
  ],
};

// --- Subcomponents ---
const ItineraryItem = ({ item, isOpen, onClick }) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden">
    <button
      onClick={onClick}
      className="w-full p-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100"
    >
      <div className="flex items-center gap-3">
        <span className="bg-[#0B3A55] text-white text-xs font-semibold px-3 py-1 rounded-full">
          {item.day}
        </span>
        <h3 className="font-semibold text-sm md:text-base text-gray-800">
          {item.title}
        </h3>
      </div>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-[#0B3A55]" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-500" />
      )}
    </button>
    {isOpen && (
      <div className="p-4 border-t border-gray-200">
        <div
          className="content-display text-gray-600"
          dangerouslySetInnerHTML={{ __html: item.content }}
        />
      </div>
    )}
  </div>
);

const BookingBox = ({ trip }) => (
  <div className="border bg-white p-6 rounded-2xl shadow-xl">
    <div className="flex justify-between items-start mb-2">
      <p className="text-xl font-bold">Starting Price</p>
      {trip.discount && (
        <span className="bg-yellow-300 text-yellow-800 font-bold text-sm px-3 py-1 rounded-md">
          ₹{trip.discount} Off
        </span>
      )}
    </div>
    <div className="mt-2 mb-6">
      <span className="text-4xl font-bold text-gray-900">₹{trip.price}</span>
      {trip.originalPrice && (
        <span className="text-lg text-gray-500 line-through ml-2">
          ₹{trip.originalPrice}
        </span>
      )}
      <p className="text-sm text-gray-600">Per Person</p>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 mb-4">
      Interested in this Trip?
    </h3>
    <ContactForm />
    <a
      href="https://api.whatsapp.com/send?phone=919971545446&text=Hi"
      target="_blank"
      rel="noopener noreferrer"
      className="flex mt-4 items-center justify-center bg-green-500 text-white font-bold py-2.5 rounded-lg hover:bg-green-600 transition-colors"
    >
      WhatsApp
    </a>
  </div>
);

const GalleryModal = ({ isOpen, onClose, images }) =>
  isOpen ? (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-300"
        onClick={onClose}
      >
        <X size={32} />
      </button>
      <div
        className="bg-white rounded-lg max-w-4xl w-full overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 space-y-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i}`}
              className="w-full object-contain rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  ) : null;

// --- Main Component ---
const MeghalayaBackpacking = () => {
  const [openItinerary, setOpenItinerary] = useState(0);
  const [showQueryForm, setShowQueryForm] = useState(false);
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);

  const trip = tripData;
  const galleryImages = [trip.imageUrl, ...trip.gallery];
  const reviews = [
    { name: "Traveler 1", rating: 5, comment: "Amazing trip!" },
    { name: "Traveler 2", rating: 4, comment: "Great experience!" },
  ];

  return (
    <div className="bg-gray-100 font-sans" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 pt-8 pb-20">
        {/* Gallery */}
        <div className="lg:hidden mb-4 relative">
          <div className="overflow-x-auto flex gap-2">
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
          <button
            onClick={() => setShowGalleryModal(true)}
            className="absolute bottom-4 right-4 bg-white/80 text-gray-800 font-semibold py-1 px-3 rounded-lg"
          >
            See All
          </button>
        </div>

        {/* Desktop Gallery */}
        <div className="hidden lg:flex gap-2 h-[500px] mb-6">
          <div className="w-3/5">
            <img
              src={trip.imageUrl}
              className="w-full h-full object-cover rounded-l-2xl shadow-lg"
            />
          </div>
          <div className="w-2/5 grid grid-cols-2 grid-rows-2 gap-2">
            {trip.gallery.slice(0, 4).map((img, i) => (
              <div key={i} className="relative">
                <img
                  src={img}
                  className={`w-full h-full object-cover shadow-lg ${
                    i === 1 ? "rounded-tr-2xl" : ""
                  } ${i === 3 ? "rounded-br-2xl" : ""}`}
                />
                {i === 3 && (
                  <button
                    onClick={() => setShowGalleryModal(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/50 text-white font-bold text-lg rounded-br-2xl"
                  >
                    See All
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Title & Info */}
        <div className="border bg-white p-6 rounded-2xl shadow-lg mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{trip.title}</h1>
          <div className="grid grid-cols-3 gap-6 pt-4 mt-4 border-t border-gray-100">
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-[#0B3A55]" />
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold">{trip.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
              <MapPin className="w-6 h-6 text-[#0B3A55]" />
              <div>
                <p className="text-sm text-gray-600">Pickup & Drop</p>
                <p className="font-semibold">{trip.pickupDrop}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-600">Category</p>
              <p className="font-semibold">{trip.category}</p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="border bg-white p-6 rounded-2xl shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-4">Overview</h2>
          <div
            className={`relative ${
              isOverviewExpanded ? "" : "max-h-64 overflow-hidden"
            }`}
          >
            <div
              className="text-gray-600 content-display"
              dangerouslySetInnerHTML={{ __html: trip.overview }}
            />
            {!isOverviewExpanded && (
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
            )}
          </div>
          <button
            onClick={() => setIsOverviewExpanded(!isOverviewExpanded)}
            className="text-sm font-semibold text-[#0B3A55] mt-4"
          >
            {isOverviewExpanded ? "Read Less" : "Read More"}
          </button>
        </section>

        {/* Itinerary */}
        <section className="border bg-white p-6 rounded-2xl shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-4">Itinerary</h2>
          <div className="space-y-4">
            {trip.itinerary.map((item, index) => (
              <ItineraryItem
                key={index}
                item={item}
                isOpen={openItinerary === index}
                onClick={() =>
                  setOpenItinerary(openItinerary === index ? -1 : index)
                }
              />
            ))}
          </div>
        </section>

        {/* Inclusions / Exclusions */}
        <section className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="border bg-green-50 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-green-800 mb-4">
              Inclusions ✅
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {trip.inclusions.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          </div>
          <div className="border bg-red-50 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold text-red-800 mb-4">
              Exclusions ❌
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {trip.exclusions.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Things To Pack */}
        <section className="border bg-white p-6 rounded-2xl shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-4">Things To Pack 🎒</h2>
          {trip.thingsToPack.map((t, i) => (
            <div key={i} className="flex gap-4 mb-3">
              <img src={t.icon} alt="" className="w-8 h-8" />
              <p className="text-gray-600 text-sm">{t.text}</p>
            </div>
          ))}
        </section>

        {/* Reviews */}
        <section className="border bg-white p-6 rounded-2xl shadow-lg mb-6">
          <h2 className="text-xl font-bold mb-4">Reviews ⭐</h2>
          {reviews.map((r, i) => (
            <div key={i} className="mb-4 border-b pb-2">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-semibold text-sm">{r.name}</h4>
                <div className="flex">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-4 h-4 ${
                        j < r.rating ? "text-yellow-500" : "text-gray-300"
                      } fill-current`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600">{r.comment}</p>
            </div>
          ))}
        </section>

        {/* Related Trips */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-center mb-8">
            More Trips in {trip.destination}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {trip.relatedTrips.map((rel, i) => (
              <Link
                key={i}
                to={`/trip/${rel.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform"
              >
                <img src={rel.image} alt={rel.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-sm line-clamp-2">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Starting <span className="font-bold">{rel.price}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <GalleryModal
          isOpen={showGalleryModal}
          onClose={() => setShowGalleryModal(false)}
          images={galleryImages}
        />

        <QueryForm
          isOpen={showQueryForm}
          onClose={() => setShowQueryForm(false)}
          tripName={trip.title}
        />
      </main>

      <Footer />
    </div>
  );
};

export default MeghalayaBackpacking;
