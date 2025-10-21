// src/pages/TripDetailPage.tsx
import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { allTrips, Trip } from '@/data/trips'; // Import your centralized data and Trip type
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm'; // Assuming you have this
// import TripSlider from '@/components/TripSlider'; // You might want related trips later
import NotFound from './NotFound'; // Import your 404 page
import { Clock, MapPin, Star, ChevronDown, ChevronUp, Phone, MessageSquare, Send, Youtube, Linkedin, Instagram } from 'lucide-react'; // Import icons

// --- Reusable UI Components (Adapted from HimachalBackpacking.tsx) ---

// Itinerary Item Component (Slightly adapted to check for content)
const ItineraryItem: React.FC<{ item: { day: number | string; title: string; content?: string; description?: string }, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
    // Use item.content primarily, fallback to item.description if needed (like from trips.ts initial structure)
    const displayContent = item.content || item.description || '<p>Details coming soon.</p>'; // Ensure there's always some content

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button onClick={onClick} className="w-full p-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                    <span className="bg-[#0B3A55] text-white text-xs font-semibold px-3 py-1 rounded-full">{typeof item.day === 'number' ? `Day ${item.day}` : item.day}</span>
                    <h3 className="font-semibold text-sm md:text-base text-gray-800">{item.title}</h3>
                </div>
                {isOpen ? <ChevronUp className="w-5 h-5 text-[#0B3A55]" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
            </button>
            {isOpen && (
                <div className="p-4 border-t border-gray-200">
                    <div className="prose prose-sm max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: displayContent }} />
                </div>
            )}
        </div>
    );
};


// Simple Booking Box (No occupancy logic for now, using Contact Form)
// You can add occupancy later if needed
const BookingBox: React.FC<{ trip: Trip }> = ({ trip }) => (
    <div className={`border bg-white p-4 sm:p-6 rounded-2xl shadow-xl`}>
        <div className="flex justify-between items-start mb-2">
            <p className="text-xl font-bold">Starting Price</p>
            {trip.discount && (
                <span className="bg-yellow-300 text-yellow-800 font-bold text-sm px-3 py-1 rounded-md">{trip.discount} Off</span>
            )}
        </div>
        <div className="mt-2 mb-6">
            <span className="text-4xl font-bold text-gray-900">{trip.price}</span>
            {trip.originalPrice && (
                <span className="text-lg text-gray-500 line-through ml-2">{trip.originalPrice}</span>
            )}
             <p className="text-sm text-gray-600">Per Person</p>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-4">Interested in this Trip?</h3>
        <p className="text-center text-sm text-gray-600 mb-4">Fill out your details below and our travel expert will get in touch shortly!</p>

        {/* --- Use ContactForm directly --- */}
        <ContactForm />

        {/* Optional Direct Contact Buttons */}
        <div className="flex gap-3 mt-4">
             <a href="https://api.whatsapp.com/send?phone=918076602635" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 text-sm w-full bg-green-500 text-white font-bold py-2.5 rounded-lg hover:bg-green-600 transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/></svg>
                Whatsapp
            </a>
            {/* Add Get PDF / Call buttons if needed */}
        </div>
    </div>
);


// --- Main Page Component ---
const TripDetailPage = () => {
  const { tripSlug } = useParams<{ tripSlug: string }>();
  const [openItinerary, setOpenItinerary] = useState(0); // Open Day 1 by default

  // Find the trip based on the slug
  const trip: Trip | undefined = tripSlug ? allTrips.find(t => t.slug === tripSlug) : undefined;

  // Handle trip not found
  if (!trip) {
    return <NotFound />;
  }

  // Placeholder gallery images (You might want to add gallery arrays to trips.ts)
  // For now, using the main image and potentially repeating it
  const galleryImages = [
      trip.imageUrl,
      trip.imageUrl, // Placeholder
      trip.imageUrl, // Placeholder
      trip.imageUrl, // Placeholder
  ];
   const mobileGallery = [trip.imageUrl, ...galleryImages.slice(1)]; // Use main + others

   // Placeholder features (Ideally, add features to trips.ts)
    const features = [
        { name: 'Stay', icon: '/cloned_media/21556120241021125642.png' },
        { name: 'Transfers', icon: '/cloned_media/41278020241021125603.png' },
        { name: 'Meals', icon: '/cloned_media/17264920241021125723.png' },
        // Add more common features or make this dynamic based on trip data
    ];

    // Placeholder Things to Pack (Could be generic or added to trips.ts)
    const thingsToPack = [
        { text: "Good quality rucksack & day bag with rain-cover.", icon: '/cloned_media/5261020250821080750.png' },
        { text: "Trekking/sports shoes with good grip, socks & floaters.", icon: '/cloned_media/7672820250825123523.png' },
        { text: "Appropriate clothing layers (jacket, fleece, thermals etc.) based on destination & season.", icon: '/cloned_media/9170920250825123607.png' },
        { text: "Personal care items (sunscreen, lip balm, toiletries).", icon: '/cloned_media/14435720250825123645.png' },
        { text: "Personal medication & basic first-aid kit.", icon: '/cloned_media/11222620250825123717.png' },
        { text: "Valid Government ID proofs.", icon: '/cloned_media/528220250825123752.png' },
        { text: "Sunglasses, charger, power bank, quick dry towel, cash, snacks, water bottle.", icon: '/cloned_media/7654520250825123857.png' }
      ];

     // Placeholder Reviews (Ideally fetch these dynamically or add to trips.ts)
     const reviews = [
         { name: "Traveler 1", rating: 5, comment: "Amazing trip, highly recommended!", image: '/cloned_media/profilepic.png' },
         { name: "Traveler 2", rating: 4, comment: "Great experience, well organized.", image: '/cloned_media/profilepic.png' }
     ];

     // Placeholder Related Trips (Fetch dynamically based on destination/category later)
     const relatedTrips = allTrips
        .filter(related => related.destination === trip.destination && related.slug !== trip.slug)
        .slice(0, 4); // Show up to 4 related trips from the same destination

     const navLinks = ['Overview', 'Itinerary', 'Inclusions', 'Exclusions', 'ThingsToPack', 'Reviews'];


  return (
    <div className="bg-gray-100 font-sans" style={{fontFamily: "'Poppins', sans-serif"}}>
      <Header />

      <main className="max-w-screen-xl mx-auto px-4 pt-4 sm:pt-8 pb-20 lg:pb-8">
        {/* Mobile-only Gallery */}
        <div className="lg:hidden mb-4">
           <div className="overflow-x-auto snap-x snap-mandatory flex gap-2">
                {mobileGallery.map((img, i) => (
                    <img key={i} src={img} className="snap-center flex-shrink-0 w-full h-64 object-cover rounded-lg shadow-md" alt={`${trip.title} scenery ${i+1}`} />
                ))}
           </div>
        </div>

        {/* Desktop Gallery */}
        <header className="hidden lg:block mb-6">
          <div className="flex gap-2 h-[500px]">
            <div className="w-3/5">
              <img src={trip.imageUrl} className="w-full h-full object-cover rounded-l-2xl shadow-lg" alt={`Main view of ${trip.title}`}/>
            </div>
            <div className="w-2/5 grid grid-cols-2 grid-rows-2 gap-2">
              {galleryImages.slice(1, 5).map((img, i) => ( // Use placeholders for now
                <img key={i} src={img} className={`w-full h-full object-cover shadow-lg ${i === 0 ? 'rounded-tr-2xl' : ''} ${i === 2 ? 'rounded-br-2xl' : ''}`} alt={`${trip.title} gallery image ${i+1}`}/>
              ))}
            </div>
          </div>
        </header>

         <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-8">

          {/* Main Content (Left Column) */}
          <div className="lg:col-span-8">
             {/* --- Mobile Title & Info Box --- */}
            <div className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg lg:hidden mb-6">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{trip.title}</h1>
                <div className="grid grid-cols-2 gap-4 mt-4 py-4 border-t border-b border-gray-100">
                    <div className="flex flex-col items-center text-center bg-gray-50 p-2 rounded-lg">
                        <Clock className="w-6 h-6 text-[#0B3A55] mb-1"/>
                        <p className="text-xs text-gray-600">Trip Duration</p>
                        <p className="font-semibold text-sm">{trip.duration}</p>
                    </div>
                     <div className="flex flex-col items-center text-center bg-gray-50 p-2 rounded-lg">
                        <MapPin className="w-6 h-6 text-[#0B3A55] mb-1"/>
                         {/* Assuming pickupDrop is not in Trip interface yet, using Destination */}
                        <p className="text-xs text-gray-600">Destination</p>
                        <p className="font-semibold text-sm">{trip.destination}</p>
                    </div>
                </div>
                 <div className="grid grid-cols-3 gap-2 mt-4">
                    {features.map(feature => ( // Using placeholder features
                        <div key={feature.name} className="flex flex-col items-center text-center">
                            <img src={feature.icon} alt={feature.name} className="w-6 h-6"/>
                            <span className="text-xs font-medium text-gray-700 mt-1">{feature.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Desktop Title & Info Box --- */}
            <div className="hidden lg:block border bg-white p-6 rounded-2xl shadow-lg mb-6">
                <h1 className="text-3xl font-bold text-gray-900">{trip.title}</h1>
                 <div className="grid grid-cols-3 gap-6 pt-4 mt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <Clock className="w-8 h-8 text-[#0B3A55] flex-shrink-0"/>
                        <div>
                            <p className="text-sm text-gray-600">Trip Duration</p>
                            <p className="font-semibold">{trip.duration}</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <MapPin className="w-8 h-8 text-[#0B3A55] flex-shrink-0"/>
                        <div>
                           {/* Assuming pickupDrop is not in Trip interface yet, using Destination */}
                            <p className="text-sm text-gray-600">Destination</p>
                            <p className="font-semibold">{trip.destination}</p>
                        </div>
                    </div>
                    {/* Placeholder Category - Ideally add to trips.ts */}
                     <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#0B3A55] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                        <div>
                            <p className="text-sm text-gray-600">Trip Category</p>
                            <p className="font-semibold">Backpacking / Leisure</p>
                        </div>
                    </div>
                </div>
                 <div className="flex flex-wrap gap-x-8 gap-y-4 mt-6 pt-4 border-t border-gray-100">
                    {features.map(feature => ( // Using placeholder features
                        <div key={feature.name} className="flex items-center gap-2">
                            <img src={feature.icon} alt={feature.name} className="w-6 h-6"/>
                            <span className="font-medium text-gray-700">{feature.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Sticky Navigation --- */}
             <div className="hidden lg:block sticky top-20 z-30 bg-white/90 backdrop-blur-sm rounded-xl shadow-md mb-6 p-2">
                <div className="flex justify-around">
                    {navLinks.map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} className="font-semibold text-gray-700 hover:text-[#0B3A55] transition-colors px-3 py-2 rounded-lg text-sm">
                            {link.replace(/([A-Z])/g, ' $1').trim()} {/* Add space before capital letters */}
                        </a>
                    ))}
                </div>
            </div>

            {/* --- Content Sections --- */}
            <div className="space-y-6">
              <div id="overview" className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-3 mb-4">Overview</h2>
                {/* Use dangerouslySetInnerHTML if overview contains HTML, otherwise just {trip.overview} */}
                <div className="prose prose-sm max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: trip.overview || '<p>Detailed overview coming soon.</p>' }} />
              </div>

              <div id="itinerary" className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-3 mb-4">Itinerary</h2>
                <div className="space-y-4">
                  {trip.itinerary && trip.itinerary.length > 0 && trip.itinerary[0].title !== 'Trip Details' && trip.itinerary[0].title !== 'Placeholder Title' ? (
                     trip.itinerary.map((item, index) => (
                      <ItineraryItem
                        key={index}
                        // Pass the correct structure expected by ItineraryItem
                        item={{ day: item.day, title: item.title, description: item.description }}
                        isOpen={openItinerary === index}
                        onClick={() => setOpenItinerary(openItinerary === index ? -1 : index)}
                      />
                    ))
                  ) : (
                     <p className="text-gray-600 italic">Detailed itinerary coming soon. Contact us for more details!</p>
                  )}
                </div>
              </div>

              <div id="inclusions" className="border bg-green-50 p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                  <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-200 pb-3 mb-4">Inclusions ✅</h2>
                  {trip.inclusions && trip.inclusions.length > 0 ? (
                    // If inclusions are simple strings:
                    <ul className="prose prose-sm max-w-none text-gray-700 list-disc pl-5 space-y-1">
                        {trip.inclusions.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                    // If inclusions contain HTML (like in HimachalBackpacking):
                    // <div className="prose prose-sm max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: trip.inclusions.join('') // Or however HTML is stored }} />
                  ) : (
                    <p className="text-gray-600 italic">Details coming soon.</p>
                  )}
              </div>

              <div id="exclusions" className="border bg-red-50 p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                   <h2 className="text-xl font-bold text-red-800 border-b-2 border-red-200 pb-3 mb-4">Exclusions ❌</h2>
                   {trip.exclusions && trip.exclusions.length > 0 ? (
                       <ul className="prose prose-sm max-w-none text-gray-600 list-disc pl-5 space-y-1">
                           {trip.exclusions.map((item, index) => <li key={index}>{item}</li>)}
                       </ul>
                   ) : (
                      <p className="text-gray-600 italic">Details coming soon.</p>
                   )}
              </div>

               <div id="thingstopack" className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                  <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-3 mb-4">Things To Pack 🎒</h2>
                  <div className="space-y-4">
                      {thingsToPack.map((item, index) => ( // Using placeholder thingsToPack
                          <div key={index} className="flex items-start gap-4">
                              <img src={item.icon} alt="packing icon" className="w-8 h-8 flex-shrink-0 mt-1"/>
                              <p className="text-gray-600 text-sm">{item.text}</p>
                          </div>
                      ))}
                  </div>
              </div>

               <div id="reviews" className="border bg-white p-4 sm:p-6 rounded-2xl shadow-lg scroll-mt-24">
                  <h2 className="text-xl font-bold text-gray-900 border-b-2 border-gray-100 pb-3 mb-4">Reviews ⭐</h2>
                   {reviews && reviews.length > 0 ? ( // Using placeholder reviews
                      <div className="space-y-6">
                          {reviews.map((review, index) => (
                              <div key={index} className="flex items-start gap-4 border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                                  <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover"/>
                                  <div className="flex-1">
                                      <div className="flex justify-between items-center mb-1">
                                          <h4 className="font-semibold text-sm">{review.name}</h4>
                                          <div className="flex">
                                              {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-500 fill-current"/>)}
                                              {[...Array(5 - review.rating)].map((_, i) => <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current"/>)}
                                          </div>
                                      </div>
                                      <p className="text-sm text-gray-600 mt-1">{review.comment}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                   ) : (
                     <p className="text-gray-600 italic">No reviews yet for this trip.</p>
                   )}
              </div>
                {/* Mobile Booking Box (appears at the bottom on mobile) */}
                 {/* <BookingBox trip={trip} /> --- No need to repeat if handled by layout */}
            </div>
          </div>

          {/* --- Sticky Sidebar (Right Column) --- */}
          <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-24">
                <BookingBox trip={trip} />
              </div>
          </aside>
        </div>

        {/* --- Related Trips --- */}
        {relatedTrips.length > 0 && (
            <div className="mt-16">
                <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">More Trips in {trip.destination} 🗺️</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {relatedTrips.map((relatedTrip, index) => (
                         // IMPORTANT: This Link needs TripSlider updated first
                        <Link to={`/trip/${relatedTrip.slug}`} key={index} className="bg-white rounded-lg shadow-md overflow-hidden group transition-transform duration-300 hover:scale-105 hover:shadow-xl block">
                            <img src={relatedTrip.imageUrl} alt={relatedTrip.title} className="w-full h-32 sm:h-40 object-cover"/>
                            <div className="p-3 sm:p-4">
                            <h3 className="font-semibold text-sm sm:text-base text-gray-800 line-clamp-2">{relatedTrip.title}</h3>
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">Starting <span className="font-bold text-[#0B3A55]">{relatedTrip.price}</span></p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        )}
      </main>

       {/* Mobile Bottom Bar - Placeholder */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] z-40 border-t border-gray-200">
          <div className="flex justify-around items-center p-2">
               <a href="https://api.whatsapp.com/send?phone=918076602635&text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(trip.title)}%20trip%20(${window.location.href})" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-xs font-medium text-gray-700 hover:text-green-600 gap-0.5">
                  <img src="/cloned_media/whatsapp.webp" alt="whatsapp" className="w-5 h-5"/>
                  Whatsapp
              </a>
              <button onClick={() => document.querySelector('aside form')?.scrollIntoView({ behavior: 'smooth' })} className="flex flex-col items-center text-xs font-medium text-gray-700 hover:text-[#0B3A55] gap-0.5">
                   <img src="/cloned_media/messenger.png" alt="query" className="w-5 h-5"/>
                  Send Query
              </button>
               <a href="tel:+918076602635" className="flex flex-col items-center text-xs font-medium text-gray-700 hover:text-[#0B3A55] gap-0.5">
                  <img src="/cloned_media/phonecall.png" alt="call" className="w-5 h-5"/>
                  Call
              </a>
          </div>
      </div>

       <Footer />
    </div>
  );
};

export default TripDetailPage;